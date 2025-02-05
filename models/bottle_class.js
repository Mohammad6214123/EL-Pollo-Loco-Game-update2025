class Bottle extends MoveableObject{
    y = 350;
    x = 220;
    width = 80;
    height = 80;

    // Initialize the bottle with a random x-coordinate and the specified image,the path to the bottle image

    constructor(imagePath){
       super().loadImge(imagePath);
       this.offset ={
        top:10,
        bottom:10,
        left:10,
        right:10,
       };
       this.x = Math.random() * 2000; // assign a random x-position name.
    }

    
}