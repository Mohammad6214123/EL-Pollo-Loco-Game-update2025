class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar   = new coinBar();
    bottleBar = new bottleBar();
    throwableObject = [];
  
   
   constructor(canvas,keyboard){
       this.ctx = canvas.getContext("2d");
       this.canvas = canvas;
       this.keyboard = keyboard;
       this.draw();
       this.setWorld();
       this.run();
       
   }

    setWorld(){
      this.character.world = this;
    }
  
   run(){
    setInterval(() => {
        this.checkCollisions();
        this.checkThrowObject();
        this.checkCoinCollection();
        this.checkBottleCollection();
    }, 1000);
   }

checkThrowObject(){
  if(this.keyboard.D){
   let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
   this.throwableObject.push(bottle);
  }
}

checkCollisions(){
 this.level.enemies.forEach((enemy) => {
   if (this.character.isColliding(enemy)){
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy);
     
   }
    });

}

checkCoinCollection() {
  this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) { // Remove the collected coin from the level
          this.level.coins.splice(index, 1);      // Increase the coin count on the coin bar    
          this.coinBar.increaseCoins();
      }
  });
}


checkBottleCollection() {
  this.level.bottle.forEach((bottle, index) => {   
      if (this.character.isColliding(bottle)) {
          this.level.bottle.splice(index, 1); // Correct array name
          this.bottleBar.increasePercentage(); // Correct method to increase bottles
          this.bottleBar.render(); // Ensure bottle bar is rendered after collection
      }
  });
}


   draw() {
     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
     this.ctx.translate(this.camera_x,0);
     this.addObjectsToMap(this.level.backgroundObjects);
     //--- space for fixed objects-------
     this.ctx.translate(-this.camera_x,0);
     this.addToMap(this.statusBar);
     this.addToMap(this.coinBar);
     this.addToMap(this.bottleBar);
     this.ctx.translate(this.camera_x,0);

      // other object are here.
     this.addToMap(this.character);  
     this.addObjectsToMap(this.level.clouds);
     this.addObjectsToMap(this.level.enemies);
     this.addObjectsToMap(this.throwableObject);
     this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottle);
     this.ctx.translate(-this.camera_x,0);

     
     
      // the draw method will be repeteadly calls.
      let self = this;
      requestAnimationFrame(function(){
        self.draw();
      });

    }

     addObjectsToMap(objects){
       objects.forEach( o =>{
        this.addToMap(o)
       });
     }

    addToMap(mo){
      if(mo.otherDirection){
         this.flipImage(mo);
      }

      mo.draw(this.ctx);
      mo.drawFrame(this.ctx);
     
      if(mo.otherDirection){
        this.flipImageBack(mo);
      }
    }

    flipImage(mo){
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;

    }

    flipImageBack(mo){
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
}

