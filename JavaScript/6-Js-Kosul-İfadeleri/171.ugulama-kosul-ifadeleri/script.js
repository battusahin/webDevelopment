// var trafikCikis = new Date('04/20/2017');
// trafikCikis.setHours(0, 0, 0, 0);
// var trafiktekiMs = Date.now() - trafikCikis.getTime();
// var trafikCikisGün = Math.floor(trafiktekiMs/(1000*60*60*24));



// switch(true){
//     case trafikCikisGün <= 365:
//         console.log("1. Yıl");
//     break;    
//     case trafikCikisGün <= 365*2:
//         console.log("2. Yıl");
//     break;  
//     case trafikCikisGün <= 365*3:
//         console.log("3. Yıl");
//     break;
//     default:
//         console.log("3 yıldan fazla");  
// }

// -----------------------------------------------------------------------------------

var result = prompt("Who is there?");

if (result == "Cancel") {
    console.log("Canceled.");
}
else if (result == "Admin") {
    var password = prompt("Enter Your Password");
    if (password == "Cancel") {
        console.log("Cancel");
    }
    else if (password == "TheMaster") {
        console.log("Welcome!");
    }
    else {
        console.log("Wrong password");
    }
}
else {
    console.log("I dont Know you");
}