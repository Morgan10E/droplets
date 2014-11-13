var playerDroplet;
var playerScale = 1;
var droplets;
var frame;
var bounds;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'glass');
	//game.world.setBounds(100, 125, 600, 600);

	addBounds();

	addPlayer();

	addDrops();

}

function addBounds() {
	bounds = game.add.group();
	bounds.enableBody = true;
	var vert = bounds.create(game.world.width/32*4 - 1, 0, 'vertical');
	vert.body.immovable = true;
	vert = bounds.create(game.world.width/32*28, 0, 'vertical');
	vert.body.immovable = true;

	var horz = bounds.create(0, game.world.height/32*3 - 1, 'horizontal');
	horz.body.immovable = true;
	horz = bounds.create(0, game.world.height - game.world.height/32*5, 'horizontal');
	horz.body.immovable = true;

	frame = game.add.sprite(0, 0, 'frame');
	game.physics.arcade.enable(frame);
	frame.body.immovable = true;
}

function addPlayer() {
	playerDroplet = game.add.sprite(game.world.width/2, game.world.height/2, 'droplet');
	playerDroplet.scale.setTo(playerScale, playerScale);

	game.physics.arcade.enable(playerDroplet);

	playerDroplet.body.bounce = [0.1, 0.1];

	playerDroplet.body.collideWorldBounds = true;

	playerDroplet.animations.add('left', [1, 2], 7, true);
	playerDroplet.animations.add('right', [5, 6], 7, true);
	playerDroplet.animations.add('up', [4, 3], 7, true);
	playerDroplet.animations.add('down', [7, 8], 7, true);
}


function addDrops() {
	droplets = game.add.group();
	droplets.enableBody = true;
	game.time.events.loop(Phaser.Timer.SECOND, addDrop, this);
}

function addDrop() {
	var droplet  = droplets.create(game.world.width * Math.random(), 0, 'droplet');
	//droplet.scale.setTo(3, 3);
	droplet.body.gravity.y = 20;

	droplet.animations.add('down', [7, 8], 5, true);
	droplet.animations.play('down');

	game.world.bringToTop(frame);
}