class Hero {
    constructor (x,y,r){
      var options={
        isStatic:false,
        density : 20,
        restituition:0.5
      }
      this.body= Bodies.circle(x,y,r, options);
     this.r=r;
    
     this.width = width;
     this.height = height;
     this.image = loadImage("images/Superhero-02.png");
    
      World.add (world, this.body);
    
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      //circle(0,0,this.r);
      imageMode(CENTER);
        image(this.image, 0,0,this.r);
        
      pop();
    
    
    }
    
    
    
    }