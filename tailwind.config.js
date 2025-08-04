/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Eğer .dark sınıfına göre çalışıyorsa
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-animate-css'), // Eğer kullanıyorsan
  ],
};
