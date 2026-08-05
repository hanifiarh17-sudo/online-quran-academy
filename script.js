#80FF00// ===============================
// AL SUFFAH QURAN ACADEMY
// script.js
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.10)";
    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Fade Animation
// ===============================

const cards = document.querySelectorAll(
".about-box,.course-card,.teacher-card,.price-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s ease";

    observer.observe(card);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "22px";
topBtn.style.background = "#0b6b53";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}

// ===============================
// Footer Year
// ===============================

const footerText = document.querySelector("footer p:last-child");

if(footerText){

footerText.innerHTML =
`© ${new Date().getFullYear()} Al Suffah Quran Academy. All Rights Reserved.`;

}

// ===============================
// Console Message
// ===============================

console.log("Al Suffah Quran Academy Website Loaded Successfully.");
