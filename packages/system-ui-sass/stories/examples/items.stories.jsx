import style from "../../dist/system-ui.css";
import { Logo } from './index'

export default { title: "Examples/Items" };

export const VerticalResultItem = () => `
  <style>
  .MyComponent {
    border-radius: 20px;
  }
  .MyComponent__image {
    border-radius: 20px;
    box-shadow: 0 7px 12px rgba(0,0,0,0.25);
  }
  </style>
  <article class="MyComponent d-grid bg-gray-100">
    <figure class="MyComponent__image m-0 box box-square overflow-hidden">
      <img class="box-content w-100" src="https://images.unsplash.com/photo-1614679369285-a7bbf7174bd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="unsplash"/>
    </figure>
    <footer class="pt-30 pb-30 pl-20 pr-20">
      <h3 class="fz-lg color-primary m-0">My great product</h3>
      <nav class="d-grid grid-column-2 pt-20">
        <h5 class="fz-sm gray-700 m-0 fw-400">12.99$ CAD</h5>
        <a href="#" class="fz-sm justify-self-end">Buy now!</a>
      </nav>
    </footer>
  </article>
`

export const Resized = () => `
  <div class="w-50">
    ${VerticalResultItem()}
  </div>
`

export const ItemsGrid = () => `
  <style>
  .MyResults {
  }
  </style>
  <section class="pl-10 pr-10 pl-lg-50 pr-lg-50">
    <header class="ta-center pt-90 pb-90">
      <h4 class="gray-500 mt-0 mb-20">Tag line!</h4>
      <h1 class="fz-5xl color-primary fw-300 m-0 tt-uppercase">My great section of products!</h1>
    </header>
    <div class="d-grid grid-column-md-2 grid-column-lg-3 grid-gap-30">
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
    </div>
  </section>
`
