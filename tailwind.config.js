/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F7941D',
          hover: '#FFA53A',
          active: '#D67D15',
        },
        background: '#0A0A0A',
        surface: '#111111',
        accent: '#000000',
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E0E0',
        },
        border: '#2A2A2A',
        win: '#F7941D',
        draw: '#A0A0A0',
        loss: '#707070',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.2)',
        md: '0 4px 8px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
