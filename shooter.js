function shooter(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
		//console.log(this.x);
		fill(random(204), 0, 0);
		ellipse(this.x, this.y, 40, 40)
	}

	this.move = function(){
		this.y = this.y - 5;
	}
}