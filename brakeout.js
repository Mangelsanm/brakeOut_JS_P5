function brakeout(){
	this.x = width / 2 - 30;
	//console.log(this.x);

	this.show = function(){
		fill(255);
		rect(this.x, height - 10, 60, 10)
	}

	this.move = function(dir){
		//console.log(this.x);
		this.x += dir * 60;
		//console.log(this.x);
	}
}