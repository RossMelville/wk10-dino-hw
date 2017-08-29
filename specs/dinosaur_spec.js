var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){

  beforeEach( function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
  })

  it( "should have type", function(){
    console.log( "Dinosaur type", dinosaur.type);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  } );

  it( "should have offspring per year", function(){
    console.log( "Dinosaur offspring", dinosaur.offspringPerYear);
    assert.strictEqual(dinosaur.offspringPerYear, 3);
  })
  



})