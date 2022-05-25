const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links-list');
  const navDiv = document.querySelector('.nav-links');
  const body = document.querySelector('#body');
  const navLinks = document.querySelectorAll('.nav-links-list li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    burger.classList.toggle('toggle');
    navDiv.classList.toggle('nav-links-m');
    body.classList.toggle('scroll');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link) => {
        if (link.style.animation) {
          link.style.animation = '';
        }
      });

      burger.classList.toggle('toggle');
      navDiv.classList.toggle('nav-links-m');
      body.classList.toggle('scroll');
    });
  });
};

navSlide();
