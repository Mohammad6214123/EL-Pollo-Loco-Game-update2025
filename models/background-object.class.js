class BackgroundObject extends MoveableObject{

     width = 720;
     height = 500;
    constructor(imagePath,x,y){
        super().loadImge(imagePath);
        this.x =  x;
        this.y = 480- this.height;
    }

}