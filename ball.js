class ball{
    constructor(x,y,radious){
        var options={
            friction:4,
            restitution:0.1,
            density:0.1
        }
        this.body = Bodies.circle(x,y,radious,options)
        this.radious = radious
        World.add(world, this.body)
       
    }
    display(){
        push()
        fill("green")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(CENTER)
      ellipse(0,0,this.radious, this.radious)
      pop()
    }
}