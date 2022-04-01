import xml from 'xml2js'


export function buildXML<Request> (requestBody: Request): string {
	// XML Builder configuration, https://github.com/Leonidas-from-XIV/node-xml2js#options-for-the-builder-class.
	const builder = new xml.Builder({
		renderOpts: { 'pretty': true }
	})

	const xmlBody = builder.buildObject(requestBody)

	return xmlBody
}
