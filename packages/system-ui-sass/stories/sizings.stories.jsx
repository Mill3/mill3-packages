import "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Sizings" };

export const width = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block w-${obj[1]}">.w-${obj[1]}</pre>`
).join("");

export const minWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block min-w-${obj[1]}" style="width: 5%;">.min-w-${obj[1]}</pre>`
).join("");

export const maxWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block w-100 max-w-${obj[1]}">.max-w-${obj[1]}</pre>`
).join("");

export const viewportWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block vw-${obj[1]}">.vw-${obj[1]}</pre>`
).join("");

export const viewportMinWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block w-0 min-vw-${obj[1]}">.min-vw-${obj[1]}</pre>`
).join("");

export const viewportMaxWidth = () => Object.entries(theme.sizes).map(
  obj => `<pre class="p-10 m-0 mb-20 d-block w-100 max-vw-${obj[1]}">.max-vw-${obj[1]}</pre>`
).join("");

export const height = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block h-${obj[1]}">.h-${obj[1]}</pre></div>`
).join("");

export const minHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block h-auto min-h-${obj[1]}">.min-h-${obj[1]}</pre></div>`
).join("");

export const maxHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block h-100 max-h-${obj[1]}">.max-h-${obj[1]}</pre></div>`
).join("");

export const viewportHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block vh-${obj[1]}">.vh-${obj[1]}</pre></div>`
).join("");

export const viewportMinHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block min-vh-${obj[1]}">.min-vh-${obj[1]}</pre></div>`
).join("");

export const viewportMaxHeight = () => Object.entries(theme.sizes).map(
  obj => `<div class="p-10 vh-100 mb-40 bg-gray-200"><pre class="p-10 m-0 d-block h-100 max-vh-${obj[1]}">.max-vh-${obj[1]}</pre></div>`
).join("");
