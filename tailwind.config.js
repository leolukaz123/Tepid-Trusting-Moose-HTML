module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "Unit": "16px",
        "OneAndHalfUnits": "24px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "TwelveUnits": "192px",
        "SixUnits": "96px",
        "HalfUnit": "8px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px",
        "Rounded": "50px",
        "Round": "50%"
      },
      "scale": {
        "XLarge": "192px",
        "XSmall": "16px",
        "Medium": "96px",
        "Small": "48px",
        "XXLarge": "288px",
        "MaxWidth": "1400px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}