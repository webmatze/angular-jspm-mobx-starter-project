import angular from 'angular'

export default angular.module('autofocusDirective', []).directive('autofocus', function () {
  return {
    restrict: 'A',
    controller: function ($element) {
      this.$onInit = function () {
        $element[0].focus()
      }
    }
  }
}).name
