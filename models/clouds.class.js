class Cloud extends MoveableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.15;

    constructor() {
        super().loadImge('img/5_background/layers/4_clouds/1.png');// this is clouds image.

       this.x =  Math.random()*500; // the numbers is between 200 and 700
       this.animate();
       
     }

     animate(){
     this.moveLeft();
      

     }

    
}