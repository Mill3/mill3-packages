// https://stackoverflow.com/a/56531945/519240
export const innerDimensions = node => {
  var computedStyle = getComputedStyle(node);

  let width = node.clientWidth; // width with padding
  let height = node.clientHeight; // height with padding

  height -=
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom);
  width -=
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  return { height, width };
};

export const $ = (query, target = document) => target.querySelector(query);
export const $$ = (query, target = document) => target.querySelectorAll(query);
export const rect = el => el.getBoundingClientRect();
export const html = document.documentElement;

export default {
  innerDimensions,
  $,
  $$,
  rect,
  html
};
