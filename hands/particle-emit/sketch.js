let particles = [];
let num = 50;
let x = [];
let y = [];
let z = [];


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
  stroke(255,0,0);
  strokeWeight(w);
  point(x[i],y[i])
}

  for (i = 0; i < num; i++) {
    // let mouse = createVector(mouseX, mouseY);
    // if (mouseIsPressed) {
    //   if (i % 2 == 0) {
    //     particles[i].attractor(mouse);
    //   } else {
    //     particles[i].repel(mouse);
    //   }
    // }
      let grav = createVector(0, 0.2);
      let weight = p5.Vector.mult(grav, particles[i].mass);
      particles[i].applyForce(weight);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
  
  }
}



