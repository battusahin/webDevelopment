// Loops

// for loop

// for(let i=0; i<10; i++){
    
//     if(i == 3){
//         console.log(`en sevdiğim rakam ${i}`);
//         continue;
//     }
//     if(i==6){
//         console.log(`en sevmediğim rakam ${i}'dır.`);
//         break;
//     }
//     console.log(i);
// }

// ----------------------------------------------------------------------------

// while loop

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// ----------------------------------------------------------------------------

// do-while loop

// let i = 5;

// do{
//     console.log(i);
//     i++;
// }
// while(i>10);


// console.log(i);

// -----------------------------------------------------------------------------

// let sonuc = 1;

// for(let i = 5; i>0;i--){
//     if(i%2==0){
//     sonuc *= i;
//     }
// }

// console.log(sonuc);


let val = '\n';
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        val += '* ';
    }
    val += '\n';
}
console.log(val);