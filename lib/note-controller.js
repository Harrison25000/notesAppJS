console.log('log')
var that = document.getElementById("app")
that.innerHTML = "howdy";

function NoteController (notelist) {
  notelist.create(new Note("Favourite drink: seltzer"));
  console.log(Note.notesArray)
  view = new NoteListView(notelist);

};

NoteController.prototype.viewinsert = function () {
  output = view.html
  console.log(NoteListView.htmlArray)
  document.getElementById("app").innerHTML = output};
