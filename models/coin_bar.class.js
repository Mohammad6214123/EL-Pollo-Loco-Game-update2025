class coinBar extends DrawableObject {
    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    coins = 0;  // Track number of coins collected
    percentage = 0;  // Percentage based on coins collected
    // Initialize the coinbar with default value.
    constructor() {
        super();
        this.loadImges(this.IMAGES_COINBAR);
        this.x = 40;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }

    // Set the percentage and update the displayed image based on the current coin count
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[this.resolvedImageIndex()];
        this.img = this.imgeCache[path]; // this is a storage for our image
    }

    // Increase the coin count by 1 and update the percentage and image
    increaseCoins() {
        if (this.coins < 5) { // Assume 5 coins max for this example, adjust as needed
            this.coins++;
            this.percentage = (this.coins / 5) * 100;  // Assuming 5 coins for 100% progress
            this.setPercentage(this.percentage);
        }
    }

    // Function to update the coin count in the UI (optional)
    updateCoins() {
        const coinCountElement = document.getElementById('coin-count');
        coinCountElement.textContent = this.coins;
    }

    // Resolving image index based on the current percentage
    resolvedImageIndex() {
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
}
