import fluid, { extract, screens } from 'fluid-tailwind'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    extract
  ],
  theme: {
    screens,
    extend: {},
  
  },
  plugins: [
    fluid
  ],
}

