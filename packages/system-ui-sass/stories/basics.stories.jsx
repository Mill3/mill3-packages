import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Basics" };

const d = Object.values(theme.display).map(
  display => {
    let classname = `d-${display}`;
    let content = `
      <div>block 1</div>
      <div>block 2</div>
      <div>block 3</div>
      <div>block 4</div>
    `;

    switch(display) {
      case "inline":
        classname = "d-block";
        content = `
          <div class="d-inline">block 1</div>
          <div class="d-inline">block 2</div>
          <div class="d-inline">block 3</div>
          <div class="d-inline">block 4</div>
        `;
      break;
      case "flex":
        content = `
          <div class="w-50 p-5 bg-gray-200">block 1</div>
          <div class="w-50 p-5 bg-gray-200">block 2</div>
        `;
      break;
      case "grid":
        classname += " grid-column-4 grid-gap-40";
        content = `
          <div class="p-5 bg-gray-200">block 1</div>
          <div class="p-5 bg-gray-200">block 2</div>
          <div class="p-5 bg-gray-200">block 3</div>
          <div class="p-5 bg-gray-200">block 4</div>
        `;
      break;

      case "inline-block": return;
      case "inline-flex": return;
      case "inline-grid": return;
    }

    const output = `<div class="d-block m-0 mb-40 p-40 bg-gray-100">
      <p class="m-0 p-0">.d-${display}</p>
      <div class="${classname} mt-3" style="border: 1px solid currentColor;">
        ${content}
      </div>
    </div>`;

    return output;
  }
);

d.push(`<p class="m-0 pl-40 pr-40 pt-10 pb-10 bg-gray-700 color-white"><em>.inline-block</em>, <em>.inline-flex</em> and <em>.inline-grid</em> are also available.</p>`);


const visibilities = [];
      visibilities.push(`<p><em class="fw-500">.visibility-visible</em>: Show element</p>`);
      visibilities.push(`<p><em class="fw-500">.visibility-hidden</em>: Hide element</p>`);

const pointers = [];
      pointers.push(`<p><em class="fw-500">.pointer-events-all</em>: Enable all pointer-events for this element</p>`);
      pointers.push(`<p><em class="fw-500">.pointer-events-none</em>: Disable all pointer-events for this element, and his children. If a child of his has .pointer-events-all, it will received pointer-events.</p>`);


const overflows = [];
      overflows.push(`<p><em class="fw-500">.overflow-auto</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-hidden</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-visible</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-scroll</em></p>`);

const positions = [];
      positions.push(`<p><em class="fw-500">.position-static</em></p>`);
      positions.push(`<p><em class="fw-500">.position-fixed</em></p>`);
      positions.push(`<p><em class="fw-500">.position-relative</em></p>`);
      positions.push(`<p><em class="fw-500">.position-absolute</em></p>`);
      positions.push(`<p><em class="fw-500">.position-sticky</em></p>`);

const lists = [];
      lists.push(`
      <p class="fw-700 m-0 p-0">.list-none</p>
      <p class="m-0 mb-20 p-0">Remove list bullet/numbers at the beginning of each &lt;li&gt;</p>

      <ul class="list-none">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>`);

const z = `
  <p class="fw-700 m-0 p-0">.z-$value</p>
  <p class="m-0 p-0">Supported values: ${Object.values(theme["z-index"]).join(", ")}</p>
`;

export const display = () => d.join("");
export const list = () => lists.join("");
export const overflow = () => overflows.join("");
export const pointerEvents = () => pointers.join("");
export const position = () => positions.join("");
export const visiblity = () => visibilities.join("");
export const zIndex = () => z;
