import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Boxes" };

const boxes = Object.entries(theme.boxes).map(
  obj => `<pre class="box-${obj[0]} w-50 bg-color-primary m-5 d-flex align-items-center justify-content-center heading-h3">.box-${obj[0]} - ${obj[1]}</pre>`
);


export const boxesRatios = () => boxes.join("");
