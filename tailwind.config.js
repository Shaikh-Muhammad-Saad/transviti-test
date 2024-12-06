/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c1d9ff',
          300: '#93bbff',
          400: '#5e94ff',
          500: '#3366ff',
          600: '#0052CC', // Primary blue
          700: '#0040a3',
          800: '#003785',
          900: '#002f6e',
          950: '#001a3d',
        },
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

