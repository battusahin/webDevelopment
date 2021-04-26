// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var musteriAdi, musteriSoyadi, musteriTC, musteriSiparistoplam, musteriCinsiyet, musteriAdress, musteriHobbies;

musteriAdi = "batuhan";
musteriSoyadi = "Sahin";
musteriTC = "123123123213";
musteriSiparistoplam = 245;

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1=Number('100');
var order2=Number('150');
var toplam;
toplam = order1 + order2;
console.log(toplam);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order3=Number('100.2');
var order4=Number('150.5');

var ondaliktoplam;
ondaliktoplam = order3 + order4;
console.log(ondaliktoplam);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order4=parseInt('100.2');
var order5=parseInt('150.5');

var toplamtamsayi = order4 + order5;
console.log(toplamtamsayi);
// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.
const yearOfBirth = 1997;
// yearOfBirth=2000;
var now = Number(new Date().getFullYear());
console.log(now);

var yas = now - yearOfBirth;
console.log("Yaşı: " + yas);
// yearOfBirth = 1987;



// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

let course = 'Modern Javascript Kursu';

console.log(course.length);




