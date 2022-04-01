import { Request, Response } from '.'
import { _fetchAPI, _useAPI } from '../../../_useAPI'
import { buildPaytrURL, defaultPayTRHeader } from '../common'


const url = '/odeme/capi/list'

export async function run (request: Request.Body): Promise<Response.Body> {
	return _fetchAPI<Request.Body, Response.Body>(buildPaytrURL(url), request, defaultPayTRHeader(), true)
}

export type Errors =
	'-'

export function useAPI () {
	return _useAPI<Request.Body, Response.Body, Errors>(run)
}
