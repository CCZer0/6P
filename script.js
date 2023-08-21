
document.addEventListener("DOMContentLoaded", function () {
const navLinks = document.querySelectorAll("nav a");
const dietSections = document.querySelectorAll(".dieta");

navLinks.forEach((link) => {
link.addEventListener("click", (event) => {
event.preventDefault();


navLinks.forEach((navLink) => navLink.classList.remove("active"));
dietSections.forEach((section) => section.classList.remove("active"));


link.classList.add("active");


const targetSectionId = link.getAttribute("href").substring(1);


const targetSection = document.getElementById(targetSectionId);
targetSection.classList.add("active");
});
});
});