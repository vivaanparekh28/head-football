class Player2{
    constructor(x,y){
        var option={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,50,100,option);
        this.image=loadImage("skull.png")
        World.add(world,this.body);
        // this.score=0;
        // this.index=0;
        // this.name=null;
        // this.x=0
        // this.y=0
    }
    display(){
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,150,160)
        //rect(this.body.position.x,this.body.position.y,50,100)
    }
}