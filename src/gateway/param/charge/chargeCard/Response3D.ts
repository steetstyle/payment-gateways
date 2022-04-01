import * as common from '../../common'


export type XML = common.BaseXML<Body>

export interface Body {
	Pos_OdemeResponse: PosOdemeResponse;
}

interface PosOdemeResponse {
	Pos_OdemeResult: PosOdemeResult;
}

interface PosOdemeResult {
	Islem_ID: number;
	UCD_URL: string;
	Sonuc: number;
	Sonuc_Str: string;
	Banka_Sonuc_Kod: number;
}
