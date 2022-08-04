import style from "../../dist/system-ui.css";
import { IconDummy, IconDummer } from './index'

export default { title: "Examples/Fluid Typography" };

export const FuildHeading = () => `
  <header class="MyComponent d-flex flex-column">
    <h1 class="ff-heading ffz-36 ffz-md-24 ffz-lg-48 m-0">Fluid type title example XS to LG</h1>
    <h1 class="ff-heading ffz-36 m-0">Example XS only</h1>
    <p>Resize browser viewport and see effect. It's important to set a ffz value for each breakpoint, the second example demonstrate what happen with only 1 rule set on element.</p>
  </header>
`
