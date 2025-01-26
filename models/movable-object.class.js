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
       speedY = 0;
       acceleration = 2.5;
       energy = 100;




       applyGravity(){
          setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
          }
          },1000/25);

        }

         isAboveGround(){
            return this.y < 180;
         
       }

     // load Image('img/test.png')
       loadImge(path){           // this.img =document.getElementById('img') <img id="image" src>
         this.img = new Image();   
         this.img.src = path;
       }
        
       draw(ctx){
              ctx.drawImage(this.img ,this.x ,this.y, this.width, this.height);
       }
       
       drawFrame(ctx){

        if(this instanceof Character || this instanceof chicken){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle =' blue';
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
      }
       }

       // character.isColliding(chicken)
       isColliding(mo){
         return this.x + this.width > mo.x &&
                 this.y + this.height > mo.y &&
                 this.x < mo.x &&
                 this.y < mo.y + mo.height
       }
       

       hit(){
        this.energy -=5;
        if(this.energy < 0){
           this.energy = 0;
        }
       }
       


       isDead(){
        return this.energy == 0;
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
        this.x += this.speed;
       
       }

       moveLeft(){
        
          this.x -= this.speed;
         
       }

    jump(){
      this.speedY = 30;
    }
}