import angular from 'angular'

import testComponent from './test/test.component.js'
import userComponent from './user/user.component.js'

export default angular.module('test.components', [
  testComponent,
  userComponent
]).name
