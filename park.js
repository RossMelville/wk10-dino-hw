var Park = function(){
  this.enclosure = [];

  Park.prototype.addDinosaur = function(dinosaur){
    this.enclosure.push(dinosaur);
  };

  Park.prototype.removeDinosaurType = function(dinosaurType){
    var notRemovedDinos = [];
    for(i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].type !== dinosaurType){
        notRemovedDinos.push(this.enclosure[i]);
      }
    }
    this.enclosure = notRemovedDinos;
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

  Park.prototype.projectedCount = function(years){
    var dinosaurCount = 0;
    var indexDinoCount = 0;
    for(i = 0; i < this.enclosure.length; i++){
      indexDinoCount += Math.pow((this.enclosure[i].offspringPerYear + 1), years); 
    }
    return indexDinoCount;
  }

}




module.exports = Park;