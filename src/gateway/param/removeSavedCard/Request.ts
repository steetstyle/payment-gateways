import * as common from '../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Kart_Sil: KSKartSil;
}

interface KSKartSil {
	G: common.Credentials;
	KS_GUID: string;
	KK_Islem_ID: string;
}
