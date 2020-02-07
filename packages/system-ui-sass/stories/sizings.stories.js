import "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Sizings" };

export const sizes = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white w-${obj[1]}">.w-${obj[1]}</pre>`
).join("");
