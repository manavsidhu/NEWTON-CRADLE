class box{
	constructor(x,y,width,height){
		var options={
			isStatic:true
			}
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);
     this.width=width
     this.height=height
	}
	display(){
			var Pos=this.body.position;
			push();
			translate(Pos.x, Pos.y);
			rectMode(CENTER);
			fill("red");
			rect(0,0,this.width, this.height);
			pop();
	}
}
