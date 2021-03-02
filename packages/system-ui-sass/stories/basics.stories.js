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
          <div class="w-25 p-1 bg-gray-200">block 1</div>
          <div class="w-25 p-1 bg-gray-200">block 2</div>
          <div class="w-25 p-1 bg-gray-200">block 3</div>
          <div class="w-25 p-1 bg-gray-200">block 4</div>
        `;
      break;
      case "grid":
        classname += " grid-column-4 grid-gap-5";
        content = `
          <div class="p-1 bg-gray-200">block 1</div>
          <div class="p-1 bg-gray-200">block 2</div>
          <div class="p-1 bg-gray-200">block 3</div>
          <div class="p-1 bg-gray-200">block 4</div>
        `;
      break;

      case "inline-block": return;
      case "inline-flex": return;
      case "inline-grid": return;
    }

    const output = `<div class="d-block m-0 mb-5 p-5 bg-gray-100">
      <p class="m-0 p-0">.d-${display}</p>
      <div class="${classname} mt-3" style="border: 1px solid currentColor;">
        ${content}
      </div>
    </div>`;

    return output;
  }
);

d.push(`<p class="m-0 px-5 py-2 bg-gray-700 color-white"><em>.inline-block</em>, <em>.inline-flex</em> and <em>.inline-grid</em> are also available.</p>`);


const visibilities = [];
      visibilities.push(`<p><em class="fw-500">.visibility-visible</em>: Show element</p>`);
      visibilities.push(`<p><em class="fw-500">.visibility-hidden</em>: Hide element</p>`);
      visibilities.push(`<p><em class="fw-500">.visibility-$prefix-visible</em>: Show element from a particular breakpoint</p>`);
      visibilities.push(`<p><em class="fw-500">.visibility-$prefix-hidden</em>: Hide element from a particular breakpoint</p>`);

const pointers = [];
      pointers.push(`<p><em class="fw-500">.pointer-events-all</em>: Enable all pointer-events for this element</p>`);
      pointers.push(`<p><em class="fw-500">.pointer-events-none</em>: Disable all pointer-events for this element, and his children. If a child of his has .pointer-events-all, it will received pointer-events.</p>`);


const overflows = [];
      overflows.push(`<p><em class="fw-500">.overflow-$prefix-auto</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-$prefix-hidden</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-$prefix-visible</em></p>`);
      overflows.push(`<p><em class="fw-500">.overflow-$prefix-scroll</em></p>`);

const positions = [];
      positions.push(`<p><em class="fw-500">.position-$prefix-static</em></p>`);
      positions.push(`<p><em class="fw-500">.position-$prefix-fixed</em></p>`);
      positions.push(`<p><em class="fw-500">.position-$prefix-relative</em></p>`);
      positions.push(`<p><em class="fw-500">.position-$prefix-absolute</em></p>`);
      positions.push(`<p><em class="fw-500">.position-$prefix-sticky</em></p>`);

const lists = [];
      lists.push(`
      <p class="fw-700 m-0 p-0">.list-none</p>
      <p class="m-0 mb-3 p-0">Remove list bullet/numbers at the beginning of each &lt;li&gt;</p>

      <ul class="list-none">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>`);

const z = `
  <p class="fw-700 m-0 p-0">.z-$prefix-$value</p>
  <p class="m-0 p-0">Supported values: ${Object.values(theme["z-index"]).join(", ")}</p>
`;

export const display = () => d.join("");
export const list = () => lists.join("");
export const overflow = () => overflows.join("");
export const pointerEvents = () => pointers.join("");
export const position = () => positions.join("");
export const visiblity = () => visibilities.join("");
export const zIndex = () => z;
