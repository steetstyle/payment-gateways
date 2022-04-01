import * as common from '../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Kart_EkleResponse: KSKartEkleResponse;
}

interface KSKartEkleResponse {
	KS_Kart_EkleResult: KSKartEkleResult;
}

interface KSKartEkleResult {
	Sonuc: number;
	Sonuc_Str: string;
	KS_GUID: string;
}
