/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBorderBlue: "hsl(var(--clr-border-blue) / <alpha-value>)",
        colorBgBtn: "hsl(var(--clr-bg-btn) / <alpha-value>)",
        colorBgBtnHover: "hsl(var(--clr-bg-btn-hover) / <alpha-value>)",
        colorBgBody: "hsl(var(--clr-bg-body) / <alpha-value>)",
        colorBgBtnCate: "hsl(var(--clr-bg-btn-cate) / <alpha-value>)",
        colorBgNav: "hsl(var(--clr-bg-nav) / <alpha-value>)",
        colorWhite: "hsl(var(--clr-white) / <alpha-value>)",
      },
      spacing: {
        sizeSlider: "var(--size-slider)",
      },
    },
  },
  plugins: [],
};
