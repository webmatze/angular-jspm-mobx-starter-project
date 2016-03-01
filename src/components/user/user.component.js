import angular from 'angular'

// Template
import userTemplate from './user.template.html!text'

// own stuff
import UserController from './user.controller.js'

export default angular.module('userComponent', []).component('user', {
  template: userTemplate,
  controller: UserController,
  bindings: {
    user: '<'
  }
}).name
