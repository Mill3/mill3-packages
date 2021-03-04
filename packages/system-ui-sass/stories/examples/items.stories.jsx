import style from "../../dist/system-ui.css";
import theme from "../../theme.babel.js";
import { Logo } from './index'

export default { title: "Examples/Items" };

export const VerticalResultItem = () => `
  <style>
  .MyComponent {
    border-radius: ${theme.spacers[3]};
  }
  .MyComponent__image {
    border-radius: ${theme.spacers[3]};
    box-shadow: 0 7px 12px rgba(0,0,0,0.25);
  }
  </style>
  <article class="MyComponent d-grid bg-gray-100">
    <figure class="MyComponent__image m-0 box box-square overflow-hidden">
      <img class="box-content w-100" src="https://images.unsplash.com/photo-1614628005755-1bcb44520bda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="unsplash"/>
    </figure>
    <footer class="py-4 px-3">
      <h3 class="fz-lg color-primary m-0">My great product</h3>
      <nav class="d-grid grid-column-2 pt-3">
        <h5 class="fz-sm gray-700 m-0 fw-400">12.99$ CAD</h5>
        <a href="#" class="fz-sm justify-self-end">Buy now!</a>
      </nav>
    </footer>
  </article>
`
