import angular from 'angular'
import ngMaterial from 'angular-material'

//CSS
import 'angular-material/angular-material.css!'

import 'components/test/test.component.js'

angular.module('testapp', ['ngMaterial', 'testComponent'])
