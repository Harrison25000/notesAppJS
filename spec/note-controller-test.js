(function(exports) {
  function testControllerCanBeInstatiated() {
    console.log("You should see me");
    let control = new NoteController();
    console.log("Me too");
    if (control instanceof NoteController){
      console.log(`${controller} is an instance of your Note Controller`)
    }
    else {
      console.log(`${controller} is NOT an instance. Oh no.`)
      throw new Error("Error: not an instance of NoteController");
    }
  };
  testControllerCanBeInstatiated()
})(this);
