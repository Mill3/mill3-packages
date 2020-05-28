import Module from "./Module";
import { $$ } from "@utils/dom";

export const SELECTOR = `[data-my-module-name]`;

class TemplateModule extends Module {
  constructor(init = false) {
    super();

    this.initialized = false;
    this.items = null;

    init ? this.init() : null;
  }

  init() {
    // set initialized
    this.initialized = true;
    this.items = [...$$(SELECTOR)].map(el => new TemplateModuleItem(el));
  }

  // use it only if required, otherwise don't override this method
  //reverse() {}

  restart() {
    this.destroy();
    this.init();
  }

  // use it only if required, otherwise don't override this method
  //stop() {}

  destroy() {
    if (this.items) this.items.forEach(el => el.destroy());

    this.initialized = false;
    this.items = null;
  }
}

class TemplateModuleItem {
  constructor(el) {
    this.el = el;

    this.init();
  }

  init() {
    this._bindEvents();
  }
  destroy() {
    this._unbindEvents();

    this.el = null;
  }

  _bindEvents() {}
  _unbindEvents() {}
}

export default TemplateModule;
