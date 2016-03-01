import {autorun} from 'mobx'

export default function UserController () {
  let setFullName = (user) => {
    this.fullName = user.firstName + ' ' + user.lastName
  }
  this.fullName = setFullName(this.user)
  autorun(() => {
    setFullName(this.user)
  })
}
