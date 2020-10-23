class Particle{
    constructor(x,y,radius){
      var options = {
          'isStatic': false,
          'restitution':0.4
      }
      this.radius = 10;

   this.body = Bodies.circle(x, y,this.radius, options);
   this.color = color(random(0, 255), random(0, 255), random(0, 255));
   this.x = x;
   this.y = y;
   World.add(world,this.body)

    }
  
     display(){
     var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  
  
  
  
  }