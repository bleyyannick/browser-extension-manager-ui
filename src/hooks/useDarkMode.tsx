import { useContext } from "react";
import { DarkModeContext, type DarkModeContextType } from "../context/DarkModeContext";

export const useDarkMode = () => useContext<DarkModeContextType>(DarkModeContext);