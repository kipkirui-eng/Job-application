const menuToggle=
document.getElementById("menu-toggle");
const navLinks=
document.getElementById("navLinks");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("show");
    if(navLinks.classList.contains("show")){
        menuToggle.textContent="X";
    }else{
        menuToggle.textContent="☰";
    }
});