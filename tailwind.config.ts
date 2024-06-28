import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#000000',
        "primary-light": "#121212",
        'secondary': '#121212',
        'tint': '#0703fc',
        'tint-alt': "#1373D1",
        'tint-dark': 'rgb(2 0 137)',
        'red': '#ffffff',
      },
      colors: {
        'primary': '#ffffff',
        'secondary': 'grey',
        'tint': '#0703fc',
        'tint-alt': "#1373D1",
        'tint-dark': 'rgb(2 0 137)',
        'red': '#ffffff',
      },
      borderColor: {
        primary: "#0703fc"
      },
      animation: {
        scale: 'scale 0.3s ease-in-out infinite',
        translate: 'translate 1s ease-in-out infinite',
        slideLeft: 'slideLeft 1s ease-in-out infinite'
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        translate: {
          '0%': {
            transform: 'translateX(-110%)',
          },
          '100%': {
            transform: 'translateX(110%)'
          }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
