function planeInfo(pilot, copilot, fuelLevel) {
	this.pilot = pilot;
	this.copilot = copilot;
	this.fuelLevel = fuelLevel;
};

var plane1 = new planeInfo("Red Baron", "Snoopy", 97);
var plane2 = new planeInfo("Alfred", "Alfred", 98);
var plane3 = new planeInfo("A", "B", 50);

planeInfo.prototype.isReady = function(){
	if(this.fuelLevel < 95 || this.fuelLevel > 100){
		return false;
	}
	if(this.pilot == this.copilot){
		return false;
	}
	if(this.pilot.length === 0 && this.copilot.length === 0){
		return false;
	}
	return true;
}

console.log(plane1.isReady());
console.log(plane2.isReady());
console.log(plane3.isReady());