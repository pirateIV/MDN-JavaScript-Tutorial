

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething() {
  // Do something with the scroll position
}
document.addEventListener('scroll', (event) => {
  lastKnownScrollPosition = window.scrollY;

  if(!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false
    });

    ticking = true
  }
})