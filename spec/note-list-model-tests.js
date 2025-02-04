(function(exports) {
  function testNoteListCanbeInstantiated() {
    var noteList = new NoteList();

    if (noteList instanceof NoteList) {
      console.log("testNoteListCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteListCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteListCanbeInstantiated();
})(this);

(function(exports) {
  function testNoteListIsInstantiatedWithArray() {
    var noteList = new NoteList();
    noteList.create("bob")

    if (noteList.notesArray[0] !== 'bob') {
      console.log(noteList.notesArray)
      throw new Error("Error: testNoteListIsInstantiatedWithArray does not match");
    }
    else {
      console.log("testNoteListIsInstantiatedWithArray: Clear")
    }
  };
  testNoteListIsInstantiatedWithArray();
})(this);


(function(exports) {
  function testNoteListCanPrint() {
    var noteList = new NoteList();
    noteList.notesArray.push('Note Hello!')
    noteList.notesArray.push('Note Goodbye!')

    if (noteList.printAll().includes("Note Hello!", "Note Goodbye!")){
      console.log("testNoteListCanPrint: Clear")
    }
    else {
      console.log(noteList.printAll())
      throw new Error("Error: testNoteListCanPrint does not match");
    }
  };
  testNoteListCanPrint();
})(this);


(function(exports) {
  function testNewNotes() {
    var noteList = new NoteList();
    noteList.create('newnotes')
    // assert.isTrue(noteList.notesArray.include('newnotes'))
    if (noteList.notesArray.includes('newnotes')) {
      console.log('testNewNotes: Passed')
    } else {
      console.log(noteList.notesArray)
      throw new Error("Error: testNewNotes does not match");
    }
  };

  testNewNotes();
})(this);
