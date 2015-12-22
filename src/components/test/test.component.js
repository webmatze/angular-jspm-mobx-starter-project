import angular from 'angular'

//Template
import testTemplate from './test.template.html!text'

//own stuff
import TestController from './test.controller.js'

export let name = 'testComponent'

angular.module(name, []).directive('myTest', function () {
  return {
    restrict: 'E',
    scope: {},
    template: testTemplate,
    controller: TestController,
    controllerAs: 'test',
    bindToController: {
      name: '@'
    }
  }
})

