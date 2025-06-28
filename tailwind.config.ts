// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954", // esim. Spotify-vihreä
        background: "#121212", // tumma tausta
        accent: "#FF007A", // korosteväri
      },
    },
  },
  plugins: [],
};
