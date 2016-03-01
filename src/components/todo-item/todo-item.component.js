import angular from 'angular'

// Template
import todoItemTemplate from './todo-item.template.html!text'

// Styles
import './todo-item.styles.css!'

// own stuff
import TodoItemController from './todo-item.controller.js'

export default angular.module('todoItemComponent', []).component('todoItem', {
  template: todoItemTemplate,
  controller: TodoItemController,
  bindings: {
    item: '<',
    onDelete: '&'
  }
}).name
