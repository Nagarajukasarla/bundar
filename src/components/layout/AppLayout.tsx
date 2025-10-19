import React from "react";
import useTheme from "@/hooks/useTheme";

const AppLayout: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className="min-h-screen bg-background p-2">
            <button className="rounded-md bg-background-btn p-2 text-foreground-btn">
                Click Me
            </button>
            <button className="rounded-md bg-background-btn p-2 text-foreground-btn" onClick={toggleTheme}>
                {isDark ? "Light" : "Dark"}
            </button>

            <p className="text-foreground">Hello World</p>
        </div>
    );
};

export default AppLayout;
