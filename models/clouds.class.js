class Cloud extends MoveableObject {
   x = 50;
    width = 300;
    height = 200;

    constructor() {
        super().loadImge('img/5_background/layers/4_clouds/1.png');// this is clouds image.

       this.y =  Math.random()*500; // the numbers is between 200 and 700
       this.animate();
       
     }

     animate(){
     setInterval(()=>{
      this.x -=5;

     },1000);

      

     }
}