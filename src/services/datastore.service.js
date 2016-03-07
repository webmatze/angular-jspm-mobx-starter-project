import angular from 'angular'
import {observable} from 'mobx'

export default angular.module('test.services.datastore', []).factory('dataStore', function () {
  return observable({
    title: 'My Todo List',
    items: []
  })
}).name
