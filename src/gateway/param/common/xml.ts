import { BaseXML } from '.'


export function createRequest<T> (object: T): BaseXML<T> {
	return {
		'soap:Envelope': {
			$: {
				'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
				'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema'
			},
			'soap:Body': {
				$: {
					'xmlns': 'actionXmlns'
				},
				...object
			}
		}
	} as BaseXML<T>
}

export function getXMLBody<T> (object: BaseXML<T>): T {
	return object['soap:Envelope']['soap:Body']
}
