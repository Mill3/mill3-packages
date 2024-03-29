const theme = {
  display: [
    "none",
    "inline",
    "inline-block",
    "block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid"
  ],
  boxes: {
    narrow: "38%",
    superscope: "45%",
    "half-square": "50%",
    widescreen: "56.25%",
    "postal-card": "66.666666667%",
    landscape: "75%",
    "wide-angle": "87.5%",
    square: "100%",
    portrait: "133%",
    photography: "150%"
  },
  "flex-direction": ["column", "column-reverse", "row", "row-reverse"],
  visiblity: ["visible", "hidden"],
  "pointer-events": ["all", "none"],
  "justify-content": {
    center: "center",
    end: "flex-end",
    start: "flex-start",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
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
  "flex-grow": [0, 1, 2, 3, 4, 5],
  "flex-shrink": [0, 1, 2, 3, 4, 5],
  order: [0, 1, 2, 3, 4, 5],
  overflow: ["auto", "hidden", "visible", "scroll"],
  "font-family": {
    heading: [
      "Madras",
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
    body: ["Georgia", "serif"],
    mono: [
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },
  "font-size": {
    base: "18px",
    12: "12px",
    14: "14px",
    15: "15px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    36: "36px",
    48: "48px",
  },
  heading: {
    h1: "56px",
    h2: "48px",
    h3: "36px",
    h4: "24px",
    h5: "18px",
    h6: "16px"
  },
  position: ["static", "fixed", "absolute", "sticky", "relative"],
  "font-weight": [100, 200, 300, 400, 500, 600, 700, 800, 900],
  "text-transform": ["lowercase", "uppercase", "capitalize", "none", "inherit"],
  "text-decoration": ["none", "underline", "inherit"],
  "text-align": ["left", "right", "center"],
  "font-style": ["normal", "italic", "oblique", "inherit"],
  "line-height": {
    none: "1",
    base: "1.25",
    relaxed: "1.5",
    loose: "2"
  },
  "grid-breakpoints": {
    xs: "0", // this has to stay at 0, not 0px (node-sass was fine this, not sass-dart)
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1441px",
    xxxl: "1800px"
  },
  spacers: {
    "auto": "auto",
    "0": 0,
    "5": "5px",
    "10": "10px",
    "20": "20px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "60": "60px",
    "70": "70px",
    "80": "80px",
    "90": "80px",
    "100": "100px",
    "110": "110px",
    "120": "120px",
    "130": "130px",
    "140": "140px",
    "150": "150px",
    "160": "160px",
    "170": "170px",
    "180": "180px",
    "190": "190px",
    "200": "200px"
  },
  sizes: [
    "auto",
    0,
    50,
    100
  ],
  "z-index": [0, 1, 2, 3, 4, 5, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
  "grid-columns": 12,
  "grid-rows": 3,
  colors: {
    "color-transparent": "transparent",
    "color-current": "currentColor",
    "color-black": "#000000",
    "color-white": "#ffffff",
    "color-primary": "#0d6efd",
    "color-secondary": "#6610f2",
    "gray-100": "#f7fafc",
    "gray-200": "#edf2f7",
    "gray-300": "#e2e8f0",
    "gray-400": "#cbd5e0",
    "gray-500": "#a0aec0",
    "gray-600": "#718096",
    "gray-700": "#4a5568",
    "gray-800": "#2d3748",
    "gray-900": "#1a202c"
  }
};

module.exports = theme;
