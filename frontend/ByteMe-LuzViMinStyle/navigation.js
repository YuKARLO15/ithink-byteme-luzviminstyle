window.addEventListener('scroll', function() {
    // Get all the sections and navbar links
    const sections = document.getElementsByClassName('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Loop through the sections and navbar links
    Array.from(sections).forEach((section, i) => {
      const sectionTop = section.offsetTop;
    //   const sectionHeight = section.offsetHeight;
  
      // Check if the user has scrolled to this section
        if (window.scrollY >= sectionTop) {
        // Remove the "active" class from all navbar links
        navLinks.forEach(link => {link.classList.remove('active')});
  
        // Add the "active" class to the correct navbar link
        navLinks[i].classList.add('active');
      }
    });
  });