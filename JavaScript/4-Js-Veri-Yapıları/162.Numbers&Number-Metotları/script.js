// Numbers

let val;

// val = Number("10");
// val = parseInt("10");
// val = parseFloat("10.5");
// val = parseInt("a10a");
// val = isNaN('10');
//val = isNaN('a10');

// var num = 10.123456789; 
// val = num.toPrecision(4);
// val = num.toFixed(4);

val = Math.PI;
val = Math.round(2.1);   // yuvarlama işlemi yapar
val = Math.round(2.6);
val = Math.ceil(2.1);   // her zaman yukarıya yuvarlanır.
val = Math.floor(2.8);  // her zaman aşağı yuvarlanır.
val = Math.sqrt(121);    // Karekökü heasaplar
val = Math.pow(2,4);    // 2 üzeri 4 hesaplar
val = Math.abs(-100);  // Mutlak değer
val = Math.min(1,2,3,4,5,6,7,8,89);   // dizideki en küçük sayıyı verir.
val = Math.max(1,2,3,4,5,6,7,8,89);   // dizideki en büyük sayıyı verir.
val = parseInt(Math.random()*10);


console.log(val);
console.log(typeof val);