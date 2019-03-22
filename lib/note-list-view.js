(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
    this.htmlArray = []
  };
//
  exports.NoteListView = NoteListView;
})(this);


NoteListView.prototype.html = function() {
  this.htmlArray.push("<ul>")
  var self = this
  this.notelist.notesArray.forEach(function(note) {
    (self.htmlArray).push("<li><div>" + note.text.substring(0,20) + "</div></li>")
  })
  this.htmlArray.push("</ul>")
  this.htmlArray = this.htmlArray.join("")
  return this.htmlArray
}

// }
//
//
// Note.prototype.getText = function() {
//     return this.text
//   };

// <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
