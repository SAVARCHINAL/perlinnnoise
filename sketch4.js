 // Sav Archinal




var points = [];
var multiply = 300;
let link;






function setup() {
  createCanvas(600, 600);
  //song.setVolume(0.5);
  background(250,250,250);
  angleMode(DEGREES);
  noiseDetail(100);
  // link = createA('page5.html', 'GO SOMEHWERE ELSE','_blank');
  // link.position(windowWidth/2, windowHeight/2);

  
  
  var density=40;
  var space = (width/density);
  
  
  for (var x =0; x < width; x += space) {
    for(var y =0; y < height; y += space) {
      var p = createVector(x + random(-500,500), y+ random (-10,10));
      points.push(p);
    }
  }
  multiply = random(0.1050, x);
}




 
function keyPressed() {
  
  //let r = random(-1000,1000);
  //frameRate(5);
  
  
  if( key === ' ') {
    textSize(22); 
    textFont(font);
    fill(196, 177, 139); 
    text('everything is so loud',random(windowWidth),random(windowHeight)); 
    text('no',random(windowWidth),random(windowHeight)); 
    text('nobody knows what their doing',random(windowWidth),random(windowHeight)); 
    text('your safe here',random(windowWidth),random(windowHeight));
    text('am i in the right place',random(windowWidth),random(windowHeight));
    text('i wanna lay in the sun',random(windowWidth),random(windowHeight));
    text('doesnt matter',random(windowWidth),random(windowHeight));
    
    text('do you feel at home', random(windowWidth),random(windowHeight));
    text('no rain no flowers',random(windowWidth),random(windowHeight));
    text('its fine',random(windowWidth),random(windowHeight));
    text('no',random(windowWidth),random(windowHeight)); 
  }
}



function draw() {
  noStroke(0);
  fill(59, 57, 54);
  
  if (frameCount * 2 <= points.length) {
  var max = frameCount;
  } else {
    var max = points.length;
  }
  for (var i =20; i < max; i++);
  
  
 
  
  for (var i =0; i < points.length; i++) {
    
   var r = map(points[i].x,200,width,500,550); 
    
  
  var angle = map(noise(points[i].x * multiply, points[i].y * multiply),0,1,0,300);
    
    points[i].add(createVector(cos(angle), sin(angle)));
  
  ellipse(points[i].x,points[i].y,1);
  
  }

 }