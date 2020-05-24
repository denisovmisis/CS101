function setup() { 
  createCanvas(800, 600);
  background(random(0,255), random(0,255), random(0,255), random(0,255)); 
    
  for(let i = 10;i <= width; i = i + 50) {
    for (let j = 10;j <= height; j = j + 50) {
    
     push();
     translate(i,j);
     rotate(random(1,10));    
       fill(random(0,255), random(0,255), random(0,255));  
       triangle(0, 0, random(50,50), random(50,50), random(50,50), random(50,50)); 
  
       fill(random(0,255), random(0,255), random(0,255));  
       triangle(0, 0, random(50,100), random(50,100), random(50,100), random(50,100)); 
  
       fill(random(0,255), random(0,255), random(0,255));  
       triangle(0, 0, random(50,200), random(50,200), random(50,100), random(50,100)); 

       fill(random(0,255), random(0,255), random(0,255));  
       triangle(0, 0, random(50,150), random(50,150), random(50,150), random(50,150)); 
     pop();
    }
  }   
}