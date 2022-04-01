import { Request } from '.'
import { _fetchAPI, _useAPI } from '../../../../_useAPI'
import { buildPaytrURL, defaultPayTRHeader } from '../../common'


const url = '/odeme'

export async function run (request: Request.Body): Promise<any> {
	return _fetchAPI<Request.Body, any>(buildPaytrURL(url), request, defaultPayTRHeader(), true)
}

export type Errors =
	'-'

export function useAPI () {
	return _useAPI<Request.Body, any, Errors>(run)
}
