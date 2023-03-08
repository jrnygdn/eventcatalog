module.exports = {
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'bg-red-50',
      'bg-yellow-50',
      'bg-indigo-50',
      'text-red-400',
      'text-yellow-400',
      'text-indigo-400',
      'bg-green-500',
      'bg-indigo-500',
      'bg-yellow-500',
      'bg-purple-100',
      'text-purple-800',
      'bg-pink-100',
      'text-pink-800',
      'bg-green-100',
      'text-green-800',
      'bg-yellow-100',
      'text-yellow-800',
      'bg-blue-100',
      'text-blue-800',
      'bg-indigo-100',
      'text-indigo-800',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};


