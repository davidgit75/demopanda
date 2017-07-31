game
.module(
	'game.main'
)
.require(
	'engine.core',
	'game.step1',
	'game.step2',
	'game.step3',
	'game.background',
	'game.board',
	'game.frog',
	'game.mainText',
	'game.box',
	'game.interactiveimage'
)
.body(function() {
	addAllAssets();

	Main = game.createScene('Main', {
		init: function() {
			this.step1 = new Step1();
			this.background = new Background();
			this.board = new Board();
			this.correctMovements = 0;

			this.increaseMovements = () => {
				this.correctMovements += 1;
				if (this.correctMovements === 8) {
					this.step2 = new Step2(this.images, this.boxes)
				} else if (this.correctMovements == 16) {
					this.step3 = new Step3(this.images, this.boxes)
				}
			}

			setTimeout(() => {
				this.board.setVisible(true);
			}, 1000);

			setTimeout(() => {
				this.mainText = new MainText();
        this.step1.playSound('intro1');
			}, 2000);

			this.addFrogAndShowBoxes = () => {
				this.boxes = {
					main: new Box(game.config.settings.groupContainer.filter(set => set.name === 'originImages')[0]),
				};
				this.boxes.main.sprite.visible = true;
				this.images = [
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image1_high')[0], position: { x: 270, y: 250 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image2_high')[0], position: { x: 380, y: 250 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image3_high')[0], position: { x: 270, y: 370 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image4_high')[0], position: { x: 380, y: 370 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image1_low')[0], position: { x: 270, y: 500 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image2_low')[0], position: { x: 380, y: 500 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image3_low')[0], position: { x: 270, y: 600 } }, () => this.increaseMovements()),
					new InteractiveImage({ settings: game.config.settings.images.filter(set => set.name === 'image4_low')[0], position: { x: 380, y: 600 } }, () => this.increaseMovements()),
				];

				var tweenMoveMainBox = new game.Tween(this.boxes.main.sprite.position);
				tweenMoveMainBox.to({ x: -400, y: 0 }, 1000);
				tweenMoveMainBox.interpolation(game.Tween.Interpolation.Bezier);
				setTimeout(() => {
					this.step1.playSound('intro2');
					tweenMoveMainBox.start();
				}, 500);

				tweenMoveMainBox.onComplete(() => {
					this.boxes.high = new Box(game.config.settings.groupContainer.filter(set => set.name === 'highImagesContainer')[0]);
					this.boxes.low = new Box(game.config.settings.groupContainer.filter(set => set.name === 'lowImagesContainer')[0]);
					this.boxes.high.sprite.visible = true;
					this.boxes.low.sprite.visible = true;
					this.images.map((image, index) => {
						image.setAlpha(1);
						var newTarget;
						if (image.config.settings.type.a === 'high') {
							newTarget = this.boxes.high;
						} else {
							newTarget = this.boxes.low;
						}
						image.setCorners(this.boxes.main.sprite, newTarget);
					});
					setTimeout(() => this.step1.playSound('intro3'), 3500);
					setTimeout(() => {
						this.images.map((img, index) => {
							img.setInteractive(true);
						});
					}, 9000);
				});
			}

			setTimeout(() => {
				this.frog = new Frog(() => this.addFrogAndShowBoxes());
			}, 7000);
		},
	});

	console.log('game', game.System);
	game.System.pauseOnHide = true;
	game.System.resizeToFill = true;
	// game.System.scaleToFit = true;
	game.System.rotateScreen = true;
	game.System.rotateMsg = 'Rotate the device please xD my friend';
	game.System.rotateImg = 'Images/logo.png';
	// game.System.orientation = game.System.LANDSCAPE;

	game.start();
});
