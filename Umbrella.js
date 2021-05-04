class Umbrella {
    constructor(x, y){
    var option = {
    
    isStatic: true
    }
    this.r = 300;
     this.drop= Bodies.circle(x,y,50,option);
     World.add(world,this.drop )
this.image = loadImage("images/walking_1.png")
    }
  display(){
fill("blue");
imageMode(CENTER);
image(this.image,this.drop.position.x,this.drop.position.y + 70,this.r,this.r)
  }



}








  