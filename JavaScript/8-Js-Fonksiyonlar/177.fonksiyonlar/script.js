// function

function yasHesapla(dogumYili){
    return 2021 - dogumYili;
}


let ageBatu = yasHesapla(1997);
let ageCeyda = yasHesapla(2000);
let ageNazli = yasHesapla(2009);

console.log(ageBatu);
console.log(ageCeyda);
console.log(ageNazli);


function EmekligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı `);
    }
    else{
        console.log("Zaten emeklisiniz!");
    }
}

EmekligeKacYilKaldi(1997,"Batuhan");
EmekligeKacYilKaldi(2000,"Ceyda");
EmekligeKacYilKaldi(2009,"Nazlı");
EmekligeKacYilKaldi(2009,"Örnek");