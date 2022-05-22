module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
   
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#94C300", 
          secondary: "#f6d860",
          accent: "red",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")], 
}