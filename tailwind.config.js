/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [
    require('postcss-rtl')(), // Adds RTL support
  ],
  theme: {
    extend: {
      // 1. **Colors**
      colors: {
        primary: {
          dark: '#660033',  // Dark maroon
          light: '#FFFFFF', // White
        },
        secondary: {
          light: '#FE3B4B',  // Bright red
          dark: '#5E4648',   // Dark greyish
          cream: '#FFFEE0',  // Light cream
        },
        text: {
          primary: '#5E4648', // Text (dark)
          background: '#FFFEE0', // Light cream background
        },
        background: {
          light: '#FFFFFF',  // White
          dark: '#000000',   // Black background
        },
        button: {
          primary: '#FE3B4B',  // Bright red
          hover: '#D5323F', 
        },
      },

      // 2. **Font Family**
      fontFamily: {
        sans: ['Cairo', 'sans-serif'], // Using Cairo font for all headings and body text
      },

      // 3. **Font Weight**
      fontWeight: {
        extrabold: 800,
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
      },

      // 4. **Font Sizes**
      fontSize: {
        'xs': '0.75rem',   // For small text
        'sm': '0.875rem',  // Regular text size
        'base': '1rem',    // Medium size text
        'lg': '1.125rem',  // Semi-bold headings
        'xl': '1.25rem',   // Bold text
        '2xl': '1.5rem',   // Extra bold
      },

      // 5. **Border Radius**
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },
}

