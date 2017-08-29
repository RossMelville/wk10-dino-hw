var Park = function(){
  this.enclosure = [];

  Park.prototype.addDinosaur = function(dinosaur){
    this.enclosure.push(dinosaur);
  };

  Park.prototype.removeDinosaurType = function(type){
    for(i = 0; i < this.enclosure.length; i++){
      if (this.enclosure[i].type === type){
        this.enclosure.splice(i, 1);
      }
    }
  };

  Park.prototype.offspringOver = function(babies){
    var foundDinosaurs = [];
    for(i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].offspringPerYear >= babies){
        foundDinosaurs.push(this.enclosure[i]);
      }
    }
    return foundDinosaurs;
  }
}




module.exports = Park;