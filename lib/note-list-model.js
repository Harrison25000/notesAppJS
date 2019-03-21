(function(exports) {
  function NoteList() {
    this.notesArray = []
  };

  exports.NoteList = NoteList;
})(this);


NoteList.prototype.printAll = function() {
    return this.notesArray
  };

NoteList.prototype.create = function(newnotes) {
  this.notesArray.push(newnotes)
};
