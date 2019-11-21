function Building(floors) {
  this.what = "building";
  this.floors = floors;
}

Building.prototype.countFloors = function() {
  console.log(`I have ${this.floors}, floors`);
};

myHouse = new Building(3);
console.log(myHouse);
