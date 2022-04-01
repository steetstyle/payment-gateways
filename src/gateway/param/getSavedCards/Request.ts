import * as common from '../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Kart_Liste: KSKartListe;
}

interface KSKartListe {
	G: common.Credentials;
	GUID: string;
	KK_Kart_Adi: string;
	KK_Islem_ID: string;
}
