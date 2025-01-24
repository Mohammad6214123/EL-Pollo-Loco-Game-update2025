class chicken extends MoveableObject{
    y = 5;
    x = 280;
    IMAGES_WALKING = [
         'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImge('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');// this is chicken image.

       this.y = 200 + Math.random()*500; // the numbers is between 200 and 700
       this.animate();
       this.loadImges(this.IMAGES_WALKING);
     }

     
     animate(){
      setInterval( () => {
        let i = this.currentImage % this.IMAGES_WALKING.length;  
        let path = this.IMAGES_WALKING[i];
        this.img = this.imgeCache[path];
        this.currentImage++;
  },200);
  }
}