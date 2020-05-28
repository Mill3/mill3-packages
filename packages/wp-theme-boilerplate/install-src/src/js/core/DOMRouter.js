class DOMRouter {
  constructor(controllers) {
    this.controllers = controllers === undefined ? {} : controllers;
  }

  /*
   * Executes the given action associated with the considered controller.
   * @param {string} controller - The codename of the controller.
   * @param {string} action - The name of the action to execute. Default is set to init.
   */
  execAction(controller, action = `init`) {
    if (
      controller !== `` &&
      this.controllers[controller] &&
      typeof this.controllers[controller][action] == `function`
    ) {
      this.controllers[controller][action]();
    }
  }

  /*
   * Initializes the router object.
   */
  init() {
    if (document.body) {
      // get visible and last data-controller element
      // :last is important because 2 could be in page between XHR page transitions
      var $body = $(document.body),
        $el = $body
          .find(`[data-controller]`)
          .not(`[data-initialized]`)
          .filter(`:last`),
        controller = $el.attr(`data-controller`),
        action = $el.attr(`data-action`);

      if (controller) {
        // set element as initialized
        $el.attr(`data-initialized`, 1);

        // execute controller
        this.execAction(controller, action);
      }
    }
  }
}

export default DOMRouter;
