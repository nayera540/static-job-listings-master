/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Desaturated-Dark-Cyan": "hsl(180, 29%, 50%)",
                "Light-Grayish-Cyan": "hsl(180, 52%, 96%)",
                "Light-Grayish-Cyan-Filter": "hsl(180, 31%, 95%)",
                "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
                "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
                "shadow": "hsl(180deg 29% 50% / 60%)"
            },
            fontFamily: {
                "spartan": ["League Spartan", "sans-serif"]
            },
            fontSize: {
                base: "15px"
            },
            backgroundImage: {
                "desktop-img-pattern": "url('/images/bg-header-desktop.svg')",
                "mobile-img-pattern": "url('/images/bg-header-mobile.svg')"
            }
        },
        maxWidth: {
            '1000px': '1000px', 
        },
    },
    plugins: [],
}

