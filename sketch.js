

var box1, box2, box3, ground;
var ball;


function setup() 
{
  createCanvas(1500, 800);

  ground = new Box(0,600,1200,20);
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  
}

function draw() 
{
  background(220);

 
  ground.display();
  
  box1.display();
  box2.display()
  box3.display()
  

}







