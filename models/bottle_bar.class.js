class bottleBar extends DrawableObject {
    percentage = 0; // This value affects the bottle image displayed (from 0% to 100%)
    Bottles = 0; // Max capacity for bottles
    IMAGES_BOTTLEBAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    constructor() {
        super();
        this.loadImges(this.IMAGES_BOTTLEBAR);
        this.x = 40;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImage()];
        this.img = this.imgeCache[path];
    }

    increasePercentage() {
        if (this.canAddBottle()) {
            this.setPercentage(this.percentage + 20); // Increase by 20%
        }
    }

    resolveImage() {
        if (this.percentage >= 100) {
            return 4; // 100%
        } else if (this.percentage >= 80) {
            return 3; // 80%
        } else if (this.percentage >= 60) {
            return 2; // 60%
        } else if (this.percentage >= 40) {
            return 1; // 40%
        } else {
            return 0; // 20%
        }
    }

    canAddBottle() {
        return this.percentage < 100;
    }   
}
