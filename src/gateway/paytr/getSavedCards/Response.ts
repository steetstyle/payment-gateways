export interface CardItem {
	/** Card Token: Kullanıcının kayıtlı kartını tanımlayan token	 */
	'ctoken': string;
	/** Son 4: Kayıtlı kartın son 4 hanesi	 */
	'last_4': string;
	/** Ay: Kartının son kullanma tarihinin ay bilgisi	 */
	'month': string;
	/** Yılı: Kartının son kullanma tarihinin yıl bilgisi	 */
	'year': string;
	/**
	 * Banka: Kartın bankası
	 * Örnek: Yapı Kredi
	*/
	'c_bank': string;
	/**
	 * CVV gerekli: Bu kayıtlı kart ile ödeme yapmak için CVV gerekip gerekmediği
	 * 0 veya 1 (Bir kart için 1 dönerse, kart ile ödeme yapılabilmesi için kullanıcıdan CVV bilgisini almanız gerekmektedir)
	 */
	'require_cvv': '0' | '1';
	/** Adı Soyadı: Kullanıcının kart kayıt sırasında girdiği ad soyadı	 */
	'c_name': string;
	/**
	 * Kart Program Ortaklığı İsmi
	 * Örnek: maximum, bonus,world vb.
	 */
	'c_brand': string;
	/** Kart Tipi: Kredi kartı veya banka kartı / ön ödemeli kart	 */
	'c_type': 'debit' | 'credit';

	/** Şirket Kartı: Kartın şirket kartı olup olmadığı bilgisi	 */
	'businessCard': 'y' | 'n';
	/** Kart Şeması: 2 ve 5 MasterCard, 3 Amex, 4 VISA, 9 TROY	 */
	'initial': '2' | '3' | '5' | '7' | '9';
	/**
	 * Kartın şeması: Kartın hangi şemaya ait olduğu bilinmiyorsa OTHER döner.
	 * VISA, MASTERCARD, AMEX, TROY, vb.
	 */
	'schema':'MASTERCARD';
}

export interface FailedBody {
	/** Status: Hata durumunda error olarak döner, işlem başarılı olduğunda döndürülmez	 */
	status: 'error';
	/** Error No: İstek başarısız olduğu durumlarda err_no’de hata numarası döndürülür */
	err_no: string;
	/** Error Message: İstek başarısız olduğu durumlarda err_msg’de hata nedeni döndürülür */
	err_msg: string;
}

export type Body = CardItem[] | FailedBody;
