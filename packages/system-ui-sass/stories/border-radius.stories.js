import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Border Radius" };

export const All = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-${radius[0]}">.radius-${radius[0]}</pre>`
).join("");

export const top = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-t-${radius[0]}">.radius-t-${radius[0]}</pre>`
).join("");

export const bottom = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-b-${radius[0]}">.radius-b-${radius[0]}</pre>`
).join("");

export const topLeft = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-tl-${radius[0]}">.radius-tl-${radius[0]}</pre>`
).join("");

export const topRight = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-tr-${radius[0]}">.radius-tr-${radius[0]}</pre>`
).join("");

export const bottomLeft = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-bl-${radius[0]}">.radius-bl-${radius[0]}</pre>`
).join("");

export const bottomRight = () => Object.entries(theme.radiuses).map(
  radius => `<pre class="p-2 box-square w-100 w-lg-15 d-flex align-items-center justify-content-center bg-color-primary overflow-hidden radius-br-${radius[0]}">.radius-br-${radius[0]}</pre>`
).join("");
