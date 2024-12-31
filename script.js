// Complete the js code
function Car(make, model) {
	this._make = make;
	this._model = model;
}
Car.prototype.getMakeModel = function(){
	return `${this._make} ${this._model}`;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.getTopSpeed = function(){
	return this._topSpeed;
}

function SportsCar(make, model, topSpeed) {
	call.Car(this,make,model);
	this._topSpeed = topSpeed;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
