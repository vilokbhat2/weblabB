function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulating flight booking process
      setTimeout(() => {
        const isSuccess = true; // Set to false for testing rejection
        if (isSuccess) {
          console.log("Flight booked");
          resolve();
        } else {
          reject("Flight booking failed");
        }
      }, 2000); // Wait for 2 seconds before resolving/rejecting the promise
    });
  }
  
  function bookHotel() {
    return new Promise((resolve) => {
      // Simulating hotel booking process
      setTimeout(() => {
        console.log("Hotel booked");
        resolve();
      }, 1500); // Wait for 1.5 seconds before resolving the promise
    });
  }
  
  bookFlight()
    .then(() => {
      return bookHotel();
    })
    .then(() => {
      console.log("Booking process completed");
    })
    .catch((error) => {
      console.error(error);
    });
  