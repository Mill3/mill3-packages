import style from "../dist/system-ui.css";
import theme from "../theme.babel.js";

import { lorem } from "./index.stories";

export default { title: "Texts" };

export const headings = () =>
  Object.entries(theme.heading)
    .map(obj => `<${obj[0]}>Heading ${obj[0]}</${obj[0]}>`)
    .join("");

export const fontWeights = () =>
  Object.entries(theme["font-weight"])
    .map(obj => `<h1 class="fw-${obj[1]}">.fw-${obj[1]}</h1>`)
    .join("");

export const fontStyle = () =>
  Object.entries(theme["font-style"])
    .map(obj => `<p class="heading-h1 fs-${obj[1]}">.fs-${obj[1]}</p>`)
    .join("");

export const fontSize = () =>
  Object.entries(theme["font-size"])
    .map(obj => `<p class="fz-${obj[0]}">.fz-${obj[0]}</p>`)
    .join("");

export const fontFamily = () =>
  Object.entries(theme["font-family"])
    .map(obj => `<p class="heading-h1 ff-${obj[0]}">.ff-${obj[0]}</p>`)
    .join("");

export const lineHeight = () =>
  Object.entries(theme["line-height"])
    .map(
      obj =>
        `<p class="mb-5 lh-${obj[0]}"><strong class="ff-mono">.lh-${obj[0]}</strong> ${lorem}</p>`
    )
    .join("");

export const textAlign = () =>
  Object.entries(theme["text-align"])
    .map(
      obj =>
        `<p class="mb-5 ta-${obj[1]}"><strong class="ff-mono">.ta-${obj[1]}</strong> ${lorem}</p>`
    )
    .join("");

export const textTransform = () =>
  Object.entries(theme["text-transform"])
    .map(obj => `<p class="heading-h1 tt-${obj[1]}">.tt-${obj[1]}</p>`)
    .join("");

export const textDecoration = () =>
  Object.entries(theme["text-decoration"])
    .map(obj => `<p class="heading-h1 td-${obj[1]}">.td-${obj[1]}</p>`)
    .join("");

export const baseElements = () => `
  <div>
    <h1>heading h1</h1>
    <h2>heading h2</h2>
    <h3>heading h3</h3>
    <h4>heading h4</h4>
    <h5>heading h5</h5>
    <h6>heading h6</h6>
    <p>${lorem}</p>
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>
    <ol>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ol>
  </div>
`;
