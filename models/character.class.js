class Character extends MoveableObject {
   
   height =250;
   y = 80;     // this y is for the pepe.
   speed =10;
   IMAGES_WALKING =[
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'

 ];

 IMAGES_JUMPING = [
    'img/2_character_pepe/3_jump/J-31.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-39.png',

 ];



 world;

     constructor() {
        super().loadImge('img/2_character_pepe/2_walk/W-21.png'); // this is pepe image
        this.loadImges(this.IMAGES_WALKING);
        this.loadImges(this.IMAGES_JUMPING);
           this.applyGravity();
            this.animate();
        }

        animate(){
            setInterval(() => {
                if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                   this.moveRight();
                   this.otherDirection = false;
                  // this.walking_sound.play();
                }

                if(this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                   // this.walking_sound.play();
                }
              
              

                if(this.world.keyboard.SPACE && !this.isAboveGround()){
                    this.jump();    
                }

                this.world.camera_x = -this.x + 100;
            },1000/60);
        

            setInterval(() => {


              if(this.isAboveGround()){
                this.playAnimation(this.IMAGES_JUMPING);
              } else{

                if (this.world.keyboard.RIGHT ||  this.world.keyboard.LEFT) {  
                    
            
                    // Handle walk animation
                   this.playAnimation(this.IMAGES_WALKING);
                }
            }
            }, 50);
        

        }

    
    jump(){
       this.speedY = 30;
    }
}