module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif']
      },
      colors: {
        "main-black": "#232323",
        "main-blue": "#1E90FF",
        "main-gray": "595959"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
