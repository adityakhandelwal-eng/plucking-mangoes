
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1,Mango,mango3,mango4,mango5;
var world,boy,slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,200,40);
	Mango=new mango(1000,100,40);
	mango3=new mango(1000,200,40);
	mango4=new mango(1200,140,40);
	mango5=new mango(1100,60,40);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(220,400,50,50)
	slingshot=new SlingShot(stone.body,boy.body,{x:200,y:100})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  Mango.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  groundObject.display();
  slingshot.display();
}
