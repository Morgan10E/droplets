var cursors;

function update() {
	
	controlPlayer();
	dropCollisions();

}

function controlPlayer() {
	cursors = game.input.keyboard.createCursorKeys();

	playerDroplet.body.velocity.x = 0;
	playerDroplet.body.velocity.y = 0;

	if (cursors.left.isDown) {
		playerDroplet.body.velocity.x = -150;
		playerDroplet.animations.play('left');
	} else if (cursors.right.isDown) {
		playerDroplet.body.velocity.x = 150;
		playerDroplet.animations.play('right');
	} else if (cursors.down.isDown) {
		playerDroplet.body.velocity.y = 150;
		playerDroplet.animations.play('down');
	} else if (cursors.up.isDown) {
		playerDroplet.body.velocity.y = -150;
		playerDroplet.animations.play('up');
	} else {
		playerDroplet.animations.stop();
		playerDroplet.frame = 0;
	}
}

function dropCollisions() {
	game.physics.arcade.collide(playerDroplet, bounds);
	game.physics.arcade.overlap(playerDroplet, droplets, absorb, null, this);
}

function absorb(playerDroplet, droplet) {
	droplet.kill();

	playerScale += 0.1;
	playerDroplet.scale.setTo(playerScale, playerScale);
}