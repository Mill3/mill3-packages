import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Colors" };

const background = Object.entries(theme.colors).map(
  color => `<div class="p-10 bg-${color[0]}">.bg-${color[0]}</div>`
);

const text = Object.entries(theme.colors).map(
  color => `<div class="p-10 ${color[0]}">.${color[0]}</div>`
);

export const asBackground = () => background.join("");
export const asText = () => text.join("");
