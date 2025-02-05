class smallChicken extends  MoveableObject{

    height = 60;
    width = 60;
    y = 370;
   // The 'energy' property represents the health or vitality of the chicken.
   // Initially set to 1, it can be used to track how much life the chicken has left.
    // If this value reaches 0, the chicken can die (this would likely trigger the 'die' method).

    // The 'isDead' property indicates whether the chicken is dead.
    // Initially set to 'false', meaning the chicken is alive when created.
    // If this value becomes 'true', the chicken is considered dead, and movement or animations should stop.
    energy = 1;     
    isDead = false;

    IMAGES_WALKING =[
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    
    IMAGES_DIE =[
        'img/3_enemies_chicken/chicken_small/2_dead',
    ];


    constructor(){
        super().loadImge('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImges(this.IMAGES_WALKING);
        this.loadImges(this.IMAGES_DIE);
        this.offset ={
            top: 10,
            bottom:10,
            left:10,
            right:10,

        };
        this.x =250 + Math.random() *1650;
        this.speed = 0.15 + Math.random() *0.25;

        this.animate();


    }

    animate() {
        // Setting up the interval to move the chicken left continuously
        this.walkingInterval = setInterval(() => {
            this.moveLeft(); // Move the chicken left
            this.playAnimation(); // Animate walking by switching images
        }, 1000 / 60); // Execute 60 times per second
    }
} 
 