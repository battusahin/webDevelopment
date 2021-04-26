// Arrays

let names = ["çınar","sena","ada","yiğit"];
let years = [2017,1999,2012,2010,1997]
let mix = ["Sadık","turan",1983,null,undefined,["sinema","kitap"]];

// // get array item
// console.log(names[0]);
// console.log(names[3]);

// // set array item
// names[names.length] = "emel";

// // add item
// years.push(1986);    // dizinin sonuna ekleme
// years.unshift(1986);   // dizinin başına ekleme

// // remove item
// years.pop();   // dizinin son elemanını siler
// years.shift();  // en baştaki eleman gider

// // indexof
// let index = names.indexOf("ada");   // verilen stringin kaçıncı indexte olduhunu söyler.
// console.log("index: " + index);


// // reverse
// names.reverse();     // dizi terse döner


// //sort
// years.sort();  // küçükten büyüğe sıralama yapar

// // concat
// let val = years.concat(names);   // diziye dizi ekleme
// console.log(val);



// // splice
// console.log(names);
// names.splice(0,1);      // istediğin indexe eleman ekeleme ve o indexten itibaren eleman silme

// find

// filter

function over18(yil){
    let age = 2018 - yil;
    return age>18;
}

//let val = years.find(over18);     // listede buldugu ilk değeri getirir
let val = years.filter(over18);    // kriterlere uyan tüm değerleri getirir.
console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
