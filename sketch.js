

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  basket2_img = loadImage("images/basket2.png");
}
function setup() {
  createCanvas (windowWidth, windowHeight);
  basket = createSprite(width/2, height-50)
  basket.addImage('basket',basket2_img)
  score = 0
  fruitGroup = new Group();
}

function draw() {
  background(back_img);
  fruits()
  basket.x=mouseX
  basket.overlap(fruitGroup,function(collector,collected){
    collected.remove()
score=score+1
  })
  drawSprites()
  fill ("white")
  textSize(40)
   text("Score :"+score, 50, 50)
}

function fruits() {
  if(frameCount % 50 == 0){
    var fruit = createSprite(random(50,2000),0)
    fruit.velocityY=10
    var r= Math.round(random(1,5))
    switch(r){
      case 1: fruit.addImage("fruit1",fruit1_img);
      break;
      case 2: fruit.addImage("fruit2",fruit2_img);
      break;
      case 3: fruit.addImage("fruit3",fruit3_img);
      break;
      case 4: fruit.addImage("fruit4",fruit4_img);
      break;
      case 5: fruit.addImage("fruit5",fruit5_img);
      break;
default: break;
    }
    fruit.depth=basket.depth-1
    fruitGroup.add(fruit)
  }
}