import { useEffect, useState } from "react";

/**
 * Detects the current system theme preference (dark or light) based on the browser's
 * prefers-color-scheme media query. This function checks if the user's system is
 * set to dark mode or light mode.
 *
 * @returns {string} 'dark' if the system prefers dark theme, 'light' if it prefers light theme
 *
 * @example
 * const systemTheme = detectCurrentSystemTheme();
 * console.log(systemTheme); // 'dark' or 'light'
 *
 * @note This is for testing purposes - we'll decide later whether to keep this functionality

const detectCurrentSystemTheme = (): string => {
    if (typeof window !== "undefined" && window.matchMedia) {
        console.log("theme: " + window.matchMedia("(prefers-color-scheme: dark)"));
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    // Fallback to light theme if media queries are not supported
    return "light";
};

*/


const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {

        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) return savedTheme === "dark";
            //return detectCurrentSystemTheme() === "dark";
        }
        //return detectCurrentSystemTheme() === "dark";
        return false;

    });

    useEffect(() => {
        const root = window.document.documentElement;
        console.log("theme: " + isDark);
        if (isDark) {
            root.classList.add("dark");
            root.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleMode = () => setIsDark(prev => !prev);

    return { isDark, toggleMode };
};

export default useTheme;
