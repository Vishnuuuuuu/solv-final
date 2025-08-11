/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Verdana', 'Arial', 'sans-serif'], // Make Verdana the default sans-serif font
        'serif': ['Verdana', 'Times New Roman', 'serif'], // Also use Verdana for serif classes
        'times': ['Times New Roman', 'serif'],
        'arial': ['Arial', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'courier': ['Courier New', 'monospace'],
        'verdana': ['Verdana', 'Arial', 'sans-serif'], // Explicit Verdana class
      },
    },
  },
  plugins: [typography],
};
