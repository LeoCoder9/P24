class stone{
    constructor(x,y,radious){

        var options={
            friction:0.3,
            restitution:0.1,
            density:0.1
        }
        this.body = Bodies.circle(x,y,radious/2, options)
        this.radious = radious
        World.add(world, this.body)
       
    }
    display(){
        push()
        ellipseMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
      ellipse(0,0, this.radious, this.radious)
      pop()
    }
}