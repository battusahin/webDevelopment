// Şimdiki Tarihin gün ay ve yıl bilgilerini yazdınırınuız.
let now = new Date();
console.log("Gün: " + now.getDate() + " ay: " + parseInt(now.getMonth() + 1) + " yıl: " + now.getFullYear());
// Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date("03/9/2021 13:50:10");
var dtB = new Date(2021,3,9,13,50,10);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz

var dtC = new Date("1/1/1990");
var biröncekigün = dtC.getDate();
dtC.setDate(biröncekigün - 1);

console.log(dtC);
// İki tarih arasındaki geçen zamanı bulunuz.
var start = new Date("03/26/1997");
var end = new Date("03/10/2021");

var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye /60;
var saat = dakika /60;
var gun = saat / 24;
var yil = gun / 365;

console.log("milisecond: " + milisecond);
console.log("saniye : " + saniye);
console.log("dakika: " + dakika);
console.log("saat: "+ saat);
console.log("gun: " + gun);
console.log("yıl: " + yil);

// Her yıl Mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlacanaktır ? 

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);
// Yaş Hesaplama nasıl yapılır ? 

 var birthday = new Date("3/26/1997");
 var ageDifMs = Date.now() - birthday.getTime();
 var ageDate = new Date(ageDifMs);

 console.log(ageDate.getFullYear() - 1970);


