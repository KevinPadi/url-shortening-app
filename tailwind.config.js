/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins',
      serif: 'sans-serif'
    },
    backgroundImage: {
      hero: "url('./src/assets/images/illustration-working.svg')",
      shortenDeskBg: "url('./src/assets/images/bg-shorten-desktop.svg')",
      shortenMobileBg: "url('./src/assets/images/bg-shorten-mobile.svg')"
    },
    extend: {
      colors: {
        Cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        Red: 'hsl(0, 87%, 67%)',
        Gray: 'hsl(0, 0%, 75%)',
        GrayishViolet: 'hsl(257, 7%, 63%)',
        VeryDarkBlue: 'hsl(255, 11%, 22%)',
        VeryDarkViolet: 'hsl(260, 8%, 14%)'
      }
    }
  },
  plugins: []
}
