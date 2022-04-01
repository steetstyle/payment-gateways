/* eslint-disable @typescript-eslint/no-explicit-any */
import AsyncStorage from '@react-native-async-storage/async-storage'
import fetch from 'node-fetch'
import { useState } from 'react'
import { convertFormData } from './utils/convertFormData'

const API_URL = process.env.REACT_APP_API_URL

type useAPIReturn<APIResponse, APIError> = [
	response: null | APIResponse,
	run: (...args: any[]) => Promise<void>,
	isLoading: boolean,
	error: null | 'unknownError' | APIError
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function _useAPI<Request, Response, Error> (runAPI: (...args: any[]) => Promise<Response>): useAPIReturn<Response, Error> {
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

interface APIResponse<Response> {
	success: true;
	data: Response;
	error?: string;
}

export interface Headers {
	'content-type': 'application/json' | 'multipart/form-data';
	[key: string]: any;
}

export async function _fetchAPI<Request, Response> (apiUrl: string, requestBody: Request, overrideHeaders?: Headers | boolean | null, fullURL = false): Promise<Response | any> {
	let url: string

	if(fullURL)
		url = apiUrl
	else
		url = `${API_URL}${apiUrl}`

	let headers
	if(overrideHeaders === false){
		headers = undefined
	}else if(overrideHeaders === null){
		headers = {
			'content-type': 'application/json',
			'authorization': await getAuth()
		}
	}else{
		headers = overrideHeaders
	}

	const body = typeof headers !== 'boolean' && headers?.['content-type'] === 'application/json' ? JSON.stringify({
		values: requestBody
	}) : convertFormData(requestBody as any)

	const request = await fetch(url, {
		method: 'POST',
		headers: headers as Headers,
		body: body as string
	})

	// Update auth token
	const setAuth = request.headers.get('set-authorization')
	if(setAuth) await updateAuth(setAuth)

	let response: any = await request.text()
	try{
		response = JSON.parse(response)
	}catch(error){
		//
	}

	if(response?.error)
		throw new Error(response.error)
	if(response?.data)
		return response.data

	return response
}

async function getAuth () {
	return await AsyncStorage.getItem('userToken') || ''
}

async function updateAuth (token: string) {
	return await AsyncStorage.setItem('userToken', token)
}
