class Plinko{
    constructor(x,y,radius){
      var options = {
          'isStatic': true,
      }
      this.radius = 10;
   
   this.x = x;
   this.y = y;
   this.body = Bodies.circle(x, y,this.radius, options);

   World.add(world,this.body)

    }
  
     display(){
     var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      fill(255)
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  
  
  
  
  }