/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clrBodyBg: "hsl(var(--clr-body-bg) /<alpha-value>)",
        clrBodyBorderTop: "hsl(var(--clr-body-border-top) /<alpha-value>)",
        clrButtonBg: "hsl(var(--clr-button-bg) /<alpha-value>)",
        clrButtonBgHover: "hsl(var(--clr-button-bg-hover) /<alpha-value>)",
        clrButtonCatBg: "hsl(var(--clr-button-cat-bg) /<alpha-value>)",
        clrButtonPlaylistBg: "hsl(var(--clr-button-playlist-bg) /<alpha-value>)",
        clrTextWhite: "hsl(var(--clr-text-white) /<alpha-value>)",
        
      },

      logoConfig: {
        width: "hsl(var(--font-w-logo) /<alpha-value>)",
      },
      
      h2Config: {
        size: "hsl(var(--font-size-h2) /<alpha-value>)",
        lineHeight: "hsl(var(--font-line-height-h2) /<alpha-value>)",
        padding: "hsl(var(--font-padding-h2) /<alpha-value>)",
        margin: "hsl(var(--font-margin-h2) /<alpha-value>)",
      },

    },
  },
  plugins: [],
};
