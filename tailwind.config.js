/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'delete-icon': "url('/icons/delete_icon.svg')",
        'checkmark-icon': "url('/icons/checkmark_icon.svg')",
      },
    },
  },
  plugins: [],
};