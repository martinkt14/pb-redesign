//Set variables
const nav = document.querySelector("#nav-container");
let scrollpos = window.scrollY;

//On scroll - Add scrolled class to nav to create fixed
window.addEventListener("scroll", () => {
  scrollpos = window.scrollY;

  if (scrollpos > 140) {
    nav.classList.add("scrolled");
    nav.classList.remove("container");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("container");
  }
});
