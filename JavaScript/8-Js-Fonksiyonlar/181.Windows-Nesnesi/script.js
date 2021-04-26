// Wİndow Objesi

let val;
var a = 10;   // global değişken tanımlama(global scope)
function abc(){
    return 0;
};

val = window;

// alert
//alert("Merhaba");

//promt
//var b = prompt("bir sayı giriniz ");


//confirm
// val = confirm('emin misiniz ? ');
// if(val){
//     console.log('ok');
// }
// else{
//     console.log('no');
// }


// scroll
// val = window.scrollX;        // scroll barın nerede oldugunu gösterir.
// val = scrollY;


// location
val = location;
val = location.href;
val = location.hostname;
val = location.host;
val = location.protocol;
val = window.location.search;   // url deki soru işareti sonrası

//window.location.href='http://sadikturan.com';
//window.location.reload();

// navigator
// console ekranına window.navigator yazarak tarayıcı bilgilerine ulaşabiliriz.


// document
// console ekranına window.document yazarak sayfanın html kodlarını getirir.
// document.getElementById('header')   sayfadaki herhangibir elemanı alabliriz.




console.log(val);
