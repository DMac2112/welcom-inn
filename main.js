document.addEventListener('DOMContentLoaded', () => {
    const navbar  = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks  = document.querySelector('.nav__links');
    const footer    = document.querySelector('.footer');

    const closeMobileMenu = () => {
        if (navLinks) navLinks.classList.remove('active');
        const icon = mobileBtn ? mobileBtn.querySelector('i') : null;
        if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    };

    // Navbar scroll shadow + hide when footer dominates the screen on mobile
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);

        if (footer && window.innerWidth <= 900) {
            const footerTop = footer.getBoundingClientRect().top;
            if (footerTop < window.innerHeight * 0.2) {
                navbar.classList.add('nav--hidden');
                closeMobileMenu();
            } else {
                navbar.classList.remove('nav--hidden');
            }
        }
    }, { passive: true });

    // Mobile Menu Toggle
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Intersection Observer for Animations (Snappy & Fast)
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach((el, index) => {
        // Add a slight stagger to elements in the same container if needed, but keeping it simple for speed
        if(el.classList.contains('service-card') || el.classList.contains('review-card') || el.classList.contains('property-card')) {
            const siblings = Array.from(el.parentElement.children);
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = `${idx * 0.1}s`;
        }
        observer.observe(el);
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if(header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all others
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const h = faq.querySelector('.faq-header');
                    if (h) h.setAttribute('aria-expanded', 'false');
                });

                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // Modals and Sliders
    const modalOpenBtns = document.querySelectorAll('.open-modal-btn');
    const modals = document.querySelectorAll('.modal-overlay');
    const modalCloseBtns = document.querySelectorAll('.modal-close');

    modalOpenBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    const closeModal = () => {
        modals.forEach(modal => modal.classList.remove('active'));
        document.body.style.overflow = '';
    };

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close on overlay click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });

    // Slider logic
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(container => {
        const images = container.querySelector('.slider-images');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');

        if(prevBtn && nextBtn && images) {
            prevBtn.addEventListener('click', () => {
                images.scrollBy({ left: -images.clientWidth, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                images.scrollBy({ left: images.clientWidth, behavior: 'smooth' });
            });
        }
    });
});
