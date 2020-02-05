import Emitter from "component-emitter";

const BREAKPOINTS_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl"];

class BreakpointsObserver {
  constructor() {
    this.checkBreakpoint = this.checkBreakpoint.bind(this);
    this.breakpointsEmitter = new Emitter();
    this.currentBreakpoint = this.getCurrentBreakpoint();
    this.lastBreakpoint = null;
    window.addEventListener("resize", this.checkBreakpoint);
  }

  get name() {
    return `Breakpoints decorator class`;
  }

  getCurrentBreakpoint() {
    const style = window.getComputedStyle(document.body, ":after");
    return style.getPropertyValue("content").replace(/'|"/g, "");
  }

  checkBreakpoint() {
    this.currentBreakpoint = this.getCurrentBreakpoint();
    if (this.currentBreakpoint !== this.lastBreakpoint) {
      this.lastBreakpoint = this.currentBreakpoint;
      this.announce();
    }
  }

  isBreakpoint(breakpoint) {
    return breakpoint === this.currentBreakpoint;
  }

  isBreakpointDown(breakpoint) {
    return (
      BREAKPOINTS_ORDER.indexOf(this.currentBreakpoint) <
      BREAKPOINTS_ORDER.indexOf(breakpoint)
    );
  }

  isBreakpointUp(breakpoint) {
    return (
      BREAKPOINTS_ORDER.indexOf(this.currentBreakpoint) >=
      BREAKPOINTS_ORDER.indexOf(breakpoint)
    );
  }

  announce() {
    this.breakpointsEmitter.emit("change", this.currentBreakpoint);
  }

  detachBreakpoints() {
    window.removeEventListener("load", this.checkBreakpoint);
    window.removeEventListener("resize", this.checkBreakpoint);
    this.currentBreakpoint = null;
    this.lastBreakpoint = null;
    this.checkBreakpoint = null;
  }
}

export default BreakpointsObserver;
