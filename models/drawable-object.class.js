class DrawableObject {
    img;   
    imgeCache = {};
    currentImage = 0;
    x = 120;               // global variables
    y = 280;
                      
    height =  150;
    width =   100;
   
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


}
