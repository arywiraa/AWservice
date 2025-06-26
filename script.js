const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});


document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        if (this.getAttribute('href') === '#') return;

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Hitung posisi tengah layar
            const elementPosition = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollToPosition = elementPosition - ((windowHeight - elementHeight) / 2);

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Deteksi ketika tengah layar menyentuh bagian section
        if (window.scrollY + window.innerHeight / 2 >= sectionTop &&
            window.scrollY + window.innerHeight / 2 < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
