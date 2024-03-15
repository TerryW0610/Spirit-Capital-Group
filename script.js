// ADJUST HERO HEIGHT CODE 
const  getNavbarHeight = () => {
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

window.addEventListener('resize', adjustHeroSecHeight);

const adjustHeroSecHeight = () => {
   const navbarHeight = getNavbarHeight();
   const headerHeight = getHeaderHeight();
   const heroSec = document.getElementById('hero_sec');
   const viewportHeight = window.innerHeight;
   heroSec.style.height = `${viewportHeight - (headerHeight) }px`;
}

// Call the function initially to set the height
adjustHeroSecHeight();

// ADJUST HERO HEIGH CODE ENDS HERE






// SCROLLING REVIEWS CODE 

let currentIndex = 0;
const reviews = document.querySelectorAll('.review_sec');
const scrollContainer = document.getElementById('scrollable_reviews');

const scrollToNextReview = () => {
   if (currentIndex < reviews.length - 1) {
      currentIndex++;
   } else {
      currentIndex = 0;
   }
   scrollContainer.scrollTo({
      left: reviews[currentIndex].offsetLeft,
      behavior: 'smooth'
   });
}

// Call scrollToNextReview every few seconds to auto-scroll
setInterval(scrollToNextReview, 7500); // Adjust the interval as needed

let isDragging = false;
let startMouseX = 0;
let startScrollLeft = 0;

scrollContainer.addEventListener('mousedown', (e) => {
   isDragging = true;
   startMouseX = e.pageX;
   startScrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mousemove', (e) => {
   if (!isDragging) return;
   e.preventDefault();
   const x = e.pageX;
   const walk = (x - startMouseX) * 3; // Multiply by a factor to control the speed of the scrolling
   scrollContainer.scrollLeft = startScrollLeft - walk;
});

scrollContainer.addEventListener('mouseup', () => {
   isDragging = false;
});

scrollContainer.addEventListener('mouseleave', () => {
   isDragging = false;
});


// Function to check the scroll position and change the navbar's position
const checkScrollPosition = () => {
   const header = document.getElementById('price_check');
   const navbar = document.getElementById('navbar');
   const headerHeight = header.offsetHeight;

   // Check if the user has scrolled past the header
   if (window.scrollY > headerHeight) {
      // Change the navbar's position to fixed and add a top margin to prevent overlap
      navbar.style.position = 'fixed';
      // navbar.style.top = '0';
      navbar.style.marginTop = '-' + headerHeight + 'px';
   } else {
      // Reset the navbar's position when the user scrolls back up
      navbar.style.position = '';
      navbar.style.top = '';
      navbar.style.marginTop = '';
   }
}

// Attach the event listener to the window's scroll event
window.addEventListener('scroll', checkScrollPosition);


// SCROLLING REVIEWS CODE ENDS HERE