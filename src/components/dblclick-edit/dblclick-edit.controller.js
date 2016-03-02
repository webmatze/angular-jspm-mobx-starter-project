export default function DblClickEditController () {
  this.editMode = false
  this.toggleEdit = function () {
    if (this.editMode) {
      this.onChange({text: this.text})
    }
    this.editMode = !this.editMode
  }
  this.toggleEditOnEnter = function ($event) {
    if ($event.keyCode === 13) {
      this.toggleEdit()
    }
    return true
  }
  this.handleClicks = function ($event) {
    if ($event.type === 'click') {
      $event.preventDefault()
      $event.stopPropagation()
      $event.stopImmediatePropagation()
    }
    return true
  }
}
