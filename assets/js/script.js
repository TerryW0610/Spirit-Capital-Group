// ADJUST HERO HEIGHT CODE 
const navbar = document.getElementById('navbar');
const header = document.getElementById('price_check');
const heroSec = document.getElementById('hero_sec');
const aboutSec = document.getElementById('about_sec');

// Throttle function to limit the number of times a function is called over time
function throttle(func, limit) {
   let inThrottle;
   return function () {
      const args = arguments;
      if (!inThrottle) {
         func.apply(this, args);
         inThrottle = true;
         setTimeout(() => inThrottle = false, limit);
      }
   }
}

const getNavbarHeight = () => {
   const style = window.getComputedStyle(navbar);
   return parseFloat(style.height);
}

const getHeaderHeight = () => {
   return header.offsetHeight;
}

const adjustHeroSecHeight = () => {
   const headerHeight = getHeaderHeight();
   const viewportHeight = window.innerHeight;

   if (heroSec) {
      heroSec.style.height = `${viewportHeight - headerHeight}px`;
   }

   // if (aboutSec) {
   //    aboutSec.style.height = `${viewportHeight - 780}px`;
   // }
}

// Call the function initially to set the height
adjustHeroSecHeight();


const throttledAdjustHeroSecHeight = throttle(adjustHeroSecHeight, 100);


// Function to check the scroll position and change the navbar's position
// Declare a variable for the placeholder
let headerPlaceholder;

const checkScrollPosition = () => {
   const header = document.getElementById('price_check');
   const navbar = document.getElementById('navbar');
   const headerHeight = header.offsetHeight;
   const navbarHeight = navbar.offsetHeight;

   if (window.scrollY > headerHeight) {
      navbar.style.position = 'fixed';
      navbar.style.marginTop = '-' + headerHeight + 'px';

      if (window.location.pathname.includes('about.html')) {
         if (!headerPlaceholder) {
            headerPlaceholder = document.createElement('div');
            headerPlaceholder.style.height = `${navbarHeight}px`;
            headerPlaceholder.style.visibility = 'hidden';
         }
         aboutSec.parentNode.insertBefore(headerPlaceholder, aboutSec);
      }


   } else {
      navbar.style.position = '';
      navbar.style.top = '';
      navbar.style.marginTop = '';

      if (window.location.pathname.includes('about.html')) {
         if (headerPlaceholder) {
            headerPlaceholder.parentNode.removeChild(headerPlaceholder);
            headerPlaceholder = null;
         }
      }
   }

};

// Attach the event listener to the window's scroll event
window.addEventListener('scroll', checkScrollPosition);



if (window.location.pathname.includes('index.html')) {

   const container = document.getElementById("review_ctn");

   const options = {
      Autoplay: {
         timeout: 5000,
         showProgress: false,
         pauseOnHover: false,
      },
      Navigation: false,
      Dots: false,
   };

   new Carousel(container, options, { Autoplay });
}

let menuOpen = false;

document.querySelector('#mobileSel').addEventListener('click', function(event) {
   // Prevent default action if necessary
   event.preventDefault();
   if (!menuOpen) {
      // Toggle the display style of the.PM_list div
      var submenu = document.querySelector('#PM_list');
      submenu.style.display = 'block'
      menuOpen = true;
   }

});
// ADJUST HERO HEIGH CODE ENDS HERE
