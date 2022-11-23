function setup() {
  createCanvas(1280, 720) 
  stroke(0);
  strokeWeight(10);
}
// this will run every time MediaPipe receives new hands data. Think of it like a draw loop. results will be passed in a JS object containing all our hand position data.
function onResults(results) {
  background(255,10);
 
    // results.multiHandLandmarks will contain multiple arrays if MP detects  more than one hand
        for (let hand of results.multiHandLandmarks) {
         for (let p of hand) {
        push();
        let w = map(p.z,0.0,-0.02,0,10);
        strokeWeight(w); // faux distance mapping
        point(p.x*width,p.y*height);
        pop();
      }
    }
  
}