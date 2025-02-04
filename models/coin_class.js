class coin extends MoveableObject{
    x = 200;
    y = 150;
    width = 140;
    height = 140;
    coin_sound = new Audio('');

    // Initialize the coin with a random position and loads its image.
    constructor(){
        super().loadImge('img/8_coin/coin_1.png');
        this.x = Math.random() * 2100;
        this.y = Math.random() * 180;
        this.offset = {  // Distance of the coin.
            top :20,
            bottom : 20,
            left : 20,
            right: 20,
        };

    }

    playCollectCoinAudio(){
        this.coin_sound.play();
    }
}