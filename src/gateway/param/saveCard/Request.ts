import * as common from '../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Kart_Ekle: KSKartEkle;
}

interface KSKartEkle {
	G: G;
	GUID: string;
	KK_Sahibi: string;
	KK_No: string;
	KK_SK_Ay: string;
	KK_SK_Yil: string;
	KK_Kart_Adi: string;
	KK_Islem_ID: string;
}

interface G {
	CLIENT_CODE: number;
	CLIENT_USERNAME: string;
	CLIENT_PASSWORD: string;
}
