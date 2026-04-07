/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dnf: {
          gold: '#FFD700',
          blue: '#1E3A8A',
          success: '#10B981',
          failure: '#EF4444',
          warning: '#F59E0B',
          info: '#3B82F6'
        }
      }
    },
  },
  plugins: [],
};