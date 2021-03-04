import style from "../../dist/system-ui.css";
import { IconDummy, IconDummer } from './index'

export default { title: "Examples/Slices" };

export const HorizontalSimple = () => `
  <style>
    .MyComponent {
      // nothing to do..
    }
    .MyComponent__image {
      border-radius: 12px;
    }
  </style>
  <div class="bg-gray-300">
    <section class="MyComponent d-grid grid-column-lg-2 grid-gap-4 grid-gap-lg-8 px-4 px-xl-10 py-6">
      <aside class="MyComponent__content d-grid flex-column">
        <header>
          <h5 class="gray-500 m-0">Tagline</h5>
          <h2 class="fz-xxl fw-300 mt-4 lh-none">Long headline to turn your visitors into users</h2>
        </header>
        <footer class="align-self-end d-grid grid-column-2 grid-gap-3">
          <aside>
            <figure class="m-0">
              ${IconDummer()}
              <p class="fz-xs w-xl-70">Gorgeous, high-quality video sharing on desktop, mobile, tablet</p>
            </figure>
          </aside>
          <aside>
            <figure class="m-0">
              ${IconDummy()}
              <p class="fz-xs w-xl-70">Gorgeous, high-quality video sharing on desktop, mobile, tablet</p>
            </figure>
          </aside>
        </footer>
      </aside>
      <aside class="MyComponent__image overflow-hidden d-flex align-items-center justify-content-center">
        <img class="w-100" src="https://images.unsplash.com/photo-1614771161235-5f761f2c65f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80" alt="unsplash"/>
      </aside>
    </section>
  </div>
`
