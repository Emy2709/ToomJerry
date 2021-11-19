var canvas,bg;
var together;
var tom, tomImg1,tomImg2, tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    //carga aquí las imágenes
    bg = loadImage("Imagenes/garden.png");
    tomImg1 = loadAnimation("Imagenes/tomOne.png");
    tomImg2 = loadAnimation("Imagenes/tomTwo.png","Imagenes/tomThree.png");
    tomImg3 = loadAnimation("Imagenes/tomFour.png");
    jerryImg1 = loadAnimation("Imagenes/jerryOne.png");
    jerryImg2 = loadAnimation("Imagenes/jerryTwo.png","Imagenes/jerryThree.png");
    jerryImg3 = loadAnimation("Imagenes/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    //crea aquí los sprites de Tom y Jerry
   tom = createSprite(870,600);
   tom.addAnimation("tomSentado",tomImg1);
   tom.scale = 0.2 ;

   jerry = createSprite(200,600);
   jerry.addAnimation("jerrySentado",jerryImg1);
   jerry.scale = 0.15 ;
}

function draw() {

    background(bg);
  
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
if(tom.x - jerry.x <(tom.width - jerry.width)/2){
tom.velocityX = 0;
tom.addAnimation("tomCachado",tomImg3);
tom.x = 300;
tom.scale = 0.2;
tom.changeAnimation("tomCachado");

jerry.addAnimation("jerryUltimo",jerryImg3);
jerry.scale = 0.15;
jerry.changeAnimation("jerryUltimo");

}

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
tom.velocityX = -2;
tom.addAnimation("TomCorriendo",tomImg2);
tom.changeAnimation("TomCorriendo");
jerry.addAnimation("jerryBurlandose",jerryImg2);
jerry.frameDelete = 25 ;
jerry.changeAnimation("jerryBurlandose");
}

}