class Player{
    constructor(x,y){
        var option={
            isStatic:false,
            density:1
        }
        this.body=Bodies.rectangle(x,y,50,100,option);
        World.add(world,this.body);
        // this.score=0;
        // this.index=0;
        // this.name=null;
        // this.x=0
        // this.y=0
        this.image=loadImage("head-ball-2-characters-800x370-1.png")
        this.field=loadImage("soccerfield.png")
        this.goal=loadImage("goal.png")
        this.rightgoal=loadImage("othergoal (1).png")
        this.crowd=loadImage("stadiumcrowd.jpg")
    }
    display(){
        push()
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.crowd,600,250,1200,500)
        image(this.field,600,400,1400,500)
        image(this.goal,50,370,300,350)
        image(this.rightgoal,1150,370,300,350)
        image(this.image,this.body.position.x,this.body.position.y)
        pop()
        //rect(this.body.position.x,this.body.position.y,50,100)
    }

//     getPlayerCount(){
//         var dbref=database.ref("playerCount")
//         dbref.on("value",(data)=>{
//             playerCount=data.val();
//         })
//     }

//     updatePlayerCount(count){
//         var dbref=database.ref("/");
//         dbref.update({
//             playerCount: count
//         })
        
        
//     }
//     update(){
//         var playerIndex="Players/player"+this.index
//         database.ref(playerIndex).update({
//             name:this.name,
//             score:this.score,
            
//           });
//     }

//     getLocation(){


//     }

//     static getPlayersInfo(){
//         var dbref=database.ref("Players")
//         dbref.on("value",(d)=>{
//             allplayers=d.val()
//         })
//     }
//     updateLocation(){
//         var playerIndex="Players/player"+this.index
//         database.ref(playerIndex).update({
            
//             x:this.body.position.x,
//             y:this.body.position.x
//           });
//     }
    
 }