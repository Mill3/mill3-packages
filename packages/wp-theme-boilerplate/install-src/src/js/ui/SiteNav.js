import { $, $$ } from "@utils/dom";
import { on, off } from "@utils/listener";

export const SELECTOR = `[data-site-nav]`;
export const CLASSNAME = "--js-site-nav-opened";

class SiteNav {
  constructor(init = false) {
    this.initialized = false;
    this._opened = false;

    this._handleTriggers = this._handleTriggers.bind(this);
    this._onCloseCompleted = this._onCloseCompleted.bind(this);

    init ? this.init() : null;
  }

  init() {
    this.initialized = true;
    this._opened = false;

    this.el = $(SELECTOR);
    this.triggers = [...$$(`[aria-controls="#${this.el.id}"]`)];

    this._bindEvents();
  }
  destroy() {
    this._unbindEvents();

    this.el = null;
    this.triggers = null;

    this._opened = false;
    this.initialized = false;
  }

  _bindEvents() {
    if (this.triggers) on(this.triggers, "click", this._handleTriggers);
  }
  _unbindEvents() {
    if (this.triggers) off(this.triggers, "click", this._handleTriggers);
  }

  open() {
    if (this._opened === true) return;
    this._opened = true;

    document.body.classList.add(CLASSNAME);
    this.el.setAttribute("aria-hidden", false);

    this.triggers.forEach(btn => {
      btn.setAttribute("aria-expanded", true);
      btn.classList.add("is-active");
    });
  }
  close() {
    if (this._opened === false) return;
    this._opened = false;

    this.triggers.forEach(btn => {
      btn.setAttribute("aria-expanded", false);
      btn.classList.remove("is-active");
    });

    this._onCloseCompleted();
  }
  toggle() {
    if (this._opened === true) this.close();
    else this.open();
  }

  _handleTriggers(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.toggle();
  }
  _onCloseCompleted() {
    if (this._opened === true) return;

    document.body.classList.remove(CLASSNAME);
    this.el.setAttribute("aria-hidden", true);
  }

  // getters
  get opened() {
    return this._opened;
  }
}

export default SiteNav;
