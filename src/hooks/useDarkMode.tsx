import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme"); 
    return savedTheme === "dark-mode"; 
  });

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

