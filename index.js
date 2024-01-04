// index.js

// Define the addingEventListener function
function addingEventListener() {
    // Grab the element that you want to add the event listener to
    const input = document.getElementById('input');
  
    // Create a named function for the callback
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the click event listener to the element
    input.addEventListener('click', clickAlert);
  }
  
  // Export the addingEventListener function if you need to test it
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = addingEventListener;
  }
  

