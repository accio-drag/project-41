class Drop {
    constructor(x, y){
    var option = {
    friction: 0.001,
    restitution: 0.1
    }
    this.r = 5;
     this.drop= Bodies.circle(x,y,5,Option);
     World.add(world,this.drop )

    }
  display(){
fill("blue");
ellipseMode(RADIUS);
ellipse(this.drop.position.x,this.drop.position.y,this.r,this.r)
  }
update(){
if ( this.drop.position.y > height ){
    Matter.Body.setPosition(this.drop,{
        x: random(0,400),
        y:0

    })
}


}







  };
  