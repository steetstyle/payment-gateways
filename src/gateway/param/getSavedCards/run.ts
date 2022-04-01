import { Request, Response } from '.'
import { _fetchWSDL, _useWSDL } from '../../../_useWSDL'


const url = '/out.ws/service_ks.asmx'

const xmlns = 'https://turkpara.com.tr/'

export async function run (request: Request.XML): Promise<Response.XML> {
	return _fetchWSDL<Request.XML, Response.XML>(url, request, undefined, xmlns)
}

export type Errors =
	'-'

export function useWSDL () {
	return _useWSDL<Request.XML, Response.XML, Errors>(run)
}
