var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){

  beforeEach( function() {
    dinosaur = new Dinosaur;
  })

  it( "should have type", function(){
    console.log( "Dinosaur", dinosaur);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  } );



})