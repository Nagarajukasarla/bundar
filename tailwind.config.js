/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "var(--background)",
                    surface: "var(--surface)",

                    /** Card and other surface colors except background(root) */
                    //surface: value
                    
                    /** Controls (Sliders, Toggles, Inputs, Checkboxes, Radios) */
                    //control: value
                    
                    /** Select */
                    //select: value
                    
                    /** Button */
                    btn: "var(--primary)",
                    btnHover: "var(--primary-hover)",
                },
                foreground: {
                    DEFAULT: "var(--on-background)",
                    onSurface: "var(--on-surface)",

                    /** Text */
                    //text: value
                    
                    /** controls (Sliders, Toggles, Inputs, Checkboxes, Radios) */
                    //control: value
                    
                    /** Select */
                    //select: value
                    
                    /** Button */
                    //button: value
                    btn: "var(--on-primary)",
                    btnHover: "var(--on-primary-hover)",

                    
                    /** Link */
                    //link: value
                },
            },
        },
    },
    plugins: [],
};
