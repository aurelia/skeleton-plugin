System.register([], function (_export) {
  _export('install', install);

  function install(aurelia) {
    aurelia.globalizeResources('./hello-world');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});