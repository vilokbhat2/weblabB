function checkLocation(location) {
    // Check if the location is Paris
    if (location === "Paris") {
      // Return a promise that is resolved with the message "Let's take a trip to Paris"
      return new Promise((resolve, reject) => {
        resolve("Let's take a trip to Paris");
      });
    } else {
      // Return a promise that is rejected with the error message "Invalid Location"
      return new Promise((resolve, reject) => {
        reject("Invalid Location");
      });
    }
  }
  
  function main() {
    // Get the location from the user
    var location = prompt("Enter the location: ");
  
    // Call the checkLocation function and wait for the promise to be resolved
    checkLocation(location).then(function(message) {
      // Display the message
      console.log(message);
    }, function(error) {
      // Display the error message
      console.log(error);
    });
  }
  
  main();
  