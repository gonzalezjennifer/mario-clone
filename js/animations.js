const createAnimations = (game) => {
	game.anims.create({
		key: 'mario-walk',
		frames: game.anims.generateFrameNumbers(
			'mario',
			{	start: 1, end: 3	}
		),
		frameRate: 12,
		repeat: -1
	})

	game.anims.create({
		key: 'mario-dead',
		frame: [{	key: 'mario', frame: 4	}]
	})

	game.anims.create({
		key: 'mario-jump',
		frame: [{	key: 'mario', frame: 5	}]
	})

	game.anims.create({
		key: 'mario-idle',
		frame: [{	key: 'mario', frame: 0	}]
	})
}