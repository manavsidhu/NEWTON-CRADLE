class chain{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pB:{x:this.offsetX, y:this.offsetY}
		}
		this.chain=Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pA=this.chain.bodyA.position;
		var pB=this.chain.bodyB.position;

		strokeWeight(2);

		var a1X=pA.x
		var a1Y=pA.y

		var a2X=pB.x+this.offsetX
		var a2Y=pB.y+this.offsetY
		stroke("white");
		line(a1X,a1Y,a2X,a2Y);
	}

}
