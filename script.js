/* JEJE CHARLES NEWTON */
/* 21716/2023 */

document.addEventListener('DOMContentLoaded', () => {
     const viewWorkBtn = document.getElementById('view-work-btn');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

     const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });

         const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    hamburger.classList.remove('toggle');
                }
            });
        });
    }

     let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerWidth <= 768) {  
            if (scrollTop > lastScrollTop) {
                 navbar.classList.add('nav-hide');
            } else {
                 navbar.classList.remove('nav-hide');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;  
        } else {
             navbar.classList.remove('nav-hide');
        }
    });
});
