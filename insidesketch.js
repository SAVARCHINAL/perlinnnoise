

function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    background(189, 63, 49);
    noStroke();
    fill(245, 108, 66);
    // rect(windowWidth,windowHeight,0,300,400);
    
    // fill(181, 83, 104);
    // rect(windowWidth,windowHeight,300,400);
    // triangle(0,600,150,400,150,600);
    // triangle(450,600,450,400,600,600);
    
    
    //windowframe
    fill(1);
    rect(windowWidth/2,windowHeight/3,500,500);
    
    window
    fill(51, 52, 54);
    rect(width/2,height/3,500,500);
  
    
    
    
    
      if (mouseIsPressed) {
     fill(51, 52, 54);
     rect(windowWidth/2,windowHeight/3,500,500);
     
    } else {
      fill(240, 175, 175);
       rect(windowWidth/2,windowHeight/2,500,500);
      
      
      
    }
    
    
    
    
    
    
    //panes
    fill(1);
    rect(windowWidth/2,windowHeight/2,4,500);
    rect(windowWidth/2,windowHeight/3,500,4);
  
   
  }