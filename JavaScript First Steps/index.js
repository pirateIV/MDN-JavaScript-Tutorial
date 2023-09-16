// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// const greetings = ['Happy Birthday!',
//   'Merry Christmas my love',
//   'A happy Christmas to all the family',
//   'You\'re all I want for Christmas',
//   'Get well soon'
// ];

// for (const greeting of greetings) {
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greeting.toLowerCase().includes('christmas')) {
//     const listItem = document.createElement('li');
//     listItem.textContent = greeting;
//     list.appendChild(listItem);
//   }
// }
const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here

  // const result = city;
  const listItem = document.createElement('li');
  
  const lower = city.toLowerCase()
  const upper = lower.replace(city[0], city[0].toUpperCase())
  listItem.textContent = upper;
  list.appendChild(listItem);
}
 

{/* <main>
  <container>
    <module>
      <JSON></JSON>
    </module>
  </container>
</main> */}