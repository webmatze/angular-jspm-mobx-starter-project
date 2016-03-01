export default function DblClickEditController () {
  this.editMode = false
  this.tempText = null
  this.toggleEdit = function () {
    this.editMode = !this.editMode
    this.tempText = this.text
  }
  this.toggleEditOnEnter = function ($event) {
    if ($event.keyCode === 13) {
      this.onChange({text: this.tempText})
      this.toggleEdit()
    }
  }
}
