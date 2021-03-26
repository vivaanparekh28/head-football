const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;

var engine,world
var crowd,field,goal,rightgoal
var crowdimg,fieldimg,goalimg,rightgoalimg
var gameState="play"
var score1=0
var score2=0
var border1,border2,border3
// var playerCount,allplayers,gameState=0;
// var name,score
// var x=0
// var y=0
// var player,game,form;
// var ground

function preload(){
  goalimg=loadImage("goal.png")
fieldimg=loadImage("soccerfield.png")
crowdimg=loadImage("stadiumcrowd.jpg")
rightgoalimg=loadImage("othergoal (1).png")
}
function setup() {
  createCanvas(1200,500);
  // database = firebase.database();

  
  engine=Engine.create();
  world=engine.world;

  border1=Bodies.rectangle(0,250,10,500,{isStatic:true})
  World.add(world,border1)
   border2=Bodies.rectangle(1200,250,10,500,{isStatic:true})
  World.add(world,border2)
  border3=Bodies.rectangle(600,0,1200,10,{isStatic:true})
  World.add(world,border3)
  crowd=createSprite(600,300,1200,400)
   crowd.addImage(crowdimg)
   crowd.scale=3
  field=createSprite(600,370,1900,20)
   field.addImage(fieldimg)
   field.scale=2.5

  //create the sprites and keep them ready - these will display the players' bodies later
  goal=createSprite(100,350,50,350)
  goal.addImage(goalimg)
  goal.scale=1.2
  rightgoal=createSprite(1100,350,50,350)
  rightgoal.addImage(rightgoalimg)
 rightgoal.scale=1.2
  
  // game=new Game()
  // game.getState()
  // game.start()

  player1=new Player(150,200)
  player2=new Player2(1050,200)
  ground=new Ground()
  ball=new Ball()

  
}

function draw() {
  background("white")
 
  Engine.update(engine)

//   if(gameState==="welcome"){
// text()
//   }

if(gameState==="play"){

    if(keyDown(UP_ARROW)){
      Matter.Body.setPosition(player1.body, {x:player1.body.position.x, y:player1.body.position.y-10})
      //player1.body.position.y-=0.5
      
        }
        if(keyDown(RIGHT_ARROW)){
          Matter.Body.setPosition(player1.body, {x:player1.body.position.x+5, y:player1.body.position.y})
        }
        if(keyDown(LEFT_ARROW)){
          Matter.Body.setPosition(player1.body, {x:player1.body.position.x-5, y:player1.body.position.y})
        }
        if(keyDown("W")){
          Matter.Body.setPosition(player2.body, {x:player2.body.position.x, y:player2.body.position.y-10})
        }
        if(keyDown("D")){
          Matter.Body.setPosition(player2.body, {x:player2.body.position.x+5, y:player2.body.position.y})
        }
        if(keyDown("a")){
          Matter.Body.setPosition(player2.body, {x:player2.body.position.x-5, y:player2.body.position.y})
        }
        if(ball.body.position.x>1100&&ball.body.position.y>200){
          score1=score1+1
          gameState="reset"
        }
        if(ball.body.position.x<100&&ball.body.position.y>200){
          score2=score2+1
          gameState="reset"
        }
        if(keyCode===32&& ball.body.position.x<player1.body.position.x+100){
          // Matter.Body.setPosition(ball.body,{x:ball.body.position.x+20, y:ball.body.position.y-10})
          Matter.Body.applyForce(ball.body,ball.body.position,{x:0.08,y:-0.05})
        }
        if(keyDown("s")&& ball.body.position.x>player2.body.position.x-100){
          // Matter.Body.setPosition(ball.body,{x:ball.body.position.x+20, y:ball.body.position.y-10})
          Matter.Body.applyForce(ball.body,ball.body.position,{x:-0.08,y:-0.05})  
        }

        if(score1===5|| score2===5){
          gameState="end"
          console.log(score1)
        }
}
if(gameState==="reset"){
  // player1.body.position.x=150
  // player1.body.position.y=200
  // player2.body.position.x=1050
  // player2.body.position.y=200
  // ball.body.position.x=600
  // ball.body.position.y=0
   
Matter.Body.setPosition(player1.body,{x:150,y:200})
Matter.Body.setPosition(player2.body,{x:1050,y:200})
Matter.Body.setPosition(ball.body,{x:600,y:100})
Matter.Body.setVelocity(ball.body,{x:0,y:0})

gameState="play"

}

    player1.display()
    player2.display()
    ground.display()
    ball.display()
      
    textSize(60)
    fill("black")
    text(score1,400,100)
    text(score2,800,100)
    //fill("green")

    if(gameState==="end"){
      push()
      console.log("test2")
      textSize(50)
      text("GAME OVER",600,200)
      pop()
    }
 
}