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
   const navbarHeight = getNavbarHeight();
   const headerHeight = getHeaderHeight();
   const viewportHeight = window.innerHeight;

   if (heroSec) {
      heroSec.style.height = `${viewportHeight - headerHeight}px`;
   }

   if (aboutSec) {
      aboutSec.style.height = `${viewportHeight - 650}px`;
   }
}

// Call the function initially to set the height
adjustHeroSecHeight();


const throttledAdjustHeroSecHeight = throttle(adjustHeroSecHeight, 100);

// Call the function initially to set the height
adjustHeroSecHeight();


// Function to check the scroll position and change the navbar's position
const checkScrollPosition = () => {
   const header = document.getElementById('price_check');
   const navbar = document.getElementById('navbar');
   const headerHeight = header.offsetHeight;

   // Check if the user has scrolled past the header
   if (window.scrollY > headerHeight) {
      // Change the navbar's position to fixed and add a top margin to prevent overlap
      navbar.style.position = 'fixed';
      navbar.style.marginTop = '-' + headerHeight + 'px';
   } else {
      // Reset the navbar's position when the user scrolls back up
      navbar.style.position = '';
      navbar.style.top = '';
      navbar.style.marginTop = '';
   }
};

// Attach the event listener to the window's scroll event
window.addEventListener('scroll', checkScrollPosition);

// ADJUST HERO HEIGH CODE ENDS HERE
