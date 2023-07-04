function isPositive(virusComposition, bloodComposition) {
    let virusIndex = 0;
    let bloodIndex = 0;
  
    while (virusIndex < virusComposition.length && bloodIndex < bloodComposition.length) {
      if (virusComposition[virusIndex] === bloodComposition[bloodIndex]) {
        bloodIndex++;
      }
      virusIndex++;
    }
  
    return bloodIndex === bloodComposition.length;
  }
  
  // Example usage:
  const virusComposition = "coronavirus";
  const bloodComposition = "ravus";
  
  if (isPositive(virusComposition, bloodComposition)) {
    console.log("POSITIVE");
  } else {
    console.log("NEGATIVE");
  }
  