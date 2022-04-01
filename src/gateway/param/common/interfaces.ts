//
// Common Interfaces
//

export interface BaseXML<T> {
	'soap:Envelope': {
		$?: {
			'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
			'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema',
		},
		'soap:Body': {
			$?: {
				'xmlns': string
			}
		} & T
	};
}

export interface Credentials {
	CLIENT_CODE: number;
	CLIENT_USERNAME: string;
	CLIENT_PASSWORD: string;
}
