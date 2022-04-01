import { ClientLang, Currency, DebugMode, Instalment, Non3DMode, Non3DTestFailedMode, PaymentType, RecurringMode, SyncMode, TestMode } from '../common'


export interface Body {
	/**
	 *  Mağaza Bilgileri
	 *  */

	/** Mağaza numarası. */
	merchant_id: string;
	/** Sipariş numarası. Her işlem için benzersiz olmalıdır. Maks 64 karakter. Alfa numerik. */
	merchant_oid: string;
	/** PayTR Token */
	paytr_token: string;
	/** Müşterinin başarılı ödeme sonrası yönlendirileceği sayfa. Maks. 400 karakter. */
	merchant_ok_url: string;
	/** Müşterinin ödemesi sırasında beklenmeyen bir hatada yönlendirileceği sayfa. */
	merchant_fail_url: string;
	/** 0 veya 1. İlgili yetkinin mağazaya tanımlanabilmesi için tarafımıza talep iletilmesi gerekmektedir. Birimlerimizin onayından geçmesi halinden yetki mağazaya tanımlanacaktır. Daha fazla bilgi için dokümantasyonu inceleyiniz. */
	sync_mode: SyncMode;
	/** İşlem zaman aşım süresi. Dakika cinsinden. Varsayılan 30 dakikadır. */
	timeout_limit?: number;

	/**
	 * Debug Mode
	 *  */

	/** 0 veya 1. Hata mesajlarını ekrana bastırmak için 1 girin. */
	debug_on?: DebugMode;
	/** 0 veya 1. Mağaza canlı modda iken test işlem yapmak için 1 girin. */
	test_mode?: TestMode;

	/**
	 * Kullanıcı Bilgileri
	 *  */

	/** tr veya en. Ödeme sürecinde sayfalarda kullanılacak dil. Boş gönderilirse tr kabul edilir. */
	client_lang?: ClientLang;
	/** Müşteri ad soyad. Maks. 60 karakter. */
	user_name: string;
	/** Müşteri adresi. Maks. 400 karakter. */
	user_address: string;
	/** Müşteri e-posta. Maks. 100 karakter. */
	email: string;
	/** Müşteri telefon numarası. Maks. 20 karakter */
	user_phone: string;
	/** Müşteri IP. Maks. 39 karakter (IPV4). */
	user_ip: string;

	/**
	 *  Sepet Bilgileri
	 *  */

	/** Sepet içeriği. Müşterinin siparişindeki ürün/hizmet bilgilerini içermelidir. */
	user_basket: string;
	/** Sipariş tutarı. Ondalık olarak nokta (.) ve noktadan sonra iki hane. */
	payment_amount: string;
	/** TL veya TRY - USD - EUR - GBP - RUB. Boş gönderilirse TL olarak kabul edilir. */
	currency?: Currency;
	/** Taksit sayısı. 0, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12 */
	installment_count: Instalment;
	/** Ödeme tipi. card veya card_points. */
	payment_type: PaymentType;
	/** 0 veya 1. Non 3D işlem yapabilmek için 1 gönderilebilir. */
	non_3d?: Non3DMode;
	/** 0 veya 1. Non 3D işlemde, başarısız işlem durumunu test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!) */
	non3d_test_failed?: Non3DTestFailedMode;

	/**
	 *  Kart Bilgileri
	 *  */

	/** İlgili yetkinin mağazaya tanımlanabilmesi için tarafımıza talep iletilmesi gerekmektedir Birimlerimizin onayından geçmesi halinden yetki mağazaya tanımlanacaktır. */
	recurring: RecurringMode;

	/** CAPI LIST servisinden kullanıcınıza ait karta token bilgisi. */
	ctoken: string;
	/** Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token. */
	utoken: string;

	/** Kart güvenlik kodu. */
	cvv: string;
}
