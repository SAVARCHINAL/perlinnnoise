 // Sav Archinal




var points = [];
var multiply = 0.00005;





function setup() {
  createCanvas(500, 500);
  //song.setVolume(0.5);
  background(255,255,255);
  angleMode(DEGREES);
  noiseDetail(300);

  
  
  var density=90;
  var space = (width/density);
  
  
  for (var x =0; x < width; x += space) {
    for(var y =0; y < height; y += space) {
      var p = createVector(x + random(-50,50), y+ random (-100,100));
      points.push(p);
    }
  }
  multiply = random(0.0002, 0.0005);
}



 
// function keyPressed() {
  
  //let r = random(-1000,1000);
  //frameRate(5);
  
  



function draw() {
   noStroke();
  fill(59, 57, 54);
  
  if (frameCount * 2 <= points.length) {
  var max = frameCount;
  } else {
    var max = points.length;
  }
  for (var i =0; i < max; i++);
  
  
 
  
  for (var i =0; i < points.length; i++) {
    
   var r = map(points[i].x,100,width,50,55); 
    
  
  var angle = map(noise(points[i].x * multiply, points[i].y * multiply),0,1,0,720);
    
    points[i].add(createVector(cos(angle), sin(angle)));
  
  ellipse(points[i].x,points[i].y,1);
  
  }
}
