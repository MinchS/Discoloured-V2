window.onload = function() {

//Create a new Phaser game, with dimentions of 800px wide and 600px tall
  var game= new phaser.game(800, 600, phaser.AUTO, 'game-world', {preload: preload, create: create, update: update })

//Preload function, where we can load all the assets that will be used
  function preload(){
	  game.load.spritesheet('player', 'assets/character.png', 25, 36);

  }

//Create function, where all the initial objects are created
  function create(){
	game.add.sprite(0,0,'player');
  }

//Update function, runs every frame
  function update(){

  }
};
