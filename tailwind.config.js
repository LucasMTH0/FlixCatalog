/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            gray_900: '#000000',
            gray_800: '#100F0F',
            gray_700: '#272829',
            gray_300: '#EEEEEE',
            red_800: '#3D0000',
            red_700: '#950101',
            red_500: '#FF0000',
        }
      },
    },
    plugins: [],
  }