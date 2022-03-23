import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Grid" };

export const gridColumns = () =>
  Object.entries(theme["grid-columns"])
    .map(obj => {
      const columns = new Array(parseInt(obj[0])).fill(
        `<pre class="bg-color-primary p-10 color-white">.grid-column-${
          obj[0]
        }</pre>`
      );
      return `<div class="d-grid grid-column-${
        obj[0]
      } grid-gap-5">${columns.join("")}</div>`;
    })
    .join("");

export const gridGap = () =>
  Object.entries(theme.spacers)
    .map(
      obj => `<div class="d-grid grid-column-4 grid-gap-${obj[0]}">
    <pre class="bg-color-primary p-10 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-10 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-10 color-white">.grid-gap-${obj[0]}</pre>
    <pre class="bg-color-primary p-10 color-white">.grid-gap-${obj[0]}</pre>
  </div>`
    )
    .join("");


export const order = () => `
  <p class="m-0 mb-40 p-40 bg-color-primary color-white fs-italic">This property also works with CSS Flexbox.</p>
  <div class="bg-gray-100 m-0 mb-40 p-0 p-40">
    <ul class="d-flex list-none m-0 p-0 bg-gray-200">
      <li class="bg-color-primary color-white mr-20 p-10 order-4">.order-4</li>
      <li class="bg-color-primary color-white mr-20 p-10 order-1">.order-1</li>
      <li class="bg-color-primary color-white mr-20 p-10 order-5">.order-5</li>
      <li class="bg-color-primary color-white mr-20 p-10 order-2">.order-2</li>
      <li class="bg-color-primary color-white mr-20 p-10 order-0">.order-0</li>
    </ul>
  </div>
`;

export const justifySelf = () => Object.entries(theme["justify-self"]).map(
  obj => `
    <div class="bg-gray-100 m-0 mb-40 p-0 p-40">
      <ul class="d-grid grid-column-2 grid-gap-10 list-none m-0 p-0 bg-gray-200" style="height: 10vh;">
        <li class="bg-color-primary color-white p-10">Sibling item</li>
        <li class="bg-color-primary color-white p-10 justify-self-${obj[0]}">.justify-self-${obj[0]}</li>
      </ul>
    </div>`
  ).join("");
