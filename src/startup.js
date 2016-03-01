import angular from 'angular'

// CSS
import 'angular-material/angular-material.css!'

// modules
import ngMaterial from 'angular-material'
import componentsModule from 'components/components.module.js'

angular.module('testapp', [
  ngMaterial,
  componentsModule
])
