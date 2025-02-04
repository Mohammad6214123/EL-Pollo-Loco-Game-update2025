class coinBar extends  DrawableObject{

    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    percentage = 0;  // normally the coinbar is starting from the zero.
    // Initialize the coinbar with default value.
    constructor(){
        super();
        this.loadImges(this.IMAGES_COINBAR);
        this.x = 40;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);

    }
     // here we are seting the percentage and update showed Image the new percentage value. 
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[this. resolvedImageIndex()];
        this.img = this.imgeCache[path]  // this is a stograge for our image.
    }


    // increase the percentage value by 20 when the value is below 100.

    increasePercentage(){
        if(this.percentage < 100){  // when percentage is belwo humdered conditon.
          this.setPercentage(this.percentage + 20);


        }
    }

    // now here we write the animate function.
    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINBAR);
        }, 500);
    }

    // resolved the ImageIndex based on the current percentage.
       
    resolvedImageIndex(){
        if(this.percentage >= 100){
            return 5; // pic number 5.
        } else if(this.percentage >= 80){
             return 4;
        } else if (this.percentage >= 60){
            return 3;
        } else if(this.percentage >= 40){
            return 2;
        } else if(this.percentage >= 20){
            return 1;
        } else{       // last condition 
           return 0;
        }
    }

}