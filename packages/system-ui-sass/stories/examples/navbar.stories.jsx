import style from "../../dist/system-ui.css";
import theme from "../../theme.babel.js";
import { Logo } from './index'

export default { title: "Examples/NavBars" };

export const SimpleHorizontal = () => `
  <header class="d-grid grid-column-2 grid-column-md-3 w-100 p-2 bg-gray-300">
    <nav class="align-self-start d-none d-md-flex align-items-center h-100">
      <a href="#" class="mr-2">Item 1</a>
      <a href="#" class="mr-2">Item 2</a>
      <a href="#" class="mr-2">Item 3</a>
      <a href="#" class="mr-2">Item 4</a>
    </nav>
    <div class="justify-self-md-center">
      ${Logo()}
    </div>
    <nav class="justify-self-end d-flex h-100 align-items-center">
      <button>Button</button>
      <button class="d-md-none ml-2">Burger</button>
    </nav>
  </header>
`
