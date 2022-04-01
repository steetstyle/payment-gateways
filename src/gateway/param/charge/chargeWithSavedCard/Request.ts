import * as common from '../../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Tahsilat: KSTahsilat;
}

interface KSTahsilat {
	G: common.Credentials;
	GUID: string;
	KS_GUID: string;
	CVV: string;
	KK_Sahibi_GSM: string;
	Hata_URL: string;
	Basarili_URL: string;
	Siparis_ID: string;
	Siparis_Aciklama: string;
	Taksit: number;
	Islem_Tutar: string;
	Toplam_Tutar: string;
	Islem_Guvenlik_Tip: string;
	Islem_ID: string;
	IPAdr: string;
	Ref_URL: string;
	Data1: string;
	Data2: string;
	Data3: string;
	Data4: string;
	KK_Islem_ID: string;
}
