/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.md',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

