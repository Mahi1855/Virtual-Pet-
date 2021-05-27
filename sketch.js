var dog, happyDog, database, foodS, foodStock,dogimg,happyDogimg

function preload()
{
dogimg = loadImage("images/dogImg.png")
happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(300,250)
  dog.addImage("m5",dogimg)
  dog.scale = .1
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  textSize(15)
  fill ("red")
  stroke(5)
  //add styles here
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("Happydogimage",happyDog)
  }
text("Press the up arrow to feed the dog!", 250,30)
}

function readStock(data){
foodS=data.val()
}

function writeStock(x){

if(x<=0){
  x = 0
}else{
  x = x - 1
}


database.ref('/').update({
  Food:x
})
}