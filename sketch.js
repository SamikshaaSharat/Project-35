//Create variables here
var  dog_img , happyDog , databse , foodS , foodStock;
var button1,button2;
var fedTime,lastFed;
var foodObj;


function preload()
{
  //load images here
  dog_img  = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");


}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  dog =  createSprite(400,400,20,40);
  dog.addImage(dog_img);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);


  
}


function draw() { 
  background(46,139,87); 
  
fedTime=databse.ref('FeedTime');

fedTime.on("value",function(data){
  lastFed.data.val();

});



  //if(keyWentDown(UP_ARROW)){
   // writeStock(foodS);
    //dog.addImage(happyDog);
//}
  dog.display();
  drawSprites();
  //add styles here
  text(" Press up arrown to feed drago milk  " , 500,100);
  textSize(35);
fill("255");

}

function readStock(data){
      food=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({

  })
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
















