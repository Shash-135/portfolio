// Theme Toggle Logic 🌗
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const icon = themeToggle.querySelector('i');

// Icons
const MOON = 'fa-moon';
const SUN = 'fa-sun';

// 1. Check LocalStorage or System Preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update Icon
    if (theme === 'dark') {
        icon.classList.remove(MOON);
        icon.classList.add(SUN);
    } else {
        icon.classList.remove(SUN);
        icon.classList.add(MOON);
    }
}

// 2. Initialize
setTheme(getPreferredTheme());

// 3. Toggle Event
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// 4. Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('active');
        if (isOpen) {
            mobileMenu.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = ''; // Restore scroll
        } else {
            mobileMenu.classList.add('active');
            mobileBtn.querySelector('i').classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden'; // Lock scroll
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = '';
        });
    });
}



// 5. Scroll Reveal Engine 🎬
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 6. Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 7. Custom Cursor Logic 🖱️
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with lag (creating smooth effect)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effect for Links & Buttons
const interactables = document.querySelectorAll('a, button, .card, .theme-toggle');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-hover'));
});

// 8. About Modal Logic 🧬
const modal = document.getElementById('about-modal');
const openModalBtn = document.getElementById('about-btn');
const closeModalBtn = document.getElementById('close-modal');

if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scroll
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
