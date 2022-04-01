import { CallbackStatus, Currency } from './common'

export interface Body {
	type: 'newCard';
	/** Mağaza sipariş no: Satış işlemi için belirlediğiniz ve 1. ADIM’da gönderdiğiniz sipariş numarası */
	merchant_oid: string;
	/** Ödeme işleminin sonucu (success veya failed) */
	status: CallbackStatus;
	/** İşlem başarılı ise ödeme tutarı, işlem başarısız ise sıfır (0) döner. */
	total_amount: number;
	/** PayTR sisteminden gönderilen değerlerin doğruluğunu kontrol etmeniz için güvenlik amaçlı oluşturulan hash değeri (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız) */
	hash: string;
	/** Ödemenin onaylanmaması durumunda gönderilir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu) */
	failed_reason_code?: string;
	/** Ödemenin neden onaylanmadığı mesajını içerir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu) */
	failed_reason_msg?: string;
	/** Mağazanız test modunda iken veya canlı modda yapılan test işlemlerde 1 olarak gönderilir. */
	test_mode: string;
	/** Ödeme şekli: Müşterinin hangi ödeme şekli ile ödemesini tamamladığını belirtir. 'card' veya 'eft' değerlerini alır. */
	payment_type: 'card' | 'eft';
	/** Para birimi: Ödemenin hangi para birimi üzerinden yapıldığını belirtir. ‘TL’, ‘USD’, ‘EUR’, ‘GBP, ‘RUB’ değerlerinden birini alır. */
	currency: Currency;
	/** Sipariş tutarı: 1. ADIM’da gönderdiğiniz “payment_amount” değeridir.(100 ile çarpılmış hali gönderilir. 34.56 => 3456) */
	payment_amount: string;
	/** Kullanıcı Tokenı: Eğer kullanıcı sisteminizde daha önce bir kart kaydetmişse tarafınızda kayıtlı utoken parametresini POST içeriğine eklemelisiniz.
	 * Böylece bu kart da aynı kullanıcıya tanımlanacaktır.
	 * Eğer mevcut kullanıcı için yeni bir kart tanımı yapılacağı halde mevcut utoken gönderilmezse yeni bir utoken oluşturalacağından kullanıcının tüm kartları tek bir utoken altında gruplanmaz   */
	utoken: string;
}
