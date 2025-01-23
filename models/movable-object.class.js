class MoveableObject {
       x = 250;               // global variables
       y = 120;
       img;                     
       height =  150;
       width =   100;

     // load Image('img/test.png')
       loadImge(path){           // this.img =document.getElementById('img') <img id="image" src>
         this.img = new Image();   
         this.img.src = path;
       }
        
       moveRight(){
        console.log('Moving right');
       }

       moveLeft(){
              
       }
   
}