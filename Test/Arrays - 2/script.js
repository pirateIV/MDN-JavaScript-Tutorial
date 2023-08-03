// Add your code here

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

let myArray = myString.split("+")
let arrayLength = myArray.length
let lastItem = myArray[myArray.length - 1]

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);