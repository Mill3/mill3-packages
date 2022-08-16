import style from "../../dist/system-ui.css";

import { VerticalResultItem } from './items.stories'

export default { title: "Examples/Grids" };

export const AdvancedGridLayout = () => `
  <style>
  </style>
  <section class="pt-30 pb-30 pl-10 pl-lg-50 pr-10 pr-lg-50">
    <div class="MyComponent d-grid grid-column-2 grid-column-lg-3 grid-gap-10">
      <div class="row-start-1 row-end-span-2 bg-color-primary color-white p-20 d-grid grid-gap-10 grid-gap-md-0 grid-column-sm-2">
        <div class="cell_sub">Sub grid cell 1</div>
        <div class="cell_sub justify-self-sm-end">Sub grid cell 2</div>
        <div class="cell_sub align-self-end">Sub grid cell 3</div>
        <div class="cell_sub align-self-end justify-self-sm-end">Sub grid cell 4</div>
      </div>
      <div class="MyComponent__cell bg-gray-100 p-20">Cell 2</div>
      <div class="MyComponent__cell bg-gray-100 p-20">Cell 3</div>
      <div class="col-start-1 col-end-limit col-start-lg-2 bg-gray-100 p-20">Cell 4 <span class="d-none d-lg-inline">- now I'm spaning 2 grid column, from column 2</span></div>
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
  </style>
  <section class="p-md-30 p-lg-50 bg-gray-500">
    <div class="d-sm-grid grid-column-2 grid-column-lg-3 grid-gap-20 overflow-hidden">

      <header class="col-start-1 col-end-2 col-end-span-lg-3 d-block overflow-hidden position-relative vh-100 vh-md-50">
        <hgroup class="position-absolute b-0 l-0 z-1000 w-100 w-xl-50 p-20 p-lg-50 color-white">
          <h1 class="fz-3xl fz-md-5xl fz-xl-6xl fw-300 ff-heading m-0">My kinda complex grid layout</h1>
          <h4 class="mt-10 mb-0 fw-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quia modi vel delectus? Quidem, quam. Esse facilis alias doloremque consequatur veritatis enim ullam deserunt, sed, corrupti repellat eum aliquam provident?</h4>
        </hgroup>

        <img class="image-as-background" src="https://images.unsplash.com/photo-1614769507210-bf9482e2f32f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="unsplash"/>
      </header>

      <div class="col-start-1 col-end-2 col-end-span-lg-1 pl-20 pl-md-0 pr-20 pr-md-0 pt-30 pb-30 d-flex flex-column justify-content-between gray-700">
        <h3>Section title</h3>
        <footer class="w-lg-50">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat, fugiat esse, aut repudiandae minima pariatur dolores eveniet unde nulla doloribus incidunt non obcaecati modi cupiditate labore, aliquid maiores atque.</p>
          <p class="mb-0"><a href="#" class="fw-700">Read me</a></p>
        </footer>
      </div>

      <div class="MyCrossGridLayout__cell pl-20 pl-md-0 pr-20 pl-md-0 pt-md-20 pb-20">${VerticalResultItem()}</div>
      <div class="MyCrossGridLayout__cell pl-20 pl-md-0 pr-20 pl-md-0 pt-md-20 pb-20">${VerticalResultItem()}</div>
    </div>
  </section>
`
