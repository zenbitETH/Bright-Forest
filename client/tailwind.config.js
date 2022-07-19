module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  enabled: true,
  darkMode: "class",
  variants: {},
  theme: {
      extend: {
          colors: {
              display: ["group-hover"],
              rider: {
                900: "#565656",
                800: "#abb0a3",
                700: "#b5eb68",
                600: "#b7f261",
                500: "#b9ff54",//Main
                400: "#b1ff40",
                300: "#a9ff2d",
                200: "#a1ff19",
                100: "#99ff06",
            },

              rival: {
                900: "#b0a8a3",
                800: "#bda696",
                700: "#dea175",
                600: "#f29d61",
                500: "#ff9b54",//Main
                400: "#ff9040",
                300: "#ff842d",
                200: "#ff7919",
                100: "#ff6d06",
              },

              ride: {
                  900: "#fff054",//Building
                  800: "#ebe068",
                  700: "#8f8200",
                  600: "#2d2900",
                  500: "#ff5463",//Error
                  400: "#000640",
                  300: "#000b7b",
                  200: "#2d3fff",
                  100: "#5463ff",//City
              },
              
            glass: {
                900: "#ffffff00",//Full 
                800: "#56565675",//Dark 
                700: "#abb0a350",//Light
                600: "#ffffff50",//Light
                500: "#00064050",//Ride 
                400: "#b9ff5450",//Rider
                300: "#ff9b5450",//Rive
                200: "#fff05450",//Building
                100: "#5463ff50",//City
            },

          },
          spacing: {
              88: "22rem",
          },
          borderRadius: {
              'lg': '25px',
          },
          fontFamily: {
              bf: ['"Space Mono"'],
              lex: ['"Lexend Deca"'],
          },
          container: {
              center: true,
              screens: {
                'xl': '1920px',
                'qhd': '2560px',
                'uhd': '3840px',
              },
          },
      },
  },
};