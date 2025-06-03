import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        earth: {
          50: '#f7f3ed',
          100: '#e8d9c6',
          200: '#d4bc99',
          300: '#c4a077',
          400: '#b38855',
          500: '#96703d',
          600: '#7a5a32',
          700: '#5d4426',
          800: '#402e1a',
          900: '#24190e',
        },
        moss: {
          50: '#f1f8f2',
          100: '#dcedd8',
          200: '#b9d6b2',
          300: '#93bf89',
          400: '#6ea862',
          500: '#4d8c3f',
          600: '#3d7032',
          700: '#2e5425',
          800: '#1f3818',
          900: '#101c0c',
        },
        clay: {
          50: '#fdf5f3',
          100: '#f8e4dd',
          200: '#f1c4b7',
          300: '#e9a391',
          400: '#e2836b',
          500: '#d85f42',
          600: '#ad4c35',
          700: '#823928',
          800: '#57261b',
          900: '#2c130d',
        },
        ocean: {
          50: "#f0fdff",
          100: "#cdf7fe",
          200: "#99ecfd",
          300: "#66dffb",
          400: "#33cff8",
          500: "#00bff5",
          600: "#0099c4",
          700: "#007393",
          800: "#004c62",
          900: "#002631",
        },
        algae: {
          50: "#f0fff7",
          100: "#cdfee7",
          200: "#99fdd2",
          300: "#66fbbc",
          400: "#33f8a5",
          500: "#00f48e",
          600: "#00c372",
          700: "#009256",
          800: "#006239",
          900: "#00311d",
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        wave: 'wave 2s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

export default config 