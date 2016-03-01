export default function DblClickEditController () {
  this.editMode = false
  this.toggleEdit = function () {
    this.editMode = !this.editMode
  }
  this.toggleEditOnEnter = function ($event) {
    if ($event.keyCode === 13) {
      this.onChange({text: this.text})
      this.toggleEdit()
    }
  }
}
