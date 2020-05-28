import barba from "@barba/core";

import { html } from "@utils/dom";
import { sleep } from "@utils/sleep";

const parser = new DOMParser();

export const updateBodyClass = html => {
  const source = parser.parseFromString(html, "text/html");
  const classNames = source.querySelector("body").classList;

  // apply new classList to body
  document.body.classList = classNames;
};

// before leave transition, add a special classname to html
barba.hooks.beforeLeave(() => {
  html.classList.add("--js-barba");
});

// before enter transition, remove old container and update body classnames
barba.hooks.beforeEnter(data => {
  barba.transitions.remove(data);
  updateBodyClass(data.next.html);
});

// after transition, remove special classname from html + inject and eval scripts
barba.hooks.after(() => {
  // remove special classname
  html.classList.remove("--js-barba");

  // parse source
  const source = parser.parseFromString(next.html, "text/html");

  // Find script in source and eval() any text values as JS scripts,
  // this is for WP plugins like Gravity Forms injecting inline scripts.
  source
    .querySelector("body")
    .querySelectorAll("script:not([type='text/html'])")
    .forEach(script => {
      if (script.text) {
        try {
          eval(script.text);
        } catch (error) {
          console.error("error:", error);
        }
      }
    });

  return sleep(0);
});

export default {
  updateBodyClass
};
