var typed = new Typed(".multiple-text", {
    strings: ["Gowns and Suits"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

window.addEventListener('scroll', function() {
    // Get all the sections and navbar links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Loop through the sections and navbar links
    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop;
    //   const sectionHeight = section.offsetHeight;
  
      // Check if the user has scrolled to this section
        if (window.scrollY >= sectionTop) {
        // Remove the "active" class from all navbar links
        navLinks.forEach(link => link.classList.remove('active'));
  
        // Add the "active" class to the correct navbar link
        navLinks[i].classList.add('active');
        console.log(navLinks[i]);
      }
    });
  });

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    const clickedRadioButtonId = this.id;
    const correspondingLabel = document.querySelector(`.top-content label[for="${clickedRadioButtonId}"]`);
    
    // Remove active class from all labels
    const labels = document.querySelectorAll('.top-content label');
    labels.forEach(label => label.classList.remove('active'));
    
    // Add active class to the clicked label
    correspondingLabel.classList.add('active');
    
    // Change label color of selected radio button
    correspondingLabel.style.color = 'black'; // Replace 'red' with desired color
  });
});