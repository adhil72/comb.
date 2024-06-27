import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#000000',
        'secondary': '#121212',
        'tint':'#0703fc',
        'tint-alt':"#1373D1",
        'tint-dark':'rgb(2 0 137)',
      },
      colors:{
        'primary': '#ffffff',
        'secondary': 'grey',
        'tint':'#0703fc',
        'tint-alt':"#1373D1",
        'tint-dark':'rgb(2 0 137)',
      }
    },
  },
  plugins: [],
};
export default config;
