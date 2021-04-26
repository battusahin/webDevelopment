// Object Literals

var age = 10;
let val;
let person = {firtsName: "Çınar",
    lastName: "Turan",
    age: 7,
    hobbies: ["music","game"],
    adress: {
        city: "Kocaeli",
        country: "Türkiye"
    },
    getBirthYear: function(){
        return 2018 - this.age;           // this.age yaptık dışardaki age değil nesnenin içindeki age aldı.
    }
};



val = person;
val = person.firtsName;
val = person.lastName;
val = person["hobbies"][0];
val = person.hobbies[1];
val = person.adress.city;
val = person.getBirthYear();





let people = [
    {firtsName:"Batuhan",lastName:"Şahin"},
    {firtsName:"Nazlı",lastName:"Şahin"},
    {firtsName:"Ceyda",lastName:"Kamalı"},
    {firtsName:"Nurcan",lastName:"Şahin"},
    {firtsName:"İsmail",lastName:"Şahin"}
];

val = people[2];
val = people[0].firtsName;

for(let i=0; i<people.length;i++){
    console.log(people[i].firtsName +" "+ people[i].lastName);
}

console.log(val);
console.log(typeof people);