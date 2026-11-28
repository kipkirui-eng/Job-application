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


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formNote = document.getElementById("formNote");

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "254758185711";

        const whatsappMessage = `Hello Jawabu Manpower Consultancy,

Name: ${name}
Email: ${email}
Phone: ${phone}
Enquiry: ${subject}
Message: ${message}`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        formNote.textContent = "Sending your enquiry...";

        try {
            const response = await fetch("https://formspree.io/f/xkjrajaz", {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formNote.textContent = "Your enquiry has been emailed to Jawabu. You can also send it through WhatsApp: ";

                const whatsappLink = document.createElement("a");
                whatsappLink.href = whatsappURL;
                whatsappLink.target = "_blank";
                whatsappLink.rel = "noopener";
                whatsappLink.textContent = "Continue to WhatsApp";

                formNote.appendChild(whatsappLink);

                contactForm.reset();

            } else {
                formNote.textContent = "Sorry, your enquiry could not be sent. Please try again.";
            }

        } catch (error) {
            formNote.textContent = "Connection problem. Please check your internet and try again.";
        }
    });
}
