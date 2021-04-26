// Scopes 

// ** Global Scopes
var name = 'Çınar';
var age =25;

function logName(){
    var name = 'Ada';
    
    console.log('function scope',name,age);
};

if(true){
    var age = 30;
    console.log('block scope',name,age);
}




logName();
console.log(name);
console.log(age);



// ** Local Scopes

// Fonksiyonlar kendi scope 'larını oluşturur.
// **blocklar yeni scope oluşturmaz.
// ES6 ile gelen let v const block scope oluşturur.



console.log('*******************************');

if(true){
    var model = 'opal';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color);
}
console.log(model);
// console.log('block scope',model,year,color);

var i = 3;

for(let i=0; i<10;i++){
    console.log('i',i);
}
console.log(i);