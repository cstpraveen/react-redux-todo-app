//define action within an action creator
function EditBook() {
  const EDIT_BOOK = 'EDIT_BOOK'
  return {
    type: EDIT_BOOK,
    title: "Learn React VR",
  }
}
export default EditBook