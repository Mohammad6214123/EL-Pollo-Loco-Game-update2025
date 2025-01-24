class World {
    character = new Character();
     enemies = [
        new chicken(),
        new chicken(),
        new chicken(),
    ];
    clouds = [
      new Cloud()
    ];
    backgroundObjects = [
      new BackgroundObject('img/5_background/layers/air.png',0,0),   //background
      new BackgroundObject('img/5_background/layers/3_third_layer/1.png',0,0),
      new BackgroundObject('img/5_background/layers/2_second_layer/1.png',0,0),
      new BackgroundObject('img/5_background/layers/1_first_layer/1.png',0,0),
      
    ];
    ctx;
    canvas;
    keyboard;
   
   constructor(canvas,keyboard){
       this.ctx = canvas.getContext("2d");
       this.canvas = canvas;
       this.keyboard = keyboard;
       this.draw();
       this.setWorld();
       
   }

    setWorld(){
      this.character.world = this;
    }


   draw() {
     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

     this.addObjectsToMap(this.backgroundObjects);
     this.addToMap(this.character);  
     this.addObjectsToMap(this.enemies);
     this.addObjectsToMap(this.clouds);
    
     
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
      this.ctx.drawImage(mo.img,mo.y,mo.x,mo.width,mo.height);
    }
}

