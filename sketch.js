var box1
var paper1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1495, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(748,650,1497,20);
	paper1 = new Paper(10,10,70,70);
	box1 = new Dustbin(330,235,30,40);
	box2 = new Dustbin(360,235,30,40);
	box3 = new Dustbin(390,235,30,40);
	box4 = new Dustbin(420,235,30,40);
	box5 = new Dustbin(450,235,30,40);
	box6 = new Dustbin(360,195,30,40);
	box7 = new Dustbin(390,195,30,40);
	box8 = new Dustbin(420,195,30,40);
	box9 = new Dustbin(390,155,30,40);
	launcher = new Launcher(paper1.body,{x:200, y:100})
}



function draw() {
  rectMode(CENTER);
  background(255);

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
  paper1.display();
  launcher.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
  }
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
if(keyCode === 32){
launcher.attach(this.paper1)

}


}
