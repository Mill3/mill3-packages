import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

export default { title: "Flex" };

const directions = Object.values(theme["flex-direction"]).map(
  direction => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.flex-$prefix-${direction}</p>
    <ul class="d-flex flex-${direction} list-none m-0 p-0">
      <li class="bg-color-primary color-white p-2">Box 1</li>
      <li class="bg-color-primary color-white p-2">Box 2</li>
      <li class="bg-color-primary color-white p-2">Box 3</li>
      <li class="bg-color-primary color-white p-2">Box 4</li>
    </ul>
  </div>`
);

const justifies = Object.entries(theme["justify-content"]).map(
  obj => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.justify-content-$prefix-${obj[0]}</p>
    <ul class="d-flex justify-content-${obj[0]} vh-10 list-none m-0 p-0 bg-gray-200">
      <li><h3 class="m-0 p-0 pr-3">Title</h3></li>
      <li class="bg-color-primary color-white p-2">Box 1</li>
      <li class="bg-color-primary color-white p-2">Box 2</li>
      <li class="bg-color-primary color-white p-2">Box 3</li>
      <li class="bg-color-primary color-white p-2">Box 4</li>
    </ul>
  </div>`
);

const alignmentsItems = Object.entries(theme["align-items"]).map(
  obj => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.align-items-$prefix-${obj[0]}</p>
    <ul class="d-flex align-items-${obj[0]} vh-10 list-none m-0 p-0 bg-gray-200">
      <li><h3 class="m-0 p-0 pr-3">Title</h3></li>
      <li class="bg-color-primary color-white p-2">Box 1</li>
      <li class="bg-color-primary color-white p-2">Box 2</li>
      <li class="bg-color-primary color-white p-2">Box 3</li>
      <li class="bg-color-primary color-white p-2">Box 4</li>
    </ul>
  </div>`
);

const alignmentsContent = Object.entries(theme["align-content"]).map(
  obj => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.align-content-$prefix-${obj[0]}</p>
    <ul class="d-flex flex-wrap align-content-${obj[0]} vh-20 list-none m-0 p-0 bg-gray-200">
      <li><h3 class="m-0 mb-2 p-0 pr-3">Title</h3></li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 1</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 2</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 3</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 4</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 5</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 6</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 7</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 8</li>
    </ul>
  </div>`
);

alignmentsContent.unshift('<p class="m-0 mb-5 p-5 bg-color-primary color-white fs-italic">This property only takes effect on multi-line flexible containers, where flex-flow is set to either wrap or wrap-reverse). <br />A single-line flexible container (i.e. where flex-flow is set to its default value, no-wrap) will not reflect align-content.</p>');

const alignmentsSelf = Object.entries(theme["align-self"]).map(
  obj => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.align-self-$prefix-${obj[0]}</p>
    <ul class="d-flex vh-10 list-none m-0 p-0 bg-gray-200">
      <li><h3 class="m-0 p-0 pr-3">Title</h3></li>
      <li class="bg-color-primary color-white p-2">Box 1</li>
      <li class="bg-color-primary color-white p-2 align-self-${obj[0]}">Box 2</li>
      <li class="bg-color-primary color-white p-2">Box 3</li>
      <li class="bg-color-primary color-white p-2">Box 4</li>
    </ul>
  </div>`
);

const wraps = Object.values(theme["flex-wrap"]).map(
  wrap => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.flex-${wrap}</p>
    <ul class="d-flex flex-${wrap} list-none m-0 p-0 bg-gray-200">
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 1</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 2</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 3</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 4</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 5</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 6</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 7</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2">Box 8</li>
    </ul>
  </div>
  `
);

const grows = Object.values(theme["flex-grow"]).map(
  value => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.flex-grow-${value}</p>
    <ul class="d-flex list-none m-0 p-0 bg-gray-200">
      <li class="bg-color-primary color-white mx-3 mb-2 p-2 flex-grow-0">Grow 0</li>
      <li class="bg-color-primary color-white mx-3 mb-2 p-2 flex-grow-${value}">Grow ${value}</li>
      <li class="bg-color-primary color-white mx-3 mb-2 p-2 flex-grow-2">Grow 2</li>
      <li class="bg-color-primary color-white mx-3 mb-2 p-2 flex-grow-3">Grow 3</li>
    </ul>
  </div>
  `
);

const shrinks = Object.values(theme["flex-grow"]).map(
  value => `
  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.flex-shrink-${value}</p>
    <ul class="d-flex list-none m-0 p-0 bg-gray-200">
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2 flex-shrink-0">Shrink 0</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2 flex-shrink-${value}">Shrink ${value}</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2 flex-shrink-2">Shrink 2</li>
      <li class="w-20 bg-color-primary color-white mx-3 mb-2 p-2 flex-shrink-3">Shrink 3</li>
    </ul>
  </div>
  `
);

const orders = `
  <p class="m-0 mb-5 p-5 bg-color-primary color-white fs-italic">This property also works with CSS Grid.</p>

  <div class="bg-gray-100 m-0 mb-5 p-0 p-5">
    <p class="m-0 mb-3 p-0">.order-$prefix-$value (value from 0 to 5)</p>
    <ul class="d-flex list-none m-0 p-0 bg-gray-200">
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


export const flexDirection = () => directions.join("");
export const justifyContent = () => justifies.join("");
export const alignItems = () => alignmentsItems.join("");
export const alignContent = () => alignmentsContent.join("");
export const alignSelf = () => alignmentsSelf.join("");
export const flexWrap = () => wraps.join("");
export const flexGrow = () => grows.join("");
export const flexShrink = () => shrinks.join("");
export const order = () => orders;
