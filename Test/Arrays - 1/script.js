// Add your code here

const myArray = ['Benjamin', 'Chris', 'Smith']

// Don't Edit the code below here

section.innerHTML = ''
let para1 = document.createElement("p")

// Modify the first two items using bracket notation

myArray[0] = 'Johnson'
myArray[1] = 'Williams'
// add item to the beginning of the array
myArray.unshift("Christopher")

para1.textContent = `Array: ${myArray}`

section.appendChild(para1)