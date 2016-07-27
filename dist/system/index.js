'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./hello-world');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});