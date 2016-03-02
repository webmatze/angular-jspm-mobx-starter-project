import {extendObservable} from 'mobx'

export default function TodoItemController () {
  extendObservable(this.item, {itemClass: function () {
    return this.finished ? 'done' : ''
  }})
  this.setName = function (text) {
    this.item.name = text
  }
}
