/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/


var sayi = Math.floor((Math.random()*10)+1);

console.log(sayi);

var hak,can ;
var tahmin,sayac=0;
can = Number(prompt("Kaç kerede bilirsiniz?"));
hak = can;

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt("Tahmininizi girin: "));
    
    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac}. defada bildiniz.`);
        console.log(`puan : ${100-(100/can)*(sayac-1)}`);
        break;
    }
    else if(sayi > tahmin){
        console.log("yukarı");
    }
    else{
        console.log("Aşagı");
    }

    if(hak==0){
        console.log("Hakkınız Bitti, sayı: "+sayi);
    }
}