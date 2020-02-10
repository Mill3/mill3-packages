import "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Sizings" };

export const width = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white w-${obj[1]}">.w-${obj[1]}</pre>`
).join("");

export const widthViewport = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white vw-${obj[1]}">.vw-${obj[1]}</pre>`
).join("");

export const minWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white w-5 min-w-${obj[1]}">.min-w-${obj[1]}</pre>`
).join("");

export const maxWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white w-100 max-w-${obj[1]}">.max-w-${obj[1]}</pre>`
).join("");

export const minViewportWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white vw-5 min-vw-${obj[1]}">.min-vw-${obj[1]}</pre>`
).join("");

export const maxViewportWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-2 color-white vw-100 max-vw-${obj[1]}">.max-vw-${obj[1]}</pre>`
).join("");

export const height = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-5 vh-125 mb-5 bg-gray-100"><pre class="bg-color-primary p-2 color-white h-${obj[1]}">.h-${obj[1]}</pre></div>`
).join("");

export const minHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-5 vh-125 mb-5 bg-gray-100"><pre class="bg-color-primary p-2 color-white h-5 min-h-${obj[1]}">.min-h-${obj[1]}</pre></div>`
).join("");
