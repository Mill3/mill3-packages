import { $ } from "@utils/dom";

export const hasAdminBar = () => {
  $("body").classList.contains("admin-bar");
};

export default {
  hasAdminBar
};
