let particles = [];
let num = 50;
let x = [0];
let y = [0];
let z = [0];
let hand1,mag1,hand2,mag2;

function setup() {
  createCanvas(1280, 720) 
 
  for (i = 0; i < num; i++) {
    let p = new Bouncer(random(width), random(height), random(3));
    particles.push(p);
  }

}

function onResults(results) {

  for (let h = 0; h < results.multiHandLandmarks.length;h++) {
   // I am just taking the first point of each hand which is the palm
   let p = results.multiHandLandmarks[h];
      x[h]= p[0].x*width;
      y[h]= p[0].y*height;
      z[h]= p[0].z;
     }
 }  
  
function draw(){
background(255);

for (let i = 0; i < x.length;i++){
  
  let w = map (z[i],0.0,-0.02,0,10);
  push();
  stroke(255,0,0);
  strokeWeight(20);
  point(x[i],y[i]);
  pop();


}

console.log(x)
  hand1 = createVector(x[0], y[0]);
  // mag1 = map(z[0],0.0,-0.02,0,1);
  // hand1.setMag(mag1);
  
  hand2 = createVector(x[1], y[1]);
  // mag2 = map(z[1],0.0,-0.02,0,1);
  // hand2.setMag(mag2);



for (i = 0; i < num; i++) {
  if(x.length>0){
     particles[i].attractor(hand1);
     particles[i].attractor(hand2);
  } 
     let grav = createVector(0, 0.2);
      let weight = p5.Vector.mult(grav, particles[i].mass);
      particles[i].applyForce(weight);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
  
  }
}



