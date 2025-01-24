class chicken extends MoveableObject{
    y = 30;
    x = 350;
    width = 44;
    height = 88;
    IMAGES_WALKING = [
         'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImge('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');// this is chicken image.
        this.loadImges(this.IMAGES_WALKING);

       this.y = 200 + Math.random()*500; // the numbers is between 200 and 700
       this.speed = 0.26 +  Math.random() * 0.26;
       this.animate();
       
     }

     
     animate(){
      this.moveLeft();
      
      setInterval( () => {
        let i = this.currentImage % this.IMAGES_WALKING.length;  
        let path = this.IMAGES_WALKING[i];
        this.img = this.imgeCache[path];
        this.currentImage++;
  },200);
  }
}