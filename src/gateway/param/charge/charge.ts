import * as ChargeCard from './chargeCard'
import * as ChargeWithSavedCard from './chargeWithSavedCard'
import { WSDLResponse } from '../../../_useWSDL'
import { getXMLBody } from '../common'


export type PaymentType = 'normal' | 'saved'

export type ChargeRequest = ChargeCard.Request.XML | ChargeWithSavedCard.Request.XML

export type ChargeResponse = ChargeCard.Response3D.Body['Pos_OdemeResponse']['Pos_OdemeResult'] |
	ChargeCard.ResponseNS.Body['Pos_OdemeResponse']['Pos_OdemeResult'] |
	ChargeWithSavedCard.Response.Body['KS_TahsilatResponse']['KS_TahsilatResult']

function getResponse (object: ChargeCard.Response3D.Body | ChargeCard.ResponseNS.Body | ChargeWithSavedCard.Response.Body) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const raw = object as any
	const resultKey = Object.keys(raw)[Object.keys(raw).length - 1]
	const responseKey = Object.keys(raw[resultKey])[Object.keys(raw[resultKey]).length - 1]
	return raw[resultKey][responseKey] as ChargeResponse
}

export async function charge<Request extends ChargeRequest> (type: PaymentType, request: Request): Promise<WSDLResponse<ChargeResponse> | null> {
	if(type === 'saved' && request){
		return getResponse(getXMLBody(await ChargeWithSavedCard.run(request as ChargeWithSavedCard.Request.XML)))
	}else if(type === 'normal'){
		return getResponse(getXMLBody(await ChargeCard.run(request as ChargeCard.Request.XML)))
	}
	throw new Error('paymentTypeNotFound')
}
