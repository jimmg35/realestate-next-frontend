module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./Layout/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          'primary': '#10B981',
          'second': '#fcfcfc',
          'accent': '#6345BF'
        },
        'text': {
          'main': '#ffffff' // #000000
        },
        'bg': {
          'darkGrey': '#333333'
        },
        'border': '#0000003b',
        'sub': {
          'primary': '#007fff'
        }
      }
    },
  },
  plugins: [],
}
