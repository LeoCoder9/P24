class hammer{
    constructor(x,y,width, height){
     
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height = height
        World.add(world, this.body)
       
    }
    display(){
       rectMode(CENTER)
       fill("blue")
       this.body.position.x = mouseX
       this.body.position.y = mouseY
      rect(this.body.position.x,this.body.position.y, this.width, this.height)
      console.log(this.width);
    }
}