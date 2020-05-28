import anime from "animejs";
import imagesLoaded from "imagesloaded";

import { $ } from "@utils/dom";

class FadeTransition {
  constructor() {
    this.name = "fade";

    this._imagesLoaded = false;
    this._onImagesLoaded = this._onImagesLoaded.bind(this);
  }

  beforeOnce({ next }) {
    this._imagesLoaded = false;

    // preload images from next container before once transition
    return new Promise(resolve => {
      const imgLoad = imagesLoaded(next.container);
      imgLoad.once("always", () => resolve);
    });
  }
  beforeLeave({ next }) {
    this._imagesLoaded = false;

    // preload images from next container during leave transition
    // do not wait to images preloading to finish to start leave transition
    this.imgLoad = imagesLoaded(next.container);
    this.imgLoad.once("always", this._onImagesLoaded);
  }
  beforeEnter() {
    if (this._imagesLoaded === true || !this._imagesLoaded) return;

    // wait until images are loaded
    return new Promise(resolve => this.imgLoad.once("always", () => resolve));
  }

  once({ next }) {
    return new Promise(resolve => {
      anime({
        targets: next.container,
        opacity: [0, 1],
        duration: 1000,
        delay: 500,
        easing: "linear",
        complete: () => resolve()
      });
    });
  }
  leave({ current }) {
    return new Promise(resolve => {
      anime({
        targets: current.container,
        opacity: 0,
        duration: 1000,
        easing: "linear",
        complete: () => resolve()
      });
    });
  }
  enter({ next }) {
    return new Promise(resolve => {
      anime({
        targets: next.container,
        opacity: [0, 1],
        duration: 1000,
        easing: "linear",
        complete: () => resolve()
      });
    });
  }

  _onImagesLoaded() {
    this._imagesLoaded = true;
  }
}

export default FadeTransition;
