import debounce from "debounce";
import EventEmitter from "eventemitter3";
import LocomotiveScroll from "locomotive-scroll";

import { modules } from "@modules";
import { $ } from "@utils/dom";

export const SELECTOR = "[data-scroll-container]";
export const SCROLL_DOWN_CLASSNAME = "--js-scroll-down";

const SCROLL_THRESHOLD = 200;
let SINGLETON;

class SiteScroll extends EventEmitter {
  constructor(init = false) {
    super();

    this.initialized = false;
    this.asScrolledDown = false;
    this.el = null;

    SINGLETON = this;

    this._onCall = this._onCall.bind(this);
    this._onScroll = this._onScroll.bind(this);

    init ? this.init() : null;
  }

  get name() {
    return `SiteScroll`;
  }

  static getSingleton() {
    return SINGLETON;
  }

  init() {
    this.initialized = true;
    this.asScrolledDown = false;
    this.el = $(SELECTOR);

    this.scroll = new LocomotiveScroll({
      el: this.el,
      smooth: true,
      repeat: false
    });
    this.scroll.on("call", this._onCall);
    this.scroll.on("scroll", this._onScroll);
  }
  destroy() {
    if (this.scroll) {
      this.scroll.off("call", this._onCall);
      this.scroll.on("scroll", this._onScroll);
      this.scroll.destroy();
    }

    this.el = null;
    this.scroll = null;
    this.initialized = false;
    this.asScrolledDown = false;
  }

  update() {
    if (this.scroll) this.scroll.update();
  }
  start() {
    if (this.scroll) this.scroll.start();
  }
  stop() {
    if (this.scroll) this.scroll.stop();
  }
  scrollTo(target, offset) {
    if (this.scroll) this.scroll.scrollTo(target, offset);
  }

  _onCall(func, direction, obj) {
    if (Array.isArray(func))
      func.forEach(f => this._executeCall(f, direction, obj));
    else this._executeCall(func, direction, obj);
  }
  _executeCall(call, direction, obj) {}
  _onScroll(instance) {
    const { y } = instance.scroll;

    if (y > SCROLL_THRESHOLD) {
      if (this.asScrolledDown === false)
        document.body.classList.add(SCROLL_DOWN_CLASSNAME);
      this.asScrolledDown = true;
    } else {
      if (this.asScrolledDown === true)
        document.body.classList.remove(SCROLL_DOWN_CLASSNAME);
      this.asScrolledDown = false;
    }
  }

  // getter - setter
  get y() {
    return this.scroll ? this.scroll.scroll.instance.scroll.y : 0;
  }
}

export default SiteScroll;
