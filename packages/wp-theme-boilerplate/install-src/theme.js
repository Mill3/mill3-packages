const generateValues = (start, end, step = 1) => {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, idx) => start + idx * step);
};

const theme = {
  "background-position": {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top"
  },
  "background-size": ["auto", "cover", "contain"],
  overflow: ["auto", "hidden", "visible", "scroll"],
  display: [
    "none",
    "inline",
    "inline-block",
    "block",
    "flex",
    "inline-flex",
    "inline-flex"
  ],
  boxes: {
    superscope: "45%",
    "half-square": "50%",
    widescreen: "56.25%",
    landscape: "75%",
    "wide-angle": "87.5%",
    square: "100%",
    portrait: "130%"
  },
  "flex-direction": ["column", "column-reverse", "row", "row-reverse"],
  visiblity: ["visible", "hidden"],
  "pointer-events": ["all", "none"],
  "justify-content": {
    center: "center",
    end: "flex-end",
    start: "flex-start",
    between: "space-between",
    around: "around",
    stretch: "stretch"
  },
  "align-items": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "align-content": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "align-self": {
    baseline: "baseline",
    end: "flex-end",
    start: "flex-start",
    center: "center",
    stretch: "stretch"
  },
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "flex-grow": generateValues(0, 5),
  "flex-shrink": generateValues(0, 5),
  order: generateValues(0, 5),
  "font-family": {
    sans: [
      "Favorit",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ],
    serif: ["Georgia", "serif"],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },
  "font-size": {
    xs: "14px",
    sm: "16px",
    base: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "34px",
    "3xl": "42px",
    "4xl": "70px",
    "5xl": "90px",
    "6xl": "180px"
  },
  heading: {
    h1: "70px",
    h2: "42px",
    h3: "34px",
    h4: "24px",
    h5: "20px",
    h6: "18px"
  },
  position: ["static", "fixed", "relative", "absolute", "sticky"],
  "font-weight": [100, 200, 300, 400, 500, 600, 700, 800, 900],
  "text-transform": ["lowercase", "uppercase", "capitalize", "none", "inherit"],
  "text-transform": ["lowercase", "uppercase", "capitalize", "none", "inherit"],
  "text-decoration": ["none", "underline", "inherit"],
  "text-align": ["left", "right", "center"],
  "font-style": ["normal", "italic", "oblique", "inherit"],
  "line-height": {
    none: "1",
    base: "1.5",
    heading: "1.2",
    loose: "1.777777778"
  },
  "grid-breakpoints": {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1441px"
  },
  gutter: "20px",
  spacers: {
    auto: "auto",
    base: "1rem",
    "0": "0",
    "1": "10px",
    "2": "15px",
    "3": "20px",
    "4": "25px",
    "5": "40px",
    "6": "50px",
    "7": "60px",
    "8": "80px",
    "9": "100px",
    "10": "200px"
  },
  sizes: [
    "auto",
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120,
    125
  ],
  "z-index": generateValues(0, 10000, 1000),
  columns: {
    auto: "auto",
    // 12 columns base
    "1": "8.3333%",
    "2": "50%",
    "3": "40%",
    "4": "30%",
    "5": "41.66667%",
    "6": "50%",
    "7": "58.3333%",
    "8": "66.666667",
    "9": "75%",
    "10": "83.33333%",
    "11": "91.66667%",
    "12": "100%",
    // 10 columns base
    "100": "10%",
    "200": "20%",
    "300": "30%",
    "400": "40%",
    "500": "50%",
    "600": "60%",
    "700": "70%",
    "800": "80%",
    "900": "90%",
    "1000": "100%",
    screen: "100vw"
  },
  radiuses: {
    //"0": "0",
  },
  boxShadow: {
    //"1": "0 14px 14px rgba(0,0,0,0.35)"
  },
  colors: {
    "color-transparent": "transparent",
    "color-current": "currentColor",
    "color-black": "#000000",
    "color-white": "#ffffff"
  }
};

module.exports = theme;
