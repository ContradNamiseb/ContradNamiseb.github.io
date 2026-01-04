document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Modern Theme Toggle Logic (Dark First) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {
        console.warn('LocalStorage access denied', e);
    }

    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Apply light mode ONLY if specifically saved or system defaults to it
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        htmlElement.setAttribute('data-theme', 'light');
        if (icon) icon.style.transform = "rotate(180deg)";
    }

    themeToggle.addEventListener('click', () => {
        const isCurrentlyLight = htmlElement.hasAttribute('data-theme');

        if (isCurrentlyLight) {
            // Switch to Dark (Default)
            htmlElement.removeAttribute('data-theme');
            try {
                localStorage.setItem('theme', 'dark');
            } catch (e) {
                console.warn('LocalStorage access denied', e);
            }
            if (icon) icon.style.transform = "rotate(0deg)";
        } else {
            // Switch to Light
            htmlElement.setAttribute('data-theme', 'light');
            try {
                localStorage.setItem('theme', 'light');
            } catch (e) {
                console.warn('LocalStorage access denied', e);
            }
            if (icon) icon.style.transform = "rotate(180deg)";
        }
    });

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // --- 3. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- 4. Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        // Updated phrases to reflect actual technical projects
        const phrases = [
            'High-Performance C++ Engines',
            'Spring Boot Microservices',
            'Linux System Utilities',
            'Scalable Java Backends',
            'Automated DevOps Pipelines'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                // Remove character
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add character
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            // Speed logic: typing is slower than deleting
            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at the full sentence
                isDeleting = true;
                typeSpeed = 2500;
            } else if (isDeleting && charIndex === 0) {
                // Move to next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // --- 5. Scroll Animation (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- 6. Mobile Project Card Active State ---
    if (window.matchMedia('(hover: none)').matches) {
        const projectCardObserverOptions = {
            threshold: 0.2,
            rootMargin: "0px"
        };

        const projectCardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, projectCardObserverOptions);

        document.querySelectorAll('.project-card').forEach(el => projectCardObserver.observe(el));
    }
});