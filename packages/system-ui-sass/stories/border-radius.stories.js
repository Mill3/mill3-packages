import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Border Radius" };

export const top = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-${radius[0]}">.radius-${radius[0]}</pre>`
).join("");
