import {extendObservable} from 'mobx'

export default function TodoItemController () {
  extendObservable(this.item, {itemClass: function () {
    return this.finished ? 'done' : ''
  }})
}
