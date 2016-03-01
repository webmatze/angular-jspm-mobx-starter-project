import angular from 'angular'

import todoListComponent from './todo-list/todo-list.component.js'
import todoItemComponent from './todo-item/todo-item.component.js'
import dblClickEditComponent from './dblclick-edit/dblclick-edit.component.js'

export default angular.module('test.components', [
  todoListComponent,
  todoItemComponent,
  dblClickEditComponent
]).name
