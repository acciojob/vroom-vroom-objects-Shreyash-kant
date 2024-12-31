// Complete the js code
function Car(make, model) {
	this._make = make;
	this._model = model;
	this.getMakeModel(){
		return `${this._make} ${this._model}`;
	}
}

function SportsCar(make, model, topSpeed) {
	call.Car(this,make,model);
	this._topSpeed = topSpeed;
	this.getTopSpeed(){
		return `${this._topSpeed}`;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
