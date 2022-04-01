export interface Body {
	/** Yapılan kart silme isteğinin başarılı ya da başarısız olduğunu belirtir	success veya error */
	status: 'success' | 'error';

	/** İstek başarısız olduğu durumlarda err_msg’de hata nedeni döndürülür	Örnek: Kart yok veya daha önce silinmiş */
	err_msg?: string;
}
