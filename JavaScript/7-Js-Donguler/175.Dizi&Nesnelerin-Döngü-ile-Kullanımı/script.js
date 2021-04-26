// // Loops in array and object

let cars = ['Bmw','Mercedes','Toyota'];
let people = [
    {firstName:'Ada',lastName:'Bilgi'},
    {firstName:'Yiğit',lastName:'Bilgi'},
    {firstName:'Çınar',lastName:'Turan'}
]


// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);

// Arrays

// for (let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// -------------------------------------------------------------------------------

// Object

// for (let i=0;i<people.length;i++){
//     console.log(people[i].firstName);
// }


// --------------------------------------------------------------------------------

// for-in

// Arrays

// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }

// for(let i in people){
//     console.log(people[i].firstName);
// }



//---------------------------------------------------------------------------------

//Object

// foreach

// cars.forEach(function(item){
//     console.log(item);
// });

// people.forEach(function(item){
//     console.log(item.firstName);
// });



// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName;
// });

// console.log(val);


let numbers = [1,5,6,8,10];

let num = numbers.map(function(item){
    return item*item;
});

console.log(num);