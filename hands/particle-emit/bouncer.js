class Bouncer {
    constructor(x,y,m){
      this.pos = createVector(x,y);
      this.acc = createVector(0,0);  
      this.vel = createVector(0,-1);
      this.mass = m;
      this.r = sqrt(m)*10;
    }
    applyForce(force){
      let f = p5.Vector.div(force,this.mass); 
      this.acc.add(f);
    }
    
    attractor(mouse){
      this.acc= p5.Vector.sub(mouse,this.pos);
      this.acc.setMag(.5);
      
      this.vel.add(this.acc); 
      this.vel.limit(1);   
      this.pos.add(this.vel);
    }
    
     
    repel(mouse){
      // from https://editor.p5js.org/marynotari/sketches/gmdK1KwgJ
      let force = p5.Vector.sub(mouse,this.pos);
      let distSquared = force.magSq()
      let grav = -1000;
      let magnitude = grav / distSquared; //the magnitude of the force enacted on each particle
      force.setMag(magnitude);
      this.acc = force;
      
      this.vel.add(this.acc); 
      this.vel.limit(2);   
      this.pos.add(this.vel);
    }
   
      edges(){
          if (this.pos.x>=width-this.r){
        this.pos.x=width-this.r;
        this.vel.x *= -1;
      }
      else if (this.pos.x<=this.r){
        this.pos.x=this.r;
        this.vel.x *= -1;
      }
      // else if (this.pos.y<=this.r){
      //   this.pos.y=this.r;
      //   this.vel.y *= 1;
      // }
       else if (this.pos.y>=height-this.r){
        this.pos.y=height-this.r;
        this.vel.y *= -1;
      }
    }
    
    update(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);   
      this.acc.set(0,0);
    }
    
    show(){
        stroke(0,0,0);
      ellipse(this.pos.x,this.pos.y,this.r)
    }
  }