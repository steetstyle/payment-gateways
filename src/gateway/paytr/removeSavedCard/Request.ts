export interface Body {
	/** Mağaza numarası. */
	merchant_id: string;

	/** CAPI LIST servisinden kullanıcınıza ait karta token bilgisi. */
	ctoken: string;

	/** Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token. */
	utoken: string;

	/** PayTR Token */
	paytr_token: string;
}
