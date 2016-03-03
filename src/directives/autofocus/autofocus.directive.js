import angular from 'angular'

export default angular.module('autofocusDirective', []).directive('autofocus', function () {
  return {
    restrict: 'A',
    controller: function ($element, $timeout) {
      this.$onInit = function () {
        $timeout(function () {
          $element.focus()
        }, 50)
        $element.on('focus', function () {
          this.select()
        })
      }
    }
  }
}).name
