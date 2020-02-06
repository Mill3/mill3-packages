import Emitter from "component-emitter";
import { css } from "emotion";

const BREAKPOINTS_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl"];
const BREAKPOINTS_WIDTH = [0, 576, 768, 992, 1200, 1441];

class BreakpointsObserver {
  constructor(orders = BREAKPOINTS_ORDER, widths = BREAKPOINTS_WIDTH) {
    this.orders = orders;
    this.widths = widths;

    // first inject CSS in page
    this.injectCSS();

    this._checkBreakpoint = this._checkBreakpoint.bind(this);
    this.breakpointsEmitter = new Emitter();
    this.currentBreakpoint = this.getCurrentBreakpoint();
    this.lastBreakpoint = null;
    window.addEventListener("resize", this._checkBreakpoint);
  }

  get name() {
    return `Breakpoints decorator class`;
  }

  injectCSS() {
    const body = document.body;

    const breakpointsRules = css`
      &:after {
        display: none;
        content: "xs";
        @media (min-width: ${this.widths[1]}px) {
          content: "sm";
        }
        @media (min-width: ${this.widths[2]}px) {
          content: "md";
        }
        @media (min-width: ${this.widths[3]}px) {
          content: "lg";
        }
        @media (min-width: ${this.widths[4]}px) {
          content: "xl";
        }
        @media (min-width: ${this.widths[5]}px) {
          content: "xxl";
        }
      }
    `;

    body.classList.add(breakpointsRules);
  }

  getCurrentBreakpoint() {
    const style = window.getComputedStyle(document.body, ":after");
    return style.getPropertyValue("content").replace(/'|"/g, "");
  }

  isBreakpoint(breakpoint) {
    return breakpoint === this.currentBreakpoint;
  }

  isBreakpointDown(breakpoint) {
    return (
      this.orders.indexOf(this.currentBreakpoint) <
      this.orders.indexOf(breakpoint)
    );
  }

  isBreakpointUp(breakpoint) {
    return (
      this.orders.indexOf(this.currentBreakpoint) >=
      this.orders.indexOf(breakpoint)
    );
  }

  detachBreakpoints() {
    window.removeEventListener("load", this._checkBreakpoint);
    window.removeEventListener("resize", this._checkBreakpoint);
    this.currentBreakpoint = null;
    this.lastBreakpoint = null;
    this._checkBreakpoint = null;
  }

  _checkBreakpoint() {
    this.currentBreakpoint = this.getCurrentBreakpoint();
    if (this.currentBreakpoint !== this.lastBreakpoint) {
      this.lastBreakpoint = this.currentBreakpoint;
      this._announce();
    }
  }

  _announce() {
    this.breakpointsEmitter.emit("change", this.currentBreakpoint);
  }
}

export default BreakpointsObserver;
