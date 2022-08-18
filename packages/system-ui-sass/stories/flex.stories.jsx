import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Flex" };

import { order as order_story } from "./grid.stories.jsx"

const directions = Object.values(theme["flex-direction"]).map(
  (direction) => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.flex-${direction}</pre>
    <ul class="d-flex flex-${direction} list-none m-0 p-0 grid-gap-10">
      <li class="bg-gray-400 color-white p-10">1</li>
      <li class="bg-gray-500 color-white p-10">2</li>
      <li class="bg-gray-600 color-white p-10">3</li>
      <li class="bg-gray-700 color-white p-10">4</li>
    </ul>
  </div>`
);

const justifies = Object.entries(theme["justify-content"]).map(
  obj => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.justify-content-${obj[0]}</pre>
    <ul class="d-flex justify-content-${obj[0]} list-none m-0 p-0 bg-gray-400 grid-gap-10">
      <li class="bg-color-primary color-white p-10">1</li>
      <li class="bg-color-primary color-white p-10">2</li>
      <li class="bg-color-primary color-white p-10">3</li>
      <li class="bg-color-primary color-white p-10">4</li>
    </ul>
  </div>`
);

const alignmentsItems = Object.entries(theme["align-items"]).map(
  obj => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.align-items-${obj[0]}</pre>
    <ul class="d-flex align-items-${obj[0]} list-none m-0 p-0 bg-gray-400 grid-gap-10" style="height: 20vh;">
      <li class="bg-color-primary color-white p-10">1</li>
      <li class="bg-color-primary color-white p-10">2</li>
      <li class="bg-color-primary color-white p-10">3</li>
      <li class="bg-color-primary color-white p-10">4</li>
    </ul>
  </div>`
);

const alignmentsContent = Object.entries(theme["align-content"]).map(
  obj => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.align-content-${obj[0]}</pre>
    <ul class="d-flex flex-wrap align-content-${obj[0]} vh-20 list-none m-0 p-0 bg-gray-400 lh-none grid-gap-10" style="height: 20vh;">
      <li class="bg-color-primary color-white p-10">1</li>
      <li class="bg-color-primary color-white p-10">2</li>
      <li class="bg-color-primary color-white p-10">3</li>
      <li class="bg-color-primary color-white p-10">4</li>
      <li class="bg-color-primary color-white p-10">5</li>
      <li class="bg-color-primary color-white p-10">6</li>
      <li class="bg-color-primary color-white p-10">7</li>
      <li class="bg-color-primary color-white p-10">8</li>
    </ul>
  </div>`
);

alignmentsContent.unshift('<p class="m-0 mb-40 p-40 bg-gray-600 color-white">This property only takes effect on multi-line flexible containers, where flex-flow is set to either wrap or wrap-reverse).<br /><br />A single-line flexible container (i.e. where flex-flow is set to its default value, no-wrap) will not reflect align-content.</p>');

const alignmentsSelf = Object.entries(theme["align-self"]).map(
  obj => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <ul class="d-flex list-none m-0 p-0 bg-gray-400 grid-gap-10" style="height: 20vh;">
      <li class="bg-color-primary color-white p-10">1</li>
      <li class="align-self-${obj[0]}"><pre class="m-0">.align-self-${obj[0]}</pre></li>
      <li class="bg-color-primary color-white p-10">2</li>
      <li class="bg-color-primary color-white p-10">3</li>
    </ul>
  </div>`
);

const wraps = Object.values(theme["flex-wrap"]).map(
  wrap => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.flex-${wrap}</pre>
    <ul class="d-flex flex-${wrap} list-none m-0 p-0 bg-gray-400 grid-gap-10">
      <li class="w-50 bg-color-primary color-white p-10">1</li>
      <li class="w-50 bg-color-primary color-white p-10">2</li>
      <li class="w-50 bg-color-primary color-white p-10">3</li>
      <li class="w-50 bg-color-primary color-white p-10">4</li>
      <li class="w-50 bg-color-primary color-white p-10">5</li>
      <li class="w-50 bg-color-primary color-white p-10">6</li>
      <li class="w-50 bg-color-primary color-white p-10">7</li>
      <li class="w-50 bg-color-primary color-white p-10">8</li>
    </ul>
  </div>
  `
);

const grows = Object.values(theme["flex-grow"]).map(
  value => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.flex-grow-${value}</pre>
    <ul class="d-flex list-none m-0 p-0 bg-gray-400 grid-gap-10">
      <li class="bg-gray-600 color-white p-10 flex-grow-0">.flex-grow-0</li>
      <li class="bg-color-primary color-white p-10 flex-grow-${value}">.flex-grow-${value}</li>
      <li class="bg-gray-600 color-white p-10 flex-grow-2">.flex-grow-2</li>
      <li class="bg-gray-600 color-white p-10 flex-grow-3">.flex-grow-3</li>
    </ul>
  </div>
  `
);

const shrinks = Object.values(theme["flex-grow"]).map(
  value => `
  <div class="bg-gray-200 m-0 mb-40 p-10">
    <pre class="m-0 mb-10">.flex-shrink-${value}</pre>
    <ul class="d-flex list-none m-0 p-0 bg-gray-400 grid-gap-10">
      <li class="w-50 bg-gray-600 color-white p-10 flex-shrink-0">.flex-shrink-0</li>
      <li class="w-50 bg-color-primary color-white p-10 flex-shrink-${value}">.flex-shrink-${value}</li>
      <li class="w-50 bg-gray-600 color-white p-10 flex-shrink-2">.flex-shrink-2</li>
      <li class="w-50 bg-gray-600 color-white p-10 flex-shrink-3">.flex-shrink-3</li>
    </ul>
  </div>
  `
);


export const flexDirection = () => directions.join("");
export const justifyContent = () => justifies.join("");
export const alignItems = () => alignmentsItems.join("");
export const alignContent = () => alignmentsContent.join("");
export const alignSelf = () => alignmentsSelf.join("");
export const flexWrap = () => wraps.join("");
export const flexGrow = () => grows.join("");
export const flexShrink = () => shrinks.join("");
export const order = order_story;
