import * as common from '../../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_TahsilatResponse: KSTahsilatResponse;
}

interface KSTahsilatResponse {
	KS_TahsilatResult: KSTahsilatResult;
}

interface KSTahsilatResult {
	Islem_ID: number;
	UCD_URL: string;
	Sonuc: number;
	Sonuc_Str: string;
}
