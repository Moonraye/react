import { useState, useEffect } from "react";
import themeLogo from "/night-mode.png";
export default function themeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, [isDarkMode]);
    
const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
}

    return (
        <button onClick={switchTheme}>
            <img src={themeLogo} alt="ThemeMod" className="w-15 h-15"/>
        </button>
    )
}