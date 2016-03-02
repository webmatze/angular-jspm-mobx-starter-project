import {observable} from 'mobx'

export default function TodoListController () {
  this.dataStore = observable({
    title: 'My Todo List',
    newItem: {
      name: '',
      finished: false
    },
    items: [],
    unfinishedItems: function () {
      return this.items.filter((item) => { return !item.finished }).length
    }
  })
  this.dataStore.items.observe((change) => {
    console.log(change.object.peek())
  }, true)
  this.addItem = function (item) {
    this.dataStore.items.push(Object.assign({}, item))
    this.dataStore.newItem.name = ''
    this.dataStore.newItem.finished = false
  }
  this.deleteItem = function (item) {
    this.dataStore.items.remove(item)
  }
  this.setTitle = function (text) {
    this.dataStore.title = text
  }
  this.archive = function () {
    let unarchived = this.dataStore.items.filter((item) => { return !item.finished })
    this.dataStore.items.replace(unarchived)
  }
}
