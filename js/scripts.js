/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
  var navList = document.querySelectorAll('.nav-link'),
    _url = location.href.split('/').slice(-1).toString(),
    _href = location.href,
    _currentNav,
    // Navbar shrink function
    navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };

  if (
    _href == 'https://www.katechang.info/' ||
    _href == 'https://www.katechang.info/#wg'
  ) {
    _currentNav = '#homeNav';
  } else if (_url.match(/pattern/)) {
    _currentNav = '#patternNav';
  } else if (_url.match(/about/)) {
    _currentNav = '#aboutNav';
  } else {
    _currentNav = '';
  }

  if (_currentNav) {
    document.querySelector(_currentNav).classList.add('onsite');
  }

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  navList.forEach((navs) => {
    navs.addEventListener('click', () => {
      document.querySelector('.onsite')?.classList.remove('onsite');
      navs.classList.add('onsite');
    });
  });
  var elementsArray = document.querySelectorAll('.fadeup, .faderight');
  window.addEventListener('scroll', fadeTop);
  function fadeTop() {
    for (var i = 0; i < elementsArray.length; i++) {
      var elem = elementsArray[i],
       distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 20,
        distInBot = elem.getBoundingClientRect().bottom;
      if (distInView < 0) {
        elem.classList.add('inView');
      } else {
        elem.classList.remove('inView');
      }
      if(distInBot < 0){
        elem.classList.remove('inView');
      }
    }
  }
  var vector = document.querySelectorAll('.vector'),
   imgs = document.querySelectorAll('.img-wrapper');
  function upanddown(){
    setInterval(inViewCheck, 1000)
  }
  function inViewCheck(){
    vector[0].classList.length<2? vector[0].classList.add('inView'):vector[0].classList.remove('inView')
  }

 
  upanddown();
  fadeTop();

});
