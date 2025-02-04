const level1 = new Level( 
[
    new chicken(),
    new chicken(),
    new chicken(),
    new Endboss(),
],
[
    new Cloud('img/5_background/layers/4_clouds/1.png',80),
    new Cloud('img/5_background/layers/4_clouds/2.png',450),
    new Cloud('img/5_background/layers/4_clouds/1.png',930),
    new Cloud('img/5_background/layers/4_clouds/1.png',1350),

],
[
    new BackgroundObject('img/5_background/layers/air.png',-719),                  
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png',-719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png',-719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png',-719),

    new BackgroundObject('img/5_background/layers/air.png',0),                  
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png',0),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png',0),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png',0),
    new BackgroundObject('img/5_background/layers/air.png',719),                  
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png',719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png',719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png',719),
    
    new BackgroundObject('img/5_background/layers/air.png',719*2),                  
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png',719*2),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png',719*2),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png',719*2),
    new BackgroundObject('img/5_background/layers/air.png',719*3),                  
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png',719*3),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png',719*3),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png',719*3),

  ],
  [
    new coin(),
    new coin(),
    new coin(),
    new coin(),
    new coin(),
    new coin(),
    new coin(),
    new coin(),
    new coin(),
  ],
  [
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
    new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
  ]



);
