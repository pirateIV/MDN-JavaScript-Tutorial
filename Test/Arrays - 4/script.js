const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

const eBirds = birds.filter(bird => bird.startsWith("E"))


// Don't edit the code below here!

section.innerHTML = ' ';

section.innerHTML = birds

const para1 = document.createElement('p');
para1.innerHTML = `Bird name Starting with E: <b> ${eBirds}</b>`;

section.appendChild(para1);
    