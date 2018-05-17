window.onload = function() {

//Create a new Phaser game, with dimentions of 800px wide and 600px tall
  var game= new phaser.game(800, 600, phaser.AUTO, 'game-world', {preload: preload, create: create, update: update })
  
  var bg1c, bg2c;
  var bg1bw, bg2bw;
//Preload function, where we can load all the assets that will be used
  function preload(){
	  game.load.spritesheet('player', 'assets/character.png', 25, 36);
	  game.load.image('background', 'assets/background.png');
 
  }

//Create function, where all the initial objects are created
  function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	  
	  bg1c = game.add.sprite(0,0,'bg');
	  bg2c = game.add.sprite(game.width,0,'bg');
	  
         game.physics.arcade.enable(bg1);
		bg1c.body.velocity.x = -20;
		game.physics.arcade.enable(bg2);
		bg2c.body.velocity.x = -20;
	  
	game.add.sprite(0,0,'player');
	player.body.collideWorldBounds = true;
        controls = game.input.keyboard.addKeys(
  {
    'jump': Phaser.KeyCode.W,
    'left': Phaser.KeyCode.A,
    'right': Phaser.KeyCode.D
    'crouch': Phaser.KeyCode.S
  }
);
//Update function, runs every frame
  function update(){
	  
if(controls.left.isDown){
    player.body.velocity.x = -150;
    player.animations.play('left');
  }
  else if(controls.right.isDown){
    player.body.velocity.x = 150;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
    player.body.velocity.x = 0;
  }

  if(controls.jump.isDown && player.body.touching.down && hittingPlatform) {
    player.body.velocity.y = -350;
	  
  function crouch () { //crouching function
	  
  if(bg1.x < -game.width) {
     bg1.x = game.width;
     } else if (bg2.x < -game.width){
     bg2.x = game.width;} 
  }
} //end of update

}; //end of program
