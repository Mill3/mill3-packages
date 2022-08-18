import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Grid" };

export const gridColumns = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const columns = new Array(i+1).fill(
        `<div class="m-0 bg-gray-600" style="height: 28px;"></div>`
      );
      return `
        <div class="p-10 mb-20 bg-gray-200">
          <pre class="m-0 mb-10">.grid-column-${i+1}</pre>
          <div class="d-grid grid-column-${i+1} grid-gap-5">${columns.join("")}</div>
        </div>
      `;
    })
    .join("");

export const gridGap = () =>
  Object.entries(theme.spacers)
    .map(
      obj => `
      <div class="p-10 mb-20 bg-gray-200">
        <pre class="m-0 mb-10">.grid-gap-${obj[0]}</pre>
        <div class="d-grid grid-column-4 grid-gap-${obj[0]}">
          <pre class="m-0 bg-gray-600" style="height: 28px;"></pre>
          <pre class="m-0 bg-gray-700" style="height: 28px;"></pre>
          <pre class="m-0 bg-gray-800" style="height: 28px;"></pre>
          <pre class="m-0 bg-gray-900" style="height: 28px;"></pre>
        </div>
      </div>
    `
    )
    .join("");

export const gridColumnStart = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const column = `<pre class="col-start-${i+1} m-0">.col-start-${i+1}</pre>`;
      return `<div class="p-10 bg-gray-200 d-grid grid-column-${theme["grid-columns"]} grid-gap-5">${column}</div>`;
    })
    .join("");

export const gridColumnEnd = () =>
  [...Array(theme["grid-columns"])]
    .map((obj, i) => {
      const column = `<pre class="col-start-1 col-end-${i+1} m-0">.col-end-${i+1}</pre><pre class="col-start-1 col-end-span-${i+1} m-0">.col-end-span-${i+1}</pre>`;
      return `<div class="p-10 bg-gray-200 mb-20 d-grid grid-column-${theme["grid-columns"]} grid-gap-5">${column}</div>`;
    })
    .join("")
    +
    `<div class="p-10 bg-gray-200 d-grid grid-column-${theme["grid-columns"]} grid-gap-5"><pre class="col-start-1 col-end-limit">.col-end-limit</pre></div>`
    ;

export const gridColumnFull = () => `
  <div class="p-10 bg-gray-200 d-grid grid-column-${theme["grid-columns"]} grid-gap-5">
    <pre class="col-full m-0">.col-full</pre>
  </div>
`;

export const gridRows = () =>
  [...Array(theme["grid-rows"])]
    .map((obj, i) => {
      const rows = new Array((i + 1) * 2).fill(
        `<pre class="m-0">.grid-row-${i+1}</pre>`
      );
      return `<section class="p-10 bg-gray-200 mb-20"><div class="d-grid grid-column-2 grid-row-${i+1} grid-gap-5 m-10">${rows.join("")}</div></section>`;
    })
    .join("");

export const gridRowStart = () => `
  <div class="p-10 bg-gray-200 d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        return `<pre class="m-0 col-start-${i+1} row-start-${i+1}">.row-start-${i+1}</pre>`;
      })
      .join("")+
  `</div>
`;

export const gridRowEnd = () => `
  <div class="bg-gray-200 mb-20 p-10 d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        if (i > 0)
        return `<pre class="m-0 row-end-${i+1}">.row-end-${i+1}</pre>`;
      })
      .join("")+
      `<pre class="m-0 col-start-2 row-start-3 row-end-limit">.row-start-3 </br>.row-end-limit</pre>
  </div>
  <div class="bg-gray-200 mb-20 p-10 d-grid grid-column-${theme["grid-rows"]} grid-row-${theme["grid-rows"]} grid-gap-5 mt-10">`+
      [...Array(theme["grid-rows"])]
      .map((obj, i) => {
        return `<pre class="m-0 row-end-span-${i+1}">.row-end-span-${i+1}</pre>`;
      })
      .join("")+
  `</div>
`;

export const gridRowFull = () => `
  <div class="p-10 mb-20 bg-gray-200 d-grid grid-column-2 grid-row-3 grid-gap-5 vh-50">
    <pre class="m-0 row-full p-10">.row-full</pre>
    <pre class="m-0 row-start-1 row-end-2 p-10">.row-start-1 .row-end-2</pre>
  </div>
`;

export const order = () => `
  <p class="m-0 mb-40 p-40 bg-gray-600 color-white">This property works with CSS Flexbox and CSS Grid.</p>
  <div class="p-10 bg-gray-200 bg-gray-100 m-0 mb-40">
    <ul class="d-flex list-none m-0 p-0 bg-gray-200 grid-gap-10">
      <li class="order-4"><pre class="m-0">.order-4</pre></li>
      <li class="order-1"><pre class="m-0">.order-1</pre></li>
      <li class="order-5"><pre class="m-0">.order-5</pre></li>
      <li class="order-2"><pre class="m-0">.order-2</pre></li>
      <li class="order-0"><pre class="m-0">.order-0</pre></li>
    </ul>
  </div>
`;

export const justifySelf = () => Object.entries(theme["align-self"]).map(
  obj => `
    <div class="p-10 mb-20 bg-gray-200">
      <pre class="m-0 p-10 mb-10">.justify-self-${obj[0]}</pre>
      <div class="d-grid grid-column-2 grid-gap-10 list-none m-0 p-0" style="height: 10vh;">
        <div class="bg-gray-600 color-white p-10"></div>
        <pre class="p-10 justify-self-${obj[0]} m-0">.justify-self-${obj[0]}</pre>
      </div>
    </div>`
  ).join("");
