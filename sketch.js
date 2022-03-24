var arnoldi;
function setup() {
  createCanvas(500,500);
   arnoldi=createSprite(200,200,10,10);
}

function draw() 
{
  background(30);

  if(keyDown("D")){
arnoldi.x=arnoldi.x+5;
  }
  if(keyDown("A")){
    arnoldi.x=arnoldi.x-5;
      }
      if(keyDown("w")){
        arnoldi.y=arnoldi.y-5;
          }
          if(keyDown("s")){
            arnoldi.y=arnoldi.y+5;
              }
  
      drawSprites();
}




