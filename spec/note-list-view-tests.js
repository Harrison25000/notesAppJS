(function(exports) {
  function testNoteListCanbeInstantiated() {
    var noteListView = new NoteListView();

    if (noteListView instanceof NoteListView) {
      console.log("testNoteListCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteListCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteListCanbeInstantiated();
})(this);


(function(exports) {
  function testStringHtml() {
    var bob = { text: "bob"}
    var noteListDummy = { notesArray: [bob] }
    var noteListView = new NoteListView(noteListDummy);
    //noteListView.notelist.create('text')
    noteListView.html()
    if (noteListView.htmlArray.includes("<ul><li><div>bob</div></li></ul>")) {
      console.log("testStringHtml: Yep, contains a string of HTML!");
    }
    else {
      console.log(noteListView.htmlArray)
      throw new Error("testStringHtml Error:Doesn't return string of HTML")
    }
  };
  testStringHtml();
})(this);

function testStringHtml20Char() {
  var bob = { text: "James is amazing and oli is not"}
  var noteListDummy = { notesArray: [bob] }
  var noteListView = new NoteListView(noteListDummy);
  //noteListView.notelist.create('text')
  noteListView.html()
  if (noteListView.htmlArray.includes("<ul><li><div>James is amazing and</div></li></ul>")) {
    console.log("testStringHtml20Char: Yep, contains a 20 char string of HTML!");
  }
  else {
    console.log(noteListView.htmlArray)
    throw new Error("testStringHtml Error:Doesn't return a 20Char string of HTML")
  }
};
testStringHtml20Char();
