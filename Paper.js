class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.3,
          density:1
      }
      this.body = Bodies.circle(x, y, 1, options);
      this.raidus = 1;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      fill("white");
      stroke("green");
      ellipse(0, 0, this.radius);
      pop();
    }
  }
  