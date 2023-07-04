function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Example usage:
  const email = "test@example.com";
  
  if (validateEmail(email)) {
    console.log("Valid email");
  } else {
    console.log("Invalid email");
  }