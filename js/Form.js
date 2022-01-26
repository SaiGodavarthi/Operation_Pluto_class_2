class Form{
    constructor(){
     this.title = createElement()
     this.title.html("Operation Pluto")
     this.playButton = createButton("Start Racing")
     this.playerName = createInput("Enter your name")
     this.greeting = createElement("h1")
    }
    setElementPosition(){
this.title.position(windowWidth/2.5,windowHeight/4)
this.playButton.position(windowWidth/2+300,100)
this.playerName.position(windowWidth/2+300,200)
this.greeting.position(windowWidth/2.5,windowHeight/4)
    }

    setElementStyle(){
this.title.class("title")
    }

    display(){
      this.setElementPosition()
      this.setElementStyle() 
      
    this.playButton.mousePressed(()=>{
    this.playButton.hide()
    this.playerName.hide()
    this.title.hide()
    var message = `
    Hello ${this.playerName.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message)
      playerCount += 1;
      player.name = this.playerName.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);

    })

    }


}