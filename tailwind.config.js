/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        /** Font weight usages
         * font-light: 300,
         * font-normal: 400,
         * font-medium: 500,
         * font-semibold: 600,
         * font-bold: 700, 
         */
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            display: ['Montserrat', 'sans-serif'],
            body: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                kitchen: "var(--kitchen)",
                snacks: "var(--snacks)",
                bodycare: "var(--bodycare)",
                washroom: "var(--washroom)",
                special: "var(--special)",
                primary: "var(--primary)",
                
                "primary-light": "var(--primary-light)",
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
