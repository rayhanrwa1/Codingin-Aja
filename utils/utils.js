export const animationCreate = () => {
  if (typeof window !== "undefined") {
    try {
      window.WOW = require("wowjs");
      console.log("window.WOW after require:", window.WOW); // Log to check the value of window.WOW
    } catch (error) {
      console.error("Error while requiring wowjs:", error);
    }
  }
  
  // Check if window.WOW is defined before attempting to create a new instance
  if (window.WOW) {
    try {
      new window.WOW.WOW({ live: false }).init();
    } catch (error) {
      console.error("Error while initializing WOW:", error);
    }
  } else {
    console.error("window.WOW is not defined.");
  }
};
