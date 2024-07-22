 // Sav Archinal




var points = [];
var multiply = 0.08;







function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.setVolume(0.5);
  background(255,255,255);
  // angleMode(DEGREES);
  noiseDetail(37);
  

  
  
  var density=90;
  var space = (width/density);
  
  
  for (var x =0; x < width; x += space) {
    for(var y =0; y < height; y += space) {
      var p = createVector(x + random(-500,500), y+ random (-10,10));
      points.push(p);
    }
  }
  multiply = random(0.0002, 0.0005);
}




 
// function keyPressed() {
  
  
  
  
//   if( key === ' ') {
//     textSize(22); 
//     textFont(font);
//     fill(196, 177, 139); 
//     text('everything is so loud',random(windowWidth),random(windowHeight)); 
//     text('no',random(windowWidth),random(windowHeight)); 
//     text('nobody knows what their doing',random(windowWidth),random(windowHeight)); 
//     text('your safe here',random(windowWidth),random(windowHeight));
//     text('am i in the right place',random(windowWidth),random(windowHeight));
//     text('i wanna lay in the sun',random(windowWidth),random(windowHeight));
//     text('doesnt matter',random(windowWidth),random(windowHeight));
    
//     text('do you feel at home', random(windowWidth),random(windowHeight));
//     text('no rain no flowers',random(windowWidth),random(windowHeight));
//     text('its fine',random(windowWidth),random(windowHeight));
//     text('no',random(windowWidth),random(windowHeight)); 
//   }
// }



function draw() {
   noStroke();
  fill(105,105,105);
  
  if (frameCount * 36 <= points.length) {
  var max = frameCount;
  } else {
    var max = points.length;
  }
  for (var i =0; i < max; i++);
  
  
 
  
  for (var i =0; i < points.length; i++) {
    
   var r = map(points[i].x,100,width,50,55); 
    
  
  var angle = map(noise(points[i].x * multiply, points[i].y * multiply),0,1,0,940);
    
    points[i].add(createVector(cos(angle), sin(angle)));
  
  ellipse(points[i].x,points[i].y,1);
 
  }

 }

 