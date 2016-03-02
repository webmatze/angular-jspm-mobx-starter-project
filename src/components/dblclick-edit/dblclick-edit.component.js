import angular from 'angular'

// Template
import dblClickEditTemplate from './dblclick-edit.template.html!text'

// own stuff
import DblClickEditController from './dblclick-edit.controller.js'

export default angular.module('dblClickEditComponent', []).component('dblClickEdit', {
  template: dblClickEditTemplate,
  controller: DblClickEditController,
  bindings: {
    text: '<',
    onChange: '&'
  }
}).name
