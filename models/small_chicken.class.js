class smallChicken extends MoveableObject {

    height = 60;
    width = 60;
    y = 370;
    // The 'energy' property represents the health or vitality of the chicken.
    energy = 1;     
    isDead = false;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DIE = [
        'img/3_enemies_chicken/chicken_small/2_dead.png',
    ];

    constructor() {
        super();
        // Set the initial walking image (first image in the walking images array)
        this.img = new Image();
        this.img.src = this.IMAGES_WALKING[0];  // Initial walking image

        this.offset = {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        };

        this.x = 200 + Math.random() * 500; // The numbers are between 200 and 700
        this.speed = 0.26 + Math.random() * 0.26;

        // Start the animation loop
        this.animate();
    }

     //Start the animation for the chicken movement and image update.
    
    animate() {
        // Set an interval to continuously move the chicken and update the animation
        this.walkingInterval = setInterval(() => {
            this.moveLeft();          // Move the chicken to the left
            this.playAnimation();     // Update the walking animation
        }, 1000 / 60); // 60 FPS (frames per second)
    }

    //Update the walking animation by changing the image.
    
    playAnimation() {
        // Cycle through walking images
        let currentImageIndex = Math.floor(Date.now() / 200) % this.IMAGES_WALKING.length;
        this.img.src = this.IMAGES_WALKING[currentImageIndex]; // Update the image source
    }

    
     //Move the chicken to the left.
     
    moveLeft() {
        this.x -= this.speed; // Move the chicken left by its speed
        if (this.x < 0) {
            this.x = 2000; // If the chicken goes off the left side, reset it to the right side
        }
    }
}
