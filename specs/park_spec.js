var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){

  beforeEach( function() {
    park = new Park;
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 5);
  })

  it("enclosure should start empty", function(){
    console.log("Park", park);
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("should be able to add dinosaur to enclosure", function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    console.log("Park", park);
    assert.strictEqual(park.enclosure.length, 3);
  })


})