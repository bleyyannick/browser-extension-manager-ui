import { type ReactNode, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { useEffect } from "react";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
      useEffect(() => {
      document.documentElement.classList.toggle('dark-mode', isDarkMode);
      document.documentElement.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

