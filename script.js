// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.project-card, .skill-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add typing effect to hero subtitle (optional)
const subtitle = document.querySelector('#hero .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }, 1500);
}
