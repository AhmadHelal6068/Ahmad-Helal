const Menu = document.querySelector(".menu");
const ul = document.querySelector(".ul");
Menu.onclick = function(){
    ul.classList.toggle("active");
}
window.onscroll = function(){
    ul.classList.remove("active");
}