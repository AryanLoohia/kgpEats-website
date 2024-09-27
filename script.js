const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");

navMenu.classList.toggle("active");

}
)


document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classlist.remove("active");
    navMenu.classList.remove("active");
}));

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


