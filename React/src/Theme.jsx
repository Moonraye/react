import { useState, useEffect } from "react";
import themeLogo from "/night-mode.png";
export default function themeSwitcher() {
    const [count , setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
useEffect(() => {
    if (count === 10) alert("Listen, I'm tired of repainting the site! Let's stop? ^_^");
    if (count === 20) alert("Okay, that's enough! Please stop clicking the button!");
    if (count === 30) {
        alert("Fine, goodbye! :( " );
        setIsDisabled(true);
    }
}, [count]);

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
    if (isDisabled) return;
    setIsDarkMode(!isDarkMode);
    setCount(count + 1);

}
    return (
        <button onClick={switchTheme} disabled={isDisabled}>
            <img src={themeLogo} alt="ThemeMod" className="w-15 h-15"/>
        </button>
    )
}