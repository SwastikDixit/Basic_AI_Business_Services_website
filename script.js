// Get all the "Learn More" buttons
const buttons = document.querySelectorAll('.btn');

// Attach a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Show an alert when the button is clicked
    alert("You clicked the 'Learn More' button!");

    // Simulate a loading state for 2 seconds
    button.textContent = 'Loading...';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Learn More';
      button.disabled = false;
    }, 2000);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
