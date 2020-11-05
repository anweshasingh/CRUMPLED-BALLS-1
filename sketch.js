const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var dustbinObj, paperObject;
var left,right,bottom,leftBody, rightBody, bottomBody;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(600,400,1200,20);
dustbinObj = new Dustbin(800,350);
paperObject = new Paper(200,200,40);

    

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
   dustbinObj.display();
    paperObject.display();

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperOject.body,paperObject.body.position,{x:85,y:-85})
    }
}