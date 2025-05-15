document.addEventListener('DOMContentLoaded', function() {
  // Get the elements
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Debugging: Log to confirm elements are found
  console.log('Menu Toggle:', menuToggle);
  console.log('Nav Links:', navLinks);
  
  // Add click event to menu toggle
  menuToggle.addEventListener('click', function() {
    console.log('Menu toggle clicked'); // Debugging
    navLinks.classList.toggle('active');
  });
  
  // Close menu when a link is clicked (optional)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Move to next slide
  slideIndex++;
  
  // Reset to first slide if at end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  // Show current slide
  slides[slideIndex-1].style.display = "block";  
  
  // Change slide every 5 seconds
  setTimeout(showSlides, 5000); 
}

// Fix for iOS viewport resize
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});