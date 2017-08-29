var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){

  beforeEach( function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
  })

  it( "should have type", function(){
    console.log( "Dinosaur", dinosaur);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  } );



})