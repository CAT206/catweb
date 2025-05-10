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
