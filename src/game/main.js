var game = new Phaser.Game(
    768,
    768,
    Phaser.AUTO,
    'game',
    {
        preload:preload,
        create:create,
        update:update
    }
);