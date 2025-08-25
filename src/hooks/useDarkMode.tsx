import {  useEffect, useState } from "react";

export const useDarkMode = () => {
      const [isDarkMode, setIsDarkMode] = useState(false);
    
      const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
          useEffect(() => {
          document.documentElement.classList.toggle('dark-mode', isDarkMode);
          document.documentElement.classList.toggle('light-mode', !isDarkMode);
        }, [isDarkMode]);

    return { isDarkMode, toggleDarkMode } 
}

