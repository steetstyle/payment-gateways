export interface Body {
	/** Mağaza numarası. */
	merchant_id: string;

	/** Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token. */
	utoken: string;

	/** PayTR Token */
	paytr_token: string;
}
