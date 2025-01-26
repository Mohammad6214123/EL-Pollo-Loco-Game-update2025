class MoveableObject {
       x = 120;               // global variables
       y = 280;
       img;                     
       height =  150;
       width =   100;
       imgeCache = {};
       currentImage = 0;
       speed = 0.15;
       otherDirection = false;

     // load Image('img/test.png')
       loadImge(path){           // this.img =document.getElementById('img') <img id="image" src>
         this.img = new Image();   
         this.img.src = path;
       }
        

       /**
        * 
        * @param {Array} arr - ['img/imge1.png', 'img/imges2.png',....]
        */
       loadImges(arr){  
        arr.forEach((path) => {
          let img =  new Image();
          img.src = path;
          img.style = 'transform: scalex(-1)';
          this.imgeCache[path] = img;
         
        });
         

       }
         playAnimation(images){
          let i = this.currentImage % this.IMAGES_WALKING.length;
          let path = images[i];
          this.img = this.imgeCache[path];
          this.currentImage++;
         }

       moveRight(){
        console.log('Moving right');
       }

       moveLeft(){
        setInterval(()=>{
          this.x -= this.speed;
    
         },1000/60);
       }
   
}