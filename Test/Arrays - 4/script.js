const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

// for(let i = 0; i <= birds.length; i++) {
//   birds.splice(birds[i])
// }
let eBirds;
eBirds = birds.map((bird, index) => {
    bird[index].startsWith("E")
})


// Don't edit the code below here!

section.innerHTML = ' ';

section.innerHTML = birds

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);
    