/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px', // Restrict maximum width
          '2xl': '1200px', // Restrict maximum width
        },
      },
      colors: {
        primary: "#DF00FF", // KeepAustinMowed Purple
        secondary: "#000000",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(223, 0, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(223, 0, 255, 0.6), 0 0 40px rgba(223, 0, 255, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}
