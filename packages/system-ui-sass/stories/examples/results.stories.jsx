import style from "../../dist/system-ui.css";
import theme from "../../theme.babel.js";
import { Logo } from './index'

export default { title: "Examples/Items" };

import { VerticalResultItem } from './items.stories';

export const Results = () => `
  <style>
  .MyResults {

  }
  </style>
  <section class="px-2 px-lg-6">


    <header class="ta-center py-8">
      <h1 class="fw-300 m-0">My great section of products!</h1>
    </header>


    <div class="d-grid grid-column-md-2 grid-column-lg-3 grid-gap-4">
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
      ${VerticalResultItem()}
    </div>

  </section>
`
