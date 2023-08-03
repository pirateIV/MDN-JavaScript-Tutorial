let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here

myArray.pop()
myArray.push("ben", "smith")


myArray.forEach((item, index) => {
  myArray[index] = `${item} (${index + 1}) `
})


const myString = myArray.toString().split(",").join(" - ")

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);