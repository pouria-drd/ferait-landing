/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,css,html}'],
  theme: {
    extend: {
      fontFamily: {
        "peyda-medium": 'Peyda Medium',
        peyda: 'Peyda Regular',
        tanha: 'tanha',
        yekanX: 'IRANYekanX',
        iransans: 'iransans',
        bjn: 'Bahij Nazanin',
      },

      colors: {
        ferait: {
          white: {
            0: "#ffffff",
            50: "#fafbfd",
          },
          black: "#292d36",
          blue: "#00ccfd",
          gray: "#80848f",

          bgBlue: {
            100: "#F9FEFF",
          },

          siteChoobBlue: "#03045E",
          rasaBlue: "#0077B6",
          avaGreen: "#4A7337",
        },
      },
    },
  },
  plugins: [],
}
