(function(exports) {
  function testControllerCanBeInstatiated() {
    var controller = new NoteController();

    if (controller instanceof NoteController){
      console.log(`${controller} is an instance of your Note Controller`)
    }
    else {
      console.log(`${controller} is NOT an instance. Oh no.`)
      throw new Error("Error: not an instance of NoteController");
    }
  };
  testControllerCanBeInstatiated();
})(this);
