import angular from 'angular'

import * as testComponent from './test/test.component.js'

export let name = 'test.components'

angular.module(name, [
    testComponent.name
])
