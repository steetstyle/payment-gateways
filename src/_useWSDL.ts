import { useState } from 'react'
import fetch from 'node-fetch'
import xml from 'xml2js'
import { buildXML } from './utils/buildXML'


const API_URL = process.env.REACT_APP_PARAM_API_URL

type useWSDLReturn<APIResponse, APIError> = [
	response: null | APIResponse,
	run: (...args: any[]) => Promise<void>,
	isLoading: boolean,
	error: null | 'unknownError' | APIError
]


export function _useWSDL<Request, Response, Error> (runAPI: (args: any) => Promise<Response>): useWSDLReturn<Response, Error> {
	const [ response, setResponse ] = useState<null | Response>(null)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ error, setError ] = useState<null | Error>(null)

	async function run (...args: Parameters<typeof runAPI>) {
		setIsLoading(true)

		try{
			const res = await runAPI(args)

			setResponse(res)
		}catch(error: any){
			// Unhandled error
			setError(error)
		}finally{
			setIsLoading(false)
		}
	}

	return [ response, run, isLoading, error ]
}

export type WSDLResponse<Response> = Response

export async function _fetchWSDL<Request, Response> (apiUrl: string, requestBody: Request, fullURL = false, actionXmlns: string): Promise<Response> {
	let url: string

	if(fullURL)
		url = apiUrl
	else
		url = `${API_URL}${apiUrl}`

	const body = buildXML(requestBody).replace('actionXmlns', actionXmlns)

	const request = await fetch(url, {
		method: 'POST',
		headers: {
			'content-type': 'text/xml'
		},
		body
	})

	const response: Response = await xml.parseStringPromise(await request.text(), { explicitArray: false })
	const bodyResult = (response as any)['soap:Envelope']['soap:Body']
	const responseKey = Object.keys(bodyResult)[0]
	const resultKey = Object.keys(bodyResult[responseKey])[1]
	const result = bodyResult[responseKey][resultKey]

	if(result['Sonuc'] < 1) throw new Error(result['Sonuc_Str'])

	return response
}
