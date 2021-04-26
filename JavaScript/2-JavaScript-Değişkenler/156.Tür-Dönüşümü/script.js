// alert("Merhaba");

// console.log("merhaba Dünyaa");

// console.log(1234);

// console.log(true);

// console.log([1,2,3,4]);

// console.error("hataaa kaçınnn...");

// console.warn("Bir uyarı oluştu..");

// // tek satırlık yorum satırı...

// /*
//     Yorum satırları..
//     Yorum satırları..
//     Yorum satırları..
// */

// console.clear();

// /*
//     komple html documentini konsolda göstermek için:
//         konsola document yaz.


//     sadece bir bölümü(id ile istediğin elementi) konsolda göstermek için:
//         document.getElementById("header")
// */

// //    DERS-2  -----------------DEĞİŞKENLER--------------------------
//     //değişken tanımlama *** var *** ile
//     //konsola bir şey yazdırmak *** console.log *** ile

//     var age;
//     console.log(age);  // şu an age undefined

//     age=23; // age'i tanımladık.
//     console.log(age);

//     var fullname="Batuhan Şahin";
//     console.log(fullname);

//     fullname="Sadık Turan";
//     console.log(fullname);

// // ---------------Değişken Tanımlama Kuralları------

//     // sayısal ifade ile başlayamaz.
//     var yas1;
//     var _yas2;
//     var $yas3;

// // -------------- Komut isimleri ile tanımlama yapılamaz ----    
// // ------------- Birden Fazla Kelime ----

//     var ad='Sadık';
//     var soyad='Turan';

//     var ad_soyad='Sadık Turan';
//     var adsoyad="Çınar Turan";

// //--------------- case sensitive ( büyük küçük harf duyarı )---

//     var firstname="batuhan";
//     var Firstname="Sahin";

//     console.log(firstname);
//     console.log(Firstname);

//     console.clear();

//  // var  , let , const

//     let city='Balıkesir';
//     console.log(city);

//     const email='abc@gmail.com';
//     console.log(email);

//     email='bcd@gmail.com';
//     console.log(email);

// // --------- DERS 3 Değişken Tipleri ------------

//     // Primitive Types

//         // String
//         let firstName='Çınar';
        

//         // Number
//         let age = 23;
//         let money = 100.24;
        
//         // Boolean
//         let isActive = true;    
        
//         //null
//         let job = null;

//         //undefined
//         let car;

//         console.log(typeof car);
//     // Reference Types - Objects

//         // array 
//         let names=['ali','Ahmet','Can'];

//         //Object
//         let adress = {
//             city: 'Kocaeli',
//             country:'Türkiye'
//         }

//         //Function
//         var calculateAge = function(){
//             return 0;
//         }

//         console.log(typeof calculateAge);


// ------------ DERS 4 TÜR DÖNÜŞÜMÜ ------
    // String to Number
        let num1 = Number('5');
        let num2 = Number('10');

        total = num1 + num2;

        

        /*
        var a,b;
        a='23';
        b='10';

        console.log(Number(a) + Number(b));
        */
    // Number to String
    let val;

    val = String(10);

    // bool to string

    val = String(true);

    // Date to String
    val = String(new Date().getFullYear());

    //array to String
    val = String([1,2,3,4]);

    //toString()
    val = (10).toString();
    val = (false).toString();

    //String to Number
    val =Number("10");
    val=Number(false);

    //parseInt
    //parseFloat
    val = parseFloat('10');

    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(2));

    