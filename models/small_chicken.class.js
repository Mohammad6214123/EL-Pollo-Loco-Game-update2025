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
}