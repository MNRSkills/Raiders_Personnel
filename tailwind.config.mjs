/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["var(--font-open-sans)", "sans-sarif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(90deg, rgba(88,88,86,1) 31%, rgba(163,163,162,1) 100%, rgba(255,255,255,1) 100%)",
        "hero-headshot":
          "url('https://cdn.shopify.com/s/files/1/0911/1420/9592/files/Raider_Mack_-headshot.png?v=1737959874')",
        "hero-headshot-ken":
          "url('https://cdn.shopify.com/s/files/1/0911/1420/9592/files/2.png?v=1737960339')",
        "bg-logo-transparent":
          "url('https://cdn.shopify.com/s/files/1/0911/1420/9592/files/Favicon-_Transparent.png?v=1737956908')",
      },
    },
  },
  plugins: [],
};
