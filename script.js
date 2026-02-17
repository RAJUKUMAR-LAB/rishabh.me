// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to top
    const backToTopLink = document.querySelector('.footer-link');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add click animations to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.add('skill-tag-clicked');
            setTimeout(() => {
                this.classList.remove('skill-tag-clicked');
            }, 200);
        });
    });

    // Add click animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('project-card-clicked');
            setTimeout(() => {
                this.classList.remove('project-card-clicked');
            }, 200);
        });
    });

    // Print button functionality (optional enhancement)
    const printStyles = `
        @media print {
            .no-print {
                display: none !important;
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.textContent = printStyles;
    document.head.appendChild(styleSheet);

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'P' to print
        if (e.key === 'p' && e.ctrlKey) {
            e.preventDefault();
            window.print();
        }
        // Press 'Home' to scroll to top
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Console message
    console.log('%c👋 Welcome to Rishabh Kumar\'s Resume!', 'color: #3498db; font-size: 20px; font-weight: bold;');
    console.log('%cFeel free to explore the code and reach out if you have any questions!', 'color: #2c3e50; font-size: 14px;');
});

// Add page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
