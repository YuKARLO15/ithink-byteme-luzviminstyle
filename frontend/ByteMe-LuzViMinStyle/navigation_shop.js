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
    //correspondingLabel.style.color = 'black'; // Replace 'red' with desired color
  });
});