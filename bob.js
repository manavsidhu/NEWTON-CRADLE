class circle1{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:0,
			density:1.5
			}
		this.body=Bodies.circle(x, y, radius, options)
		World.add(world, this.body);
    this.radius= radius;
	}
	display(){
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			fill("grey")
			ellipse(0,0,this.radius);
			pop()
	}
}

