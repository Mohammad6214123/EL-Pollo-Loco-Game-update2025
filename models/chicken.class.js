class chicken extends MoveableObject{
    height = 55;
    width =70;
    y = 360;
    IMAGES_WALKING = [
         'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
         'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImge('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');// this is chicken image.
        this.loadImges(this.IMAGES_WALKING);

       this.x = 200 + Math.random()*500; // the numbers is between 200 and 700
       this.speed = 0.26 +  Math.random() * 0.26;
       this.animate();
       
     }

     
     animate(){
       setInterval(() => {
        
        this.moveLeft();

       },1000/60);

     
      
      setInterval( () => {
        this.playAnimation(this.IMAGES_WALKING);
  },200);

  }
}