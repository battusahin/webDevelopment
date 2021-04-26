 // Template Literals

const fullName = "Sena Turan";
const city = "Kocaeli";
const yearOfBirth = 1999;

let val;


val = 'my name is '+fullName + 
      ' I\'m ' +(2018-yearOfBirth) +
      ' and I live in ' + city;


// ternary operator
val = `my name is ${fullName} I'm ${2018-yearOfBirth>=18?'over 18':'under 18'} and I live in ${city}`;      //// ÖNEMLİ /////

console.log(val);