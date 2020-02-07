import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Colors" };

const background = Object.entries(theme.colors).map(
  color => `<pre class="p-2 bg-${color[0]}">.bg-${color[0]}</pre>`
);

const text = Object.entries(theme.colors).map(
  color => `<pre class="p-2 ${color[0]}">.${color[0]}</pre>`
);

export const asBackground = () => background.join("");
export const asText = () => text.join("");
