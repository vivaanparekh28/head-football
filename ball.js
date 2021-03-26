class Ball{
    constructor(){
        var option={
            restitution:1
        }
        this.body=Bodies.circle(600,50,40,option)
        this.image=loadImage("football-no-background.png")
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        ellipseMode(RADIANS)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,60,60)
        //ellipse(this.body.position.x,this.body.position.y,40)
        
    }
}