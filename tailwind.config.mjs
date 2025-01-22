/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-section":
          "url('https://cdn.shopify.com/s/files/1/0911/1420/9592/files/Raiders_Personnel_Hero.png?v=1737338547')",
      },
    },
  },
  plugins: [],
};
