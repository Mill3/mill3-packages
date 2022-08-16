import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Grid" };

export const gridColumns = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const columns = new Array(i+1).fill(
        `<pre>.grid-column-${i+1}</pre>`
      );
      return `<div class="d-grid grid-column-${i+1} grid-gap-5">${columns.join("")}</div>`;
    })
    .join("");

export const gridGap = () =>
  Object.entries(theme.spacers)
    .map(
      obj => `<div class="d-grid grid-column-4 grid-gap-${obj[0]}">
    <pre>.grid-gap-${obj[0]}</pre>
    <pre>.grid-gap-${obj[0]}</pre>
    <pre>.grid-gap-${obj[0]}</pre>
    <pre>.grid-gap-${obj[0]}</pre>
  </div>`
    )
    .join("");

export const gridColumnStart = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const column = `<pre class="col-start-${i+1}">.col-start-${i+1}</pre>`;
      return `<div class="d-grid grid-column-${theme["grid-columns"]} grid-gap-5">${column}</div>`;
    })
    .join("");

export const gridColumnEnd = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const column = `<pre class="col-start-1 col-end-${i+1}">.col-end-${i+1}</pre><pre class="col-start-1 col-end-span-${i+1}">.col-end-span-${i+1}</pre>`;
      return `<div class="d-grid grid-column-${theme["grid-columns"]} grid-gap-5">${column}</div>`;
    })
    .join("")
    +
    `<div class="d-grid grid-column-${theme["grid-columns"]} grid-gap-5"><pre class="col-start-1 col-end-limit">.col-end-limit</pre></div>`
    ;

export const gridColumnFull = () => `
  <div class="d-grid grid-column-${theme["grid-columns"]} grid-gap-5">
    <pre class="col-full">.col-full</pre>
  </div>
`;

export const gridRows = () =>
  [...Array(theme["grid-rows"])]
    .map((obj, i) => {
      const rows = new Array(i+1).fill(
        `<pre class="m-0">.grid-row-${i+1}</pre>`
      );
      return `<div class="d-grid grid-column-2 grid-row-${i+1} grid-gap-5 m-10">${rows.join("")}</div>`;
    })
    .join("");

export const gridRowStart = () => `
  <div class="d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        return `<pre class="m-0 col-start-${i+1} row-start-${i+1}">.row-start-${i+1}</pre>`;
      })
      .join("")+
  `</div>
`;

export const gridRowEnd = () => `
  <div class="d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        if (i > 0)
        return `<pre class="m-0 row-end-${i+1}">.row-end-${i+1}</pre>`;
      })
      .join("")+
      `<pre class="m-0 col-start-2 row-start-3 row-end-limit">.row-start-3 </br>.row-end-limit</pre>
  </div>
  <div class="d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5 mt-10">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        return `<pre class="m-0 row-end-span-${i+1}">.row-end-span-${i+1}</pre>`;
      })
      .join("")+
  `</div>
`;

export const gridRowFull = () => `
  <div class="d-grid grid-column-2 grid-row-3 grid-gap-5">
    <pre class="m-0 row-full p-30">.row-full</pre>
    <pre class="m-0 row-start-1 row-end-2 p-30">.row-start-1 .row-end-2</pre>
  </div>
`;

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

export const justifySelf = () => Object.entries(theme["align-self"]).map(
  obj => `
    <div class="bg-gray-100 m-0 mb-40 p-0 p-40">
      <ul class="d-grid grid-column-2 grid-gap-10 list-none m-0 p-0 bg-gray-200" style="height: 10vh;">
        <li class="bg-color-primary color-white p-10">Sibling item</li>
        <li class="bg-color-primary color-white p-10 justify-self-${obj[0]}">.justify-self-${obj[0]}</li>
      </ul>
    </div>`
  ).join("");