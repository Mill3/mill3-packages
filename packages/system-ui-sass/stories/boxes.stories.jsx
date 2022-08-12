import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Boxes" };

const boxes = Object.entries(theme.boxes).map(
  obj => `<pre>.box-${obj[0]}</pre><div class="box box-${obj[0]} w-50 mb-40 bg-gray-400"></div>`
);


export const boxesRatios = () => boxes.join("");
