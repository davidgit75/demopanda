game
  .module('game.step2')
  .body(function(){
    Step2 = game.createClass('Step2', {
      init: function(images, boxes, next) {
        this.images = images;
        this.boxes = boxes;
        this.config = game.config.settings.scenes.filter(set => set.name === 'step2')[0];
        this.sounds = {
          intro1: new Howl({
            src: [getPrefix() + '/' + this.config.audio[0]]
          }),
          intro2: new Howl({
            src: [getPrefix() + '/' + this.config.audio[1]]
          })
        };

        // Move boxes and hide main box
        var tweensBoxesAlpha = {
          main: new game.Tween(this.boxes.main.sprite)
        };
        tweensBoxesAlpha.main.to({ alpha: 0 }, 500);

        var tweensBoxesPosition = {
          main: new game.Tween(this.boxes.main.sprite.position),
          high: new game.Tween(this.boxes.high.sprite.position),
          low: new game.Tween(this.boxes.low.sprite.position),
        };
        tweensBoxesPosition.high.to({ x: -300, y: 0 }, 1000);
        tweensBoxesPosition.high.interpolation(game.Tween.Interpolation.Bezier);
        tweensBoxesPosition.low.to({ x: -300, y: 0 }, 1000);
        tweensBoxesPosition.low.interpolation(game.Tween.Interpolation.Bezier);

        var tweensLabelsPosition = {
          high: new game.Tween(this.boxes.high.label.position),
          low: new game.Tween(this.boxes.low.label.position),
        };
        tweensLabelsPosition.high.to({ x: 400, y: 390 }, 1000);
        tweensLabelsPosition.high.interpolation(game.Tween.Interpolation.Bezier);
        tweensLabelsPosition.low.to({ x: 400, y: 630 }, 1000);
        tweensLabelsPosition.low.interpolation(game.Tween.Interpolation.Bezier);

        var tweenImagesPosition = []
        this.images.map((image, index) => {
          tweenImagesPosition.push(new game.Tween(image.sprite.position));
          tweenImagesPosition[index].to({ x: image.sprite.position.x - 300, y: image.sprite.position.y }, 1000);
          tweenImagesPosition[index].interpolation(game.Tween.Interpolation.Bezier);
        });

        setTimeout(() => {
          this.playSound('intro1');
          tweensBoxesAlpha.main.start();
        }, 500);
        setTimeout(() => {
          tweensBoxesPosition.high.start();
          tweensBoxesPosition.low.start();
          tweensLabelsPosition.high.start();
          tweensLabelsPosition.low.start();
          tweenImagesPosition.map(image => image.start());
        }, 1000);

        tweenImagesPosition[7].onComplete(() => {
          this.boxes.highLoud = new Box(game.config.settings.groupContainer.filter(set => set.name === 'loudHighImagesContainer')[0]);
          this.boxes.highSoft = new Box(game.config.settings.groupContainer.filter(set => set.name === 'softHighImagesContainer')[0]);
          this.boxes.lowLoud = new Box(game.config.settings.groupContainer.filter(set => set.name === 'loudLowImagesContainer')[0]);
          this.boxes.lowSoft = new Box(game.config.settings.groupContainer.filter(set => set.name === 'softLowImagesContainer')[0]);

          this.boxes.highLoud.sprite.visible = true;
          this.boxes.highSoft.sprite.visible = true;
          this.boxes.lowLoud.sprite.visible = true;
          this.boxes.lowSoft.sprite.visible = true;

          setTimeout(() => this.playSound('intro2'), 3000);
          setTimeout(() => {
            // Set interacive of images and set their origin and target
            this.images.map((image, index) => {
              image.setInteractive(true);
              image.setOriginalPosition(image.getPosition());
              var newTarget;
              if (image.config.settings.type.a === 'high') {
                if (image.config.settings.type.b === 'loud') {
                  newTarget = this.boxes.highLoud;
                } else {
                  newTarget = this.boxes.highSoft;
                }
              } else {
                if (image.config.settings.type.b === 'loud') {
                  newTarget = this.boxes.lowLoud;
                } else {
                  newTarget = this.boxes.lowSoft;
                }
              }
              image.setCorners(image.config.settings.type.a === 'high' ? this.boxes.high : this.boxes.low, newTarget)
            });
          }, 6000);
        });
      },
      playSound: function(sound) {
        this.sounds[sound].play();
      }
    });
  });