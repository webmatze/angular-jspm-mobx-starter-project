import angular from 'angular'
import ngMaterial from 'angular-material'

//CSS
import 'angular-material/angular-material.css!'

import * as componentsModule from 'components/components.module.js'

angular.module('testapp', [
    'ngMaterial',
    componentsModule.name
])
