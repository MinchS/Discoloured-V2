window.onload = function() {

//Create a new Phaser game, with dimentions of 800px wide and 600px tall
  var game= new phaser.game(800, 600, phaser.AUTO, 'game-world', {preload: preload, create: create, update: update })
  
  var bg1c, bg2c;
  var bg1bw, bg2bw;
  var gameState = 0; //Game is starting
  var level = 1;  //Current game level
  var button; //The menu button
  var environmentGroup; //Group for all world objects such as platforms and background
  var playerGroup;  //Group for the player and and player info elements

  var platforms;  //Group of platforms

  //Player gobal variables
  var player; //The player object
  var speed = 10;  //The speed the player moves at
  var MAX_SPEED = 300;  //The maximum speed of the player
  var jumpForce = 350;  //The force that the player will jump with
  var controls; //The controls for the player

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
