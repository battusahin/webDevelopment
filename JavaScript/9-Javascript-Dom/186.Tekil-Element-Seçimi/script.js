// Selecting Elements---------------------------------------------------------------------------

// *** Single Elements--------------------------------------------------------------------------
// document.getElementById()-------------
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// //val = val.id;
// //val = val.className;


// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// //val.style.display="none";

// document.getElementById("header").innerText='my toDo App';

// document.getElementById("header").innerText='<b>my toDo App</b>';

// document.getElementById("header").innerHTML='<b>my toDo App</b>';


// console.log(val);

// document.querySelector()---------
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header')); // buldugu ilk elemanı seçer.
console.log(document.querySelector('div'));

document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(2)').style.color='yellow';
document.querySelector('li:nth-child(3)').textContent='task  item';
document.querySelector('li:nth-child(4)').textContent='task  item';

//document.querySelector('li').className='list-group-item list-group-item-primary';
document.querySelector('li').classList.add('active');


// *** Multiple Elements--------------------------------------------------------------------------------





