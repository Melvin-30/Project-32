const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1;
var gameState="play";
var bg,score=0;

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(535,400,300,10)
    box1=new Box(430,375,30,40,"lime")
    box2=new Box(465,375,30,40,"lime")
    box3=new Box(500,375,30,40,"lime")
    box4=new Box(535,375,30,40,"lime")
    box5=new Box(570,375,30,40,"lime")
    box6=new Box(605,375,30,40,"lime")
    box7=new Box(640,375,30,40,"lime")

    box8=new Box(465,330,30,40,"skyblue")
    box9=new Box(500,330,30,40,"skyblue")
    box10=new Box(535,330,30,40,"skyblue")
    box11=new Box(570,330,30,40,"skyblue")
    box12=new Box(605,330,30,40,"skyblue")

    box13=new Box(500,285,30,40,"yellow")
    box14=new Box(535,285,30,40,"yellow")
    box15=new Box(570,285,30,40,"yellow")

    box16=new Box(535,240,30,40,"red")

    polygon1=new polygon(200,200,50,50)

    fill("green")
    var options={
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    polygon=Bodies.circle(175,275,20,options);
    World.add(world,polygon);
    Slingshot=new slingshot(polygon1.body,{x:200,y:250});
    backgroundChange()
}

function draw(){
    
    if(bg){
        background(bg)
    }
    fill("red") 
    text("Score = "+score,600,50)
    Engine.update(engine);
    fill("white")
    textSize(20)
    text("Press Space for A second Chance",400,100);
    polygon1.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    Slingshot.display();
}

function mouseDragged(){
    if(gameState==="play"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    Slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(polygon1.body);
        gameState="play";
    }
}
async function backgroundChange(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();
    var DateTime=responseJson.datetime
    var hour=DateTime.slice(11,13);
    if(hour>=6 && hour<=18){
        bg="Skyblue";
    }else{
        bg="blue";
    }
}