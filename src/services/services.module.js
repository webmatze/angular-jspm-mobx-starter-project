import angular from 'angular'

import dataStoreService from './datastore.service.js'

export default angular.module('test.services', [
  dataStoreService
]).name
