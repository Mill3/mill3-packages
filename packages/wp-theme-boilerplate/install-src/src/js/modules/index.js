/* eslint-disable no-empty */
import TemplateModule from "./TemplateModule";

export const modules = {
  TemplateModule: new TemplateModule(false)
};

export const actions = (type = "init") => {
  Object.keys(modules).forEach(m => {
    if (type === `init`) {
      try {
        modules[m].initialized !== true ? modules[m].init() : null;
      } catch (e) {
        console.error(e);
      }
    }

    if (type === `reverse`) {
      try {
        modules[m].reverse();
      } catch (e) {
        console.error(e);
      }
    }

    if (type === `restart`) {
      try {
        modules[m].restart();
      } catch (e) {
        console.error(e);
      }
    }

    if (type === `stop`) {
      try {
        modules[m].stop();
      } catch (e) {
        console.error(e);
      }
    }

    if (type === `destroy`) {
      try {
        modules[m].destroy();
      } catch (e) {
        console.error(e);
      }
    }
  });
};
