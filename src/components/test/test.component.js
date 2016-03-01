import angular from 'angular'

// Template
import testTemplate from './test.template.html!text'

// own stuff
import TestController from './test.controller.js'

export default angular.module('testComponent', []).component('myTest', {
  template: testTemplate,
  controller: TestController,
  bindings: {
    name: '@'
  }
}).name
