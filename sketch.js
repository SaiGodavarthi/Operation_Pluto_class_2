var form,game,player;
var bg1
var bg2
var playerCount,databse

function preload(){
    bg1 = loadImage("/Images/bg1.jfif")
    bg2 = loadImage("/Images/background.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database = firebase.database();
game= new Game();
game.getState()
game.start()


}

function draw(){
    background(bg1)

    if (playerCount === 2) {
        game.update(1);
        background(bg2)
      }
    

}
