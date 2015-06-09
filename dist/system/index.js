System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./hello-world');
  }

  return {
    setters: [],
    execute: function () {}
  };
});