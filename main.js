const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = document.querySelector("i")


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
})

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// Scroll
document.addEventListener("DOMContentLoaded", () => {
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".header-image img", {
        ...scrollRevealOption,
        origin: "right",
    });
    ScrollReveal().reveal(".header-content h1", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".header-content p", {
        ...scrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".header-link", {
        ...scrollRevealOption,
        delay: 1500,
    });
    ScrollReveal().reveal(".step-card", {
        ...scrollRevealOption,
        interval: 500,
    });
    ScrollReveal().reveal(".service-image img", {
        ...scrollRevealOption,
        origin: "left",
    });
    ScrollReveal().reveal(".service-content .section-subheader", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".service-content .section-header", {
        ...scrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".service-list li", {
        ...scrollRevealOption,
        delay: 1500,
        interval: 500,
    });
    ScrollReveal().reveal(".experience-card", {
        ...scrollRevealOption,
        duration: 1000,
        interval: 500,
    });
    ScrollReveal().reveal(".download-image img", {
        ...scrollRevealOption,
        origin: "right",
    });
    ScrollReveal().reveal(".download-content .section-header", {
        ...scrollRevealOption,
        delay: 500,
    });
    ScrollReveal().reveal(".download-content .section-subheader", {
        ...scrollRevealOption,
        delay: 1000,
    });
    ScrollReveal().reveal(".download-link", {
        ...scrollRevealOption,
        delay: 1500,
    });
});
