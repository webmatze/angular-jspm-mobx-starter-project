import {observable} from 'mobx'

export default function TestController () {
  this.user = observable({
    firstName: 'Unknown',
    lastName: 'User'
  })
  this.changeName = function () {
    this.user.firstName = 'Mathias'
    this.user.lastName = 'Karstädt'
  }
}
