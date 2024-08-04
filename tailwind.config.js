/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('https://imgur.com/0KJVRGq')", // Adjust the path as needed
      },

      fontFamily: {
        bangers: ["Bangers", "system-ui"],
      },
    },
  },
  plugins: [],
};
