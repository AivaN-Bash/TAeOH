// Mobile menu toggle
const hamburger = document.createElement('button');
hamburger.className = 'hamburger';
hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

document.querySelector('header').appendChild(hamburger);

const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});