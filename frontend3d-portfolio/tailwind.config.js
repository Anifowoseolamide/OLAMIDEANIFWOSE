/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#14091F', // Velvet Night
        accent1: '#FF4D8D',    // Hot Coral-Pink
        accent2: '#B4FF39',    // Electric Lime
        accent3: '#38E1FF',    // Cyan Pop
        accent4: '#FF8A3D',    // Sunburst Orange
        textPrimary: '#F6F3FF',// Cloud White
        textMuted: '#B8AFC9',  // Muted text
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
