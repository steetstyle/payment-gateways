import * as common from '../common'


export type XML = common.BaseXML<Body>

interface Body {
	KS_Kart_SilResponse: KSKartSilResponse;
}

interface KSKartSilResponse {
	KS_Kart_SilResult: KSKartSilResult;
}

interface KSKartSilResult {
	Sonuc: number;
	Sonuc_Str: string;
}
