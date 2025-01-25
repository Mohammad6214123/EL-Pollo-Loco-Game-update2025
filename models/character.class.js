class Character extends MoveableObject {
   
    height = 350;
   x = 100;
   speed =10;
   IMAGES_WALKING =[
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'

 ];
 world;

     constructor() {
        super().loadImge('img/2_character_pepe/2_walk/W-21.png'); // this is pepe image
        this.loadImges(this.IMAGES_WALKING);

            this.animate();
        }

        animate(){
            setInterval(() => {
                if(this.world.keyboard.RIGHT) {
                    this.y += this.speed;
                    this.otherDirection = false;
                }

                if(this.world.keyboard.LEFT) {
                    this.y -= this.speed;
                    this.otherDirection = true;
                }

            },1000/60);
        

            setInterval(() => {
                if (this.world.keyboard.RIGHT ||  this.world.keyboard.LEFT) {  
                    this.y += this.speed; // Move Pepe to the right only when the right arrow key is pressed.
            
                    // Handle walk animation
                    let i = this.currentImage % this.IMAGES_WALKING.length;  
                    let path = this.IMAGES_WALKING[i];
                    this.img = this.imgeCache[path];
                    this.currentImage++;
                
                }
            }, 50);
        

        }

    
    jump(){
       
    }
}