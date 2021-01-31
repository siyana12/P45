const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var HWI, book1, girlI, book2, book3;
var girl;
function setup(){
  var canvas = createCanvas(800,500)
  engine = Engine.create();
  world = engine.world;

  booksGroup = new Group();
   
}

function preload(){
  HWI=loadImage("Images/hallway.jpg");
  book1=loadImage("Images/Gray_book.png");
  girlI=loadImage("Images/GirlRunning.png");
  book2=loadImage("Images/greenbook.png");
  book3=loadImage("Images/bluebook.png");
}

function draw(){
   background(HWI)

   Engine.update(engine);

   if(keyDown("left_arrow")){
    girl.velocityX=-5;
  }
   if(keyDown("right_arrow")){
    girl.velocityX=5;
  }
  
   if(keyDown("space")){
    girl.velocityY=-5;
  }

   spawnBooks();
   createGirl();
   drawSprites(); 
}

function spawnBooks(){
    if (frameCount % 60 === 0){
      var books = createSprite(350,20,5,20);
      books.y = Math.round(random(140,210));
      books.velocityY = 3 ;
   
       // //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: books.addImage(book1);
                 break;
         case 2: books.addImage(book2);
                 break;
         case 3: books.addImage(book3);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       books.scale = 0.1;
       books.lifetime = 500;
      
      //adding obstacles to the group
      booksGroup.add(books);
    }
}

function createGirl(){
   girl = createSprite(350,400, 10, 20);
   girl.addImage(girlI);
   girl.scale = 0.5;
}