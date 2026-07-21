emailjs.init({
    publicKey: "hwQoNzqQHI40rLmZj",
});
// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        // Close all other FAQs
        faqQuestions.forEach(item => {

            if(item !== question){

                item.nextElementSibling.style.maxHeight = null;
                item.querySelector("span").textContent = "+";

            }

        });

        // Toggle current FAQ
        if(answer.style.maxHeight){

            answer.style.maxHeight = null;
            icon.textContent = "+";

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }

    });

});
// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hide");

    }, 1200);

});
// ==========================
// Scroll Reveal
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// ==========================
// Navbar Scroll Effect
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
// ==========================
// Scroll Progress Bar
// ==========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
// ==========================
// Back To Top
// ==========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_0e0szfu",
        "template_7xw62e5",
        this
    )

    .then(() => {

        button.innerHTML = "✅ Sent";

        alert("Thank you! We'll contact you soon.");

        form.reset();

        button.innerHTML = "Get Free Quote";

        button.disabled = false;

    })

    .catch(() => {

        alert("Something went wrong.");

        button.innerHTML = "Get Free Quote";

        button.disabled = false;

    });

});
