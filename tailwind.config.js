/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      white: '#ffffff',
      pink: '#F0DEFF',
      green: '#44ffa1',
      grey: '#584d62',
      purple: '#24053e',
    },
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        green: '0px 0px 0px 2px #44ffa1;',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
