import React, {useState, useEffect} from "react";

function useWindowSize() {
    // Tracking the window width used to determine the initial state of the unordered list within the navigation
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
        
      updateScreenWidth();
  
      window.addEventListener("resize", updateScreenWidth);
  
      return () => window.removeEventListener("resize", updateScreenWidth);
    }, []);

    return screenWidth
}

export default useWindowSize