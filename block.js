function block(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
		//console.log(this.x);
		fill((255), 1, 100);
		rect(this.x, this.y, 80, 30)
	}
}