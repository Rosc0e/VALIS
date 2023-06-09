/** @type {import('tailwindcss').Config} */
module.exports = {

  // theme: {
  //   screens: {
  //     'sm': '576px',
  //     // => @media (min-width: 576px) { ... }


  //   },
  // },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: [

    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],

  plugins: [require("daisyui"), require('prettier-plugin-tailwindcss')],
  daisyui: {
    themes: ["lofi"],
  },
}
