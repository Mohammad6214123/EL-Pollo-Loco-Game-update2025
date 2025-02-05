class bottleBar extends  DrawableObject{
    percentage = 0; //This value affects the bottle image displayed.from 0% to 100%)
    Bottles  = 0; // In this case, the bottle has a maximum capacity of 5 units.
    // Initialize the bottlebar and set the first percentage.
    IMAGES_BOTTLEBAR =[
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    

    constructor(){
        super();
        this.loadImges(this.IMAGES_BOTTLEBAR);
        this.x = 40;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    // set the bottlebar fill percentage.number,percentage new percentage to set.
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImage()];
        this.img = this.imgeCache[path];
    }


    // increase the bottlebar fill percentage if possible.
    increasePercentage() {
        if (this.canAddBottle()) {
            this.setPercentage(this.percentage + 20); 
        }
    }
    // Resolves the correct image index based on the current percentage. Number the index of the image to display.

    resolveImage() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

    // add bottle to the bar if there is free space.
    addBottle(){
        if(this.percentage < 100){
            this.percentage +=20;   
        }
    }

    // check if a bottle can be added if True a bottle can be added other not added if false.
    canAddBottle(){
        return this.percentage < 100;
    }

    // update the bottlebar image based on the current percentage.numner the index of the image to display.
    updateBottleBar(){
        if(this.percentage == 100){
            return 5;
        } else if(this.percentage > 80){
            return 4;
        } else if(this.percentage > 60){
            return 3;
        } else if(this.percentage > 40){
            return 2;
        } else if(this.percentage > 20){
            return 1;
        } else{
            return 0;
        }
    }
}