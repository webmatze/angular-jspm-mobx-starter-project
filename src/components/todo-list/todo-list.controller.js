import {autorun, observable} from 'mobx'

export default function TodoListController (dataStore) {
  // initialize component
  this.$onInit = function () {
    this.data = dataStore
    initNewItem()
    autorun(() => {
      this.itemsCount = this.data.items.length
      this.unfinishedTasks = this.data.items.filter(task => !task.finished)
      this.finishedTasks = this.data.items.filter(task => task.finished)
    })
  }
  // private
  let initNewItem = () => {
    this.newItem = observable({
      name: '',
      finished: false,
      itemClass () {
        return this.finished ? 'done' : ''
      }
    })
  }
  // public
  this.addItem = function (item) {
    this.data.items.push(item)
    initNewItem()
  }
  this.deleteItem = function (item) {
    this.data.items.remove(item)
  }
  this.setTitle = function (text) {
    this.data.title = text
  }
  this.archive = function () {
    let unarchived = this.data.items.filter((item) => { return !item.finished })
    this.data.items.replace(unarchived)
  }
}
