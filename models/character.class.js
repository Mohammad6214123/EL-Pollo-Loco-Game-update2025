class Character extends MoveableObject {
   
    height = 350;
   x = 100;
   IMAGES_WALKING =[
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'

 ];
currentImage = 0;

     constructor() {
        super().loadImge('img/2_character_pepe/2_walk/W-21.png'); // this is pepe image
        this.loadImges(this.IMAGES_WALKING);

            this.animate();
        }

        animate(){
            setInterval( () => {
           let i = this.currentImage % this.IMAGES_WALKING.length;  // let i = 0 % 6; 0; Rest = 0 .  
           let path = this.IMAGES_WALKING[i];
            this.img = this.imgeCache[path];
            this.currentImage++;
        },1000);
        }
    
    jump(){
       
    }
}