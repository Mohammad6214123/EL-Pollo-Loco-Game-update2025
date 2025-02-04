class StatusBar extends DrawableObject{
    

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',  // PIC 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png' // PIC 5


    ];

    Percentage = 100;



    constructor(){
        super();
        this.loadImges(this.IMAGES);
        this.x = 40;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

 // setPercentage(50);
  setPercentage(percentage){    
    this.percentage = percentage; // => 0...5
    let path = this.IMAGES[this. resolvedImageIndex()];
    this.img = this.imgeCache[path];
  }
   resolvedImageIndex(){

       if(this.percentage == 100){

        return 5;
       }   else if (this.percentage > 80){
          return 4;
       } else if (this.percentage > 60){
           return 3;
       } else if (this.percentage > 40){
           return 2;
       } else if (this.percentage > 20){
         return 1;
       } else {
          return 0;
       }
   }

  }


