class BackgroundObject extends MoveableObject{

     width = 720;
     height = 500;
    constructor(imagePath,x,y){
        super().loadImge(imagePath);
        this.y =  y;
        this.x = 480- this.height;
    }

}