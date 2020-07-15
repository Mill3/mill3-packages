import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Grid" };

export const gridColumns = () =>
  Object.entries(theme["grid-columns"])
    .map(obj => {
      const columns = new Array(parseInt(obj[0])).fill(
        `<pre class="bg-color-primary p-2 color-white">.grid-column-${
          obj[0]
        }</pre>`
      );
      return `<div class="d-grid grid-column-${
        obj[0]
      } grid-gap-1">${columns.join("")}</div>`;
    })
    .join("");

export const gridGap = () =>
  Object.entries(theme.spacers)
    .map(
      obj => `<div class="d-grid grid-column-4 grid-gap-${obj[0]}">
    <pre class="bg-color-primary p-2 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-2 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-2 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-2 color-white">.grid-gap-${obj[0]}</pre>
  </div>`
    )
    .join("");
