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
const contactForm=
document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const name =
    document.getElementById("name").value;
        const email =
    document.getElementById("email").value;
        const phone =
    document.getElementById("phone").value;
        const subject =
    document.getElementById("subject").value;
        const message =
    document.getElementById("message").value;
        const whatsappNumber= "2547xxxxxx"
        const whatsappMessage= `Hello Jawabu Manpower Consultancy ,

    Name:${name}
    Email: ${email}
    Phone: ${phone}
    Enquiry:${subject}
    Message:${message}` ;

        const whatsappURL=
        `https://wa.me/${whatsappNumber}?text=${endcodeURICComponent(whatsappMessage)}`;
             window.open(whatsappURL, "_blank");
    document.getElementById("formNote").textContent="Your message is ready to send on whatsApp. Please press Send in WhatsApp.";
    }
    )
}