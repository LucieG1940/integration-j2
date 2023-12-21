const hamburger = document.querySelector("#navbar__icone-hamburger");
const navbar__links = document.querySelector("#navbar__links");
console.log(hamburger);
console.log(navbar__links);

hamburger.addEventListener("click", function(){
  navbar__links.classList.toggle("displayBlock");
})