// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

// Tab Management
const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        content.forEach((c) => c.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(tab.dataset.target).classList.add('active');
    });
});

// Form Validation with Error Handling
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach((input) => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Local Storage for Form Data
form.addEventListener('input', () => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        localStorage.setItem(input.name, input.value);
    });
});

// Retrieve data from local storage on page load
window.addEventListener('load', () => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        input.value = localStorage.getItem(input.name) || '';
    });
});

// Header Scroll Behavior
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Generative Engine Optimization
// This function optimizes the usage of resources based on user interaction
const optimizeResources = () => {
    // Implementation for performance and SEO
};

window.addEventListener('load', optimizeResources);