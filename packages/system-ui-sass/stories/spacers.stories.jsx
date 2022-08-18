import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Spacers" };

export const marginBottom = () => Object.entries(theme.spacers).map(
  obj => `<pre class="p-10 m-0 mb-${obj[0]} d-block">.mb-${obj[0]}</pre>`
).join("");

export const marginTop = () => Object.entries(theme.spacers).map(
  obj => `<pre class="p-10 m-0 mt-${obj[0]} d-block">.mt-${obj[0]}</pre>`
).join("");

/*
export const marginVertical = () => Object.entries(theme.spacers).map(
  obj => `<pre class="bg-color-primary p-10 color-white my-${obj[0]}">.my-${obj[0]}</pre>`
).join("");
*/

/*
export const marginHorizontal = () => Object.entries(theme.spacers).map(
  obj => `<div class="d-flex"><pre class="bg-color-primary p-10 w-50 color-white mx-${obj[0]}">.mx-${obj[0]}</pre></div>`
).join("");
*/

export const marginLeft = () => Object.entries(theme.spacers).map(
  obj => `<pre class="p-10 w-50 m-0 mb-5 color-white ml-${obj[0]}">.ml-${obj[0]}</pre>`
).join("");

export const marginRight = () => Object.entries(theme.spacers).map(
  obj => `<div class="d-flex justify-content-end"><pre class="p-10 m-0 mb-5 w-50 color-white mr-${obj[0]}">.mr-${obj[0]}</pre></div>`
).join("");
