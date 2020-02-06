import BreakpointsObserver from "../dist/index.js";

// change defaults
const BREAKPOINTS_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl"];
const BREAKPOINTS_WIDTH = [0, 125, 555, 992, 1025, 1900];

// const test = new BreakpointsObserver(BREAKPOINTS_ORDER, BREAKPOINTS_WIDTH);

class TestClass extends BreakpointsObserver {
  constructor() {
    super(BREAKPOINTS_ORDER, BREAKPOINTS_WIDTH);
    this.init();
  }

  init() {
    console.log(this);
  }
}

new TestClass();

// console.log(test.getCurrentBreakpoint());

// test.breakpointsEmitter.on("change", () => {
//   console.log(test.getCurrentBreakpoint());
//   console.log(test.isBreakpointDown('lg'));
//   console.log(test.isBreakpointUp('md'));
// });
