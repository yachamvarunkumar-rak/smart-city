// ===== Mobile Nav Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('active'));
    });
  }

  // ===== Navbar background on scroll =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10,10,15,0.95)';
    } else {
      navbar.style.background = 'rgba(10,10,15,0.85)';
    }
  });

  // ===== Scroll Animations =====
  const animateElements = document.querySelectorAll(
    '.section-header, .problem-card, .component-card, .feature-card, ' +
    '.tech-card, .outcome-card, .status-card, .team-card, .resource-card, ' +
    '.workflow-step, .roadmap-step'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animateElements.forEach(el => observer.observe(el));

  // ===== Smooth active nav highlighting =====
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navItems.forEach(item => {
      item.style.color = '';
      item.style.background = '';
      if (item.getAttribute('href') === '#' + current) {
        item.style.color = '#6c63ff';
        item.style.background = 'rgba(108,99,255,0.1)';
      }
    });
  });
});
