define(["exports"], function (exports) {
  "use strict";

  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function install(aurelia) {
    aurelia.globalizeResources("./hello-world");
  }
});