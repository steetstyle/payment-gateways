import * as common from '../common'


export type XML = common.BaseXML<Body>

export interface Body {
	KS_Kart_ListeResponse: KSKartListeResponse;
}

interface KSKartListeResponse {
	KS_Kart_ListeResult: KSKartListeResult;
}

interface KSKartListeResult {
	Sonuc: number;
	Sonuc_Str: string;
	DT_Bilgi: DTBilgi;
}

interface DTBilgi {
	schema: Schema;
	diffgram: Diffgram;
}

interface Diffgram {
	NewDataSet: NewDataSet;
}

interface NewDataSet {
	Temp: Temp[];
}

interface Temp {
	ID: number;
	KK_GUID: string;
	Tarih: string;
	KK_No: string;
	KK_Tip: string;
	KK_Banka: string;
	KK_Marka: string;
	Kart_Adi: string;
	KK_Hash: string;
	KK_KD: string;
	KK_SK: string;
	Data2: number;
}

interface Schema {
	element: SchemaElement;
}

interface SchemaElement {
	complexType: PurpleComplexType;
}

interface PurpleComplexType {
	choice: Choice;
}

interface Choice {
	element: ChoiceElement;
}

interface ChoiceElement {
	complexType: FluffyComplexType;
}

interface FluffyComplexType {
	sequence: Sequence;
}

interface Sequence {
	element: string[];
}
