import { Request, Response3D, ResponseNS } from '.'
import { _fetchWSDL, _useWSDL } from '../../../../_useWSDL'


type Response = Response3D.XML | ResponseNS.XML

const url = '/turkpos.ws/service_turkpos_test.asmx?wsdl=true'

const xmlns = 'https://turkpos.com.tr/'

export async function run (request: Request.XML): Promise<Response> {
	return _fetchWSDL<Request.XML, Response>(url, request, undefined, xmlns)
}

export type Errors =
	'-'

export function useWSDL () {
	return _useWSDL<Request.XML, Response, Errors>(run)
}
