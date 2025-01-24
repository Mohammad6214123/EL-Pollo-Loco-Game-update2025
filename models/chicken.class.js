class chicken extends MoveableObject{
    y = 5;
    
    constructor() {
        super().loadImge('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');// this is chicken image.

       this.y = 200 + Math.random()*500; // the numbers is between 200 and 700
     }
}