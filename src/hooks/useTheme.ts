import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
    const [isDark, setIsDark] = useState(false);
    
    // Initialize theme from localStorage on component mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                setIsDark(savedTheme === "dark");
            } else {
                // Optional: Check for system preference if no saved theme
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setIsDark(prefersDark);
            }
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDark(prev => {
            const newIsDark = !prev;
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", newIsDark ? "dark" : "light");
            }
            return newIsDark;
        });
    }, []);
    
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return { isDark, toggleTheme };
}

export default useTheme;