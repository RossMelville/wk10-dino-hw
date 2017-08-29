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

  
}




module.exports = Park;