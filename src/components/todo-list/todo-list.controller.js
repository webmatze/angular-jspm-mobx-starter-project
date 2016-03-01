import {observable} from 'mobx'

export default function TodoListController () {
  this.dataStore = observable({
    newItem: {
      name: '',
      finished: false
    },
    items: [],
    finishedItems: function () {
      return this.items.filter((item) => { return item.finished }).length
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
}
