export function defaultPayTRHeader () {
	return false
}

export function buildPaytrURL (serviceURL: string) {
	return `https://www.paytr.com${serviceURL}`
}
