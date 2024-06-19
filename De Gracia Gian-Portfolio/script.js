// Smooth scrolling when clicking the links on navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetLink = document.querySelector(this.getAttribute('href'));
      const offsetTop = 100;

      window.scrollTo({
        top: targetLink.offsetTop - offsetTop,
        behavior: 'smooth'
      });
    });
  });

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
