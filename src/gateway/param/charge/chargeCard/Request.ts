import * as common from '../../common'


export type XML = common.BaseXML<Body>

export interface Body {
	Pos_Odeme: PosOdeme;
}

interface PosOdeme {
	G: common.Credentials;
	GUID: string;
	KK_Sahibi: string;
	KK_No: string;
	KK_SK_Ay: string;
	KK_SK_Yil: string;
	KK_CVC: string;
	KK_Sahibi_GSM: string;
	Hata_URL: string;
	Basarili_URL: string;
	Siparis_ID: string;
	Siparis_Aciklama: string;
	Taksit: number;
	Islem_Tutar: string;
	Toplam_Tutar: string;
	Islem_Hash: string;
	Islem_Guvenlik_Tip: string;
	Islem_ID: string;
	IPAdr: string;
	Ref_URL: string;
	Data1: string;
	Data2: string;
	Data3: string;
	Data4: string;
	Data5: string;
	Data6: string;
	Data7: string;
	Data8: string;
	Data9: string;
	Data10: string;
}
