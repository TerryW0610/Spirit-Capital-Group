// ADJUST HERO HEIGHT CODE 
const getNavbarHeight = () => {
   const navbar = document.getElementById('navbar');
   const style = window.getComputedStyle(navbar);
   const height = parseFloat(style.height);
   return height;
}

const getHeaderHeight = () => {
   const header = document.getElementById('price_check');
   const style = window.getComputedStyle(header);
   const height = parseFloat(style.height);
   return height;
}

const adjustHeroSecHeight = () => {
   const navbarHeight = getNavbarHeight();
   const headerHeight = getHeaderHeight();
   const heroSec = document.getElementById('hero_sec');
   const viewportHeight = window.innerHeight;
   heroSec.style.height = `${viewportHeight - (headerHeight)}px`;
}

// Call the function initially to set the height
adjustHeroSecHeight();


window.addEventListener('resize', adjustHeroSecHeight);


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
