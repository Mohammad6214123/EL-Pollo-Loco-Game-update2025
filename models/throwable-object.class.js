class ThrowableObject extends MoveableObject{

    constructor(x,y){
        super().loadImge('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'); 
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.trow();
    }  
     


    trow(){
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        },25 );
    }
}