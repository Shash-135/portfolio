// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typewriter effect with looping roles
const roles = [
  "Shashank Talekar",
  "MCA Student",
  "Problem Solver",
  "Web Developer",
  "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeWriter() {
  const element = document.getElementById("typewriter");
  const currentText = roles[roleIndex];

  if (typing) {
    element.innerHTML = currentText.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentText.length) {
      typing = false;
      setTimeout(typeWriter, 1500); // pause before erasing
      return;
    }
  } else {
    element.innerHTML = currentText.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeWriter, typing ? 150 : 100);
}

window.addEventListener("DOMContentLoaded", () => {
  const typewriterTarget = document.getElementById("typewriter");
  if (!typewriterTarget) return;

  typeWriter(typewriterTarget, roles, 150, 100, 1500);
});

// Animate Contact Section on scroll
const contactSection = document.getElementById('contact');

function animateContact() {
  const sectionPos = contactSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if(sectionPos < screenPos) {
    contactSection.classList.add('visible');
  }
}

window.addEventListener('scroll', animateContact);
window.addEventListener('load', animateContact);
