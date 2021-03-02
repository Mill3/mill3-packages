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


export const order = () => `
<p class="m-0 mb-5 p-5 bg-color-primary color-white fs-italic">This property also works with CSS Flexbox.</p>

<div class="bg-gray-100 m-0 mb-5 p-0 p-5">
  <p class="m-0 mb-3 p-0">.order-$prefix-$value (value from 0 to 5)</p>
  <ul class="d-grid grid-column-4 list-none m-0 p-0 bg-gray-200">
    <li class="bg-color-primary color-white mx-3 mb-2 p-2 order-4">Order 4</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2 order-1">Order 1</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2 order-5">Order 5</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2">Order auto</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2 order-2">Order 2</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2 order-0">Order 0</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2">Order auto</li>
    <li class="bg-color-primary color-white mx-3 mb-2 p-2">Order auto</li>
  </ul>
</div>
`;
