import barba from "@barba/core";
import domready from "domready";

import "@core/barba";
import { actions as moduleActions } from "@modules";
import transitions from "@transitions";
import views from "@views";
import SiteHeader from "@ui/SiteHeader";
import SiteNav from "@ui/SiteNav";
import SiteScroll from "@ui/SiteScroll";

// import main styles
import "../scss/App.scss";

/*
 * Main app
 */
class App {
  constructor() {
    this.init();
  }

  init() {
    // init ui
    this.siteHeader = new SiteHeader(false);
    this.siteNav = new SiteNav(false);
    //this.siteScroll = new SiteScroll(false);

    // triggered before leave animation
    barba.hooks.beforeLeave(() => {
      moduleActions("stop");

      //this.siteScroll.stop();
      this.siteNav.close();
    });

    // triggered after leave transition
    barba.hooks.afterLeave(() => {
      moduleActions("destroy");

      this.siteHeader.destroy();
      this.siteNav.destroy();
    });

    // triggered just before once transition
    barba.hooks.once(() => {
      // init modules
      moduleActions("init");

      this.siteHeader.init();
      this.siteNav.init();
      //this.siteScroll.init();
    });

    // triggered just before enter transition
    barba.hooks.enter(() => {
      // destroy previous instance of scroller
      this.siteScroll.destroy();

      // init modules
      moduleActions("init");

      this.siteHeader.init();
      this.siteNav.init();
      //this.siteScroll.init();
    });

    // init barba
    barba.init({
      debug: process.env.NODE_ENV === "development",
      logLevel: 4,
      sync: false,
      timeout: 5000,
      prevent: ({ el }) => (hasAdminBar() ? true : el.classList && el.classList.contains("ab-item")),
      transitions: transitions,
      views: views
    });
  }
}

domready(() => {
  setTimeout(() => new App(), process.env.NODE_ENV === "development" ? 500 : 0);
});
