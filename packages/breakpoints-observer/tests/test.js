import BreakpointsObserver from "../dist/index.js";

// change defaults
const BREAKPOINTS_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl"];
const BREAKPOINTS_WIDTH = [0, 125, 555, 992, 1025, 1900];


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

const test = new BreakpointsObserver();

console.log(test, test.getCurrentBreakpoint());

test.breakpointsEmitter.on("change", () => {
  console.log(test.getCurrentBreakpoint());
  console.log(test.isBreakpointDown('lg'));
  console.log(test.isBreakpointUp('md'));
});
