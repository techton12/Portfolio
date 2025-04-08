//Get the navlink and menubutton  
const navLinks = document.querySelector('.nav-link');
const menuButton = document.querySelector('.menubutton');

//set the menu button to toggle the navlinks
function onToggleMenu(e){
  e.name = e.name === 'menu' ? 'close': 'menu';
  navLinks.classList.toggle('left-[0%]');
  
};

// Hide navLinks on link click and reset menu button
navLinks.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('left-[0%]');
        menuButton.name = 'menu'; // Reset the menu button to 'menu'
    }
});

// Close navLinks when clicking outside of it
document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
        navLinks.classList.remove('left-[0%]');
        menuButton.name = 'menu'; // Reset the menu button to 'menu'
    }
  });

  
//swiper js for the slider
const swiper = new Swiper('.swiper', {
   grabCursor: true,
   spaceBetween: 30,
   loop: true,
   
   pagination: {
       el: '.swiper-pagination',
       clickable: true
     },
   
   autoplay: {
       delay: 3000,
       disableOnInteraction: false,
},  

   breakpoints: {
      
       900: {
           slidesPerView: 2
       }
   }  
});


// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when scrolled down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top of the page when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};




