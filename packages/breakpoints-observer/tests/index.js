import BreakpointsObserver from "../dist/index.js";

// change defaults
const BREAKPOINTS_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl"];
const BREAKPOINTS_WIDTH = [0, 125, 555, 992, 1025, 1900];

const test = new BreakpointsObserver(BREAKPOINTS_ORDER, BREAKPOINTS_WIDTH);

console.log(test);
