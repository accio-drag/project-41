const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops = 100;
var drops = [];
var thunderFrame = 0;
var thunder;
function preload() {
    
thunder1= loadImage("images/1.png")
thunder2= loadImage("images/2.png")

}


function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
umbrella = new Umbrella(200,500)
if (frameCount%150===0){
    for ( var i = 0; i < maxDrops ; i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
    
    } 
}

function draw(){
background(0)
Engine.update(engine)
umbrella.display();

var rand = Math.round(random(1,2))
if (frameCount%100===0){
    thunderFrame = frameCount;
    thunder = createSprite(random(10,360),random(10,30),10,10)
    switch(rand){
    case 1: thunder.addImage(thunder1) 
    break
    case 2: thunder.addImage(thunder2)
    break
    default: break

    }
}

if(thunderFrame + 10 === frameCount && thunder ){
    thunder.destroy()
}

for(var i = 0 ; i < drops.length ; i++){
drops[i].display();
drops[i].update();



}

drawSprites()

}  

