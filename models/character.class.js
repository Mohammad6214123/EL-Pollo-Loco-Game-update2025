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
    'img/2_character_pepe/3_jump/J-39.png'

 ];

 IMAGES_DEAD = [                                                               // here we are defining 
    'img/2_character_pepe/5_dead/D-51.png',
    'img/2_character_pepe/5_dead/D-52.png',
    'img/2_character_pepe/5_dead/D-53.png',
    'img/2_character_pepe/5_dead/D-54.png',
    'img/2_character_pepe/5_dead/D-55.png',
    'img/2_character_pepe/5_dead/D-56.png',
    'img/2_character_pepe/5_dead/D-57.png'


 ];

 IMAGES_HURT = [
    'img/2_character_pepe/4_hurt/H-41.png',
    'img/2_character_pepe/4_hurt/H-42.png',
    'img/2_character_pepe/4_hurt/H-43.png'
 ];







 world;


     constructor() {
        super().loadImge('img/2_character_pepe/2_walk/W-21.png'); // this is pepe image
        this.loadImges(this.IMAGES_WALKING);
        this.loadImges(this.IMAGES_JUMPING);                                // here we are loading the bottom function 
        this.loadImges(this.IMAGES_DEAD);                                   // here we want to run our functins.
        this.loadImges(this.IMAGES_HURT);
        
           this.applyGravity();
            this.animate();
        }

   //      isJumpingOn(mo) {
   //       return (
   //           this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
   //           this.y + this.height - this.offset.bottom < mo.y + mo.offset.top + mo.height &&
   //           this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
   //           this.x + this.offset.left < mo.x + mo.width - mo.offset.right  // I added this code.
   //       );
   //   }
 


        animate(){
            setInterval(() => {
                if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                   this.moveRight();
                   this.otherDirection = false;
                   //this.walking_sound.play();
                }

                if(this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                   // this.walking_sound.play();
                }
              
              

                if(this.world.keyboard.SPACE && !this.isAboveGround()){
                    this.jump();    
                }

                this.world.camera_x = -this.x + 100
            },1000/60);
        

            setInterval(() => {

              if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);     
              
              } else if (this.isHurt()){
                this.playAnimation(this.IMAGES_HURT); 

              }else if(this.isAboveGround()){
                this.playAnimation(this.IMAGES_JUMPING);
              } else{
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {  
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