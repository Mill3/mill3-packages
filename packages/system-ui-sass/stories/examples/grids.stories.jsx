import style from "../../dist/system-ui.css";
import theme from "../../theme.babel.js";
import { Logo } from './index'

import { VerticalResultItem } from './items.stories'

export default { title: "Examples/Grids" };

export const AdvancedGridLayout = () => `
  <style>
  .MyComponent {
  }
  .MyComponent__cell:nth-child(1)  {
    grid-row: 1 / span 2;
  }

  .MyComponent__cell:nth-child(4) {
    grid-column: 1 / span 2;
  }

  @media (min-width: 992px) {
    .MyComponent__cell:nth-child(4) {
      font-weight: bold;
      grid-column: 2 / span 2;
    }
  }
  </style>
  <section class="py-4 px-2 px-lg-6">
    <div class="MyComponent d-grid grid-column-2 grid-column-lg-3 grid-gap-2">
      <span class="MyComponent__cell bg-color-primary color-white p-3 d-grid grid-column-2">
        <span class="cell_sub">Sub grid cell 1</span>
        <span class="cell_sub justify-self-end">Sub grid cell 2</span>
        <span class="cell_sub align-self-end">Sub grid cell 3</span>
        <span class="cell_sub align-self-end justify-self-end">Sub grid cell 4</span>
      </span>
      <span class="MyComponent__cell bg-gray-100 p-3">Cell 2</span>
      <span class="MyComponent__cell bg-gray-100 p-3">Cell 3</span>
      <span class="MyComponent__cell bg-gray-100 p-3">Cell 4 <span class="d-none d-lg-inline">- now I'm spaning 2 grid column, from column 2</span></span>
    </div>
  </section>
`

export const CrossGridLayout = () => `
  <style>

  .image-as-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .MyCrossGridLayout {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
  }

  .MyCrossGridLayout__cell:nth-child(1)  {
    grid-column: 1 / span 2;
  }

  @media (min-width: 992px) {
    .MyCrossGridLayout__cell:nth-child(1)  {
      grid-column: 1 / span 3;
    }
  }

  @media (max-width: 992px) {
    .MyCrossGridLayout__cell:nth-child(2) {
      grid-column: 1 / span 2;
    }
  }


  </style>
  <section class="py-4 px-2 px-lg-6 bg-gray-500">
    <div class="MyCrossGridLayout d-sm-grid grid-column-2 grid-column-lg-3 grid-gap-3">
      <header class="MyCrossGridLayout__cell d-block overflow-hidden position-relative vh-60">
        <hgroup class="position-absolute b-0 l-0 z-1000 w-100 w-xl-70 p-6 color-white">
          <h1 class="m-0 fw-300 ff-serif">My kinda complex grid layout</h1>
          <h4 class="mt-2 mb-0 fw-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quia modi vel delectus? Quidem, quam. Esse facilis alias doloremque consequatur veritatis enim ullam deserunt, sed, corrupti repellat eum aliquam provident?</h4>
        </hgroup>
        <img class="image-as-background" src="https://images.unsplash.com/photo-1614769507210-bf9482e2f32f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="unsplash"/>
      </header>
      <div class="MyCrossGridLayout__cell py-4 d-flex flex-column justify-content-between gray-700">
        <h3>Section title</h3>
        <footer class="w-lg-75">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat, fugiat esse, aut repudiandae minima pariatur dolores eveniet unde nulla doloribus incidunt non obcaecati modi cupiditate labore, aliquid maiores atque.</p>
          <p class="mb-0"><a href="#" class="fw-700">Read me</a></p>
        </footer>
      </div>
      <div class="MyCrossGridLayout__cell py-3">${VerticalResultItem()}</div>
      <div class="MyCrossGridLayout__cell py-3">${VerticalResultItem()}</div>
    </div>
  </section>
`
