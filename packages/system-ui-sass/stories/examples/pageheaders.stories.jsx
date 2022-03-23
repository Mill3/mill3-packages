import style from "../../dist/system-ui.css";
import { IconDummy, IconDummer } from './index'

export default { title: "Examples/PageHeaders" };

export const FullViewport = () => `
  <style>
    @media (min-width: 992px) {
      .MyComponent {
        min-height: 85vh;
      }
    }
    img.object-fit-cover {
      object-fit: cover;
    }
  </style>
  <header class="MyComponent d-grid grid-column-lg-2">
    <aside class="h-100 order-2 order-lg-1 overflow-hidden">
      <img class="w-100 h-100 object-fit-cover" src="https://images.unsplash.com/photo-1614736716982-20773c68c3c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="unsplash"/>
    </aside>
    <aside class="bg-gray-300 p-40 d-grid order-1 order-lg-2">
      <hgroup>
        <h5 class="gray-600 fw-300 m-0">Tagline</h5>
        <h2 class="fz-xxl fw-700 mt-30 lh-none">Long headline to turn your visitors into users</h2>
      </hgroup>
      <footer class="align-self-end d-flex">
        <figure class="m-0 mr-30" style="width: 15vw">
          <img class="w-100" src="https://images.unsplash.com/photo-1614628005755-1bcb44520bda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="unsplash"/>
        </figure>
        <aside class="mt-auto">
          ${IconDummy()}
          <p class="fz-xs w-xl-50">Gorgeous, high-quality video sharing on desktop, mobile, tablet</p>
        </aside>
      </footer>
    </aside>
  </header>

`
