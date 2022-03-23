import "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Sizings" };

export const width = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white w-${obj[1]}">.w-${obj[1]}</pre>`
).join("");

export const minWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white min-w-${obj[1]}" style="width: 5%;">.min-w-${obj[1]}</pre>`
).join("");

export const maxWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white w-100 max-w-${obj[1]}">.max-w-${obj[1]}</pre>`
).join("");

export const viewportWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white vw-${obj[1]}">.vw-${obj[1]}</pre>`
).join("");

export const viewportMinWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white w-0 min-vw-${obj[1]}">.min-vw-${obj[1]}</pre>`
).join("");

export const viewportMaxWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="bg-color-primary p-10 color-white w-100 max-vw-${obj[1]}">.max-vw-${obj[1]}</pre>`
).join("");

export const height = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white h-${obj[1]}">.h-${obj[1]}</pre></div>`
).join("");

export const minHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white h-auto min-h-${obj[1]}">.min-h-${obj[1]}</pre></div>`
).join("");

export const maxHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white h-100 max-h-${obj[1]}">.max-h-${obj[1]}</pre></div>`
).join("");

export const viewportHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white vh-${obj[1]}">.vh-${obj[1]}</pre></div>`
).join("");

export const viewportMinHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white min-vh-${obj[1]}">.min-vh-${obj[1]}</pre></div>`
).join("");

export const viewportMaxHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-40 vh-100 mb-40 bg-gray-100"><pre class="bg-color-primary p-10 m-0 color-white h-100 max-vh-${obj[1]}">.max-vh-${obj[1]}</pre></div>`
).join("");
