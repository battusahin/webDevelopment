// Strings

const firstName = 'Sadik';
const lastName = "Turan";
const age = 35;
let hobbies = "sinema,spor,kitap,yazılım";
let val;

// string concatenation

val = firstName +" "+ lastName;
val = "sadık";
val += " turan";

val = 'Benim adım ' +firstName+" "+lastName+ " ve yaşım "+age;

// string concat
val = firstName.concat(" ",lastName); //string birleştirme

// string uppercase-lowercase
val = val.toUpperCase();
val = val.toLowerCase();


// string replace

val = " " + val.replace("sadik","Çınar") + " ";   // istediğin karakteri değiştirir.

// trim
val = val.trim();    // başındaki ve sonundaki boşlukları siler.

// substring
//val = val.substring(3,8);   // 3 ile 8. indexteki yazıları alır.

// slice

// val = val.slice(6);   // 6. indexten itibaren yazıları alır

// val = val.indexOf('turan');   //aramak istediğin karakterin başlangıç indexini verir.
// val = val.indexOf('x');   // olmayan karakteri ararsak -1 değeri verir.
// val = val[1];

// // string length
// val = val.length;   //uzunluğu verir


val = hobbies.split(",");

console.log(val);
console.log(typeof val);