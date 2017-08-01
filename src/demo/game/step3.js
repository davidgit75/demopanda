game
  .module('game.step3')
  .body(function(){
    Step3 = game.createClass('Step3', {
      init: function(images, boxes, signals) {
        this.images = images;
        this.boxes = boxes;
        this.signals = signals;
        this.config = game.config.settings.scenes.filter(set => set.name === 'step3')[0];
        this.sounds = {
          intro1: new Howl({
            src: [getPrefix() + '/' + this.config.audio[0]]
          }),
          intro2: new Howl({
            src: [getPrefix() + '/' + this.config.audio[1]]
          }),
          intro3: new Howl({
            src: [getPrefix() + '/' + this.config.audio[2]]
          }),
          intro4: new Howl({
            src: [getPrefix() + '/' + this.config.audio[3]]
          })
        };

        setTimeout(() => this.playSound('intro1'), 500);
        setTimeout(() => this.playSound('intro2'), 5500);
        setTimeout(() => {
          // Move and resize boxes high and low
          var tweensBoxesPosition = {
            high: new game.Tween(this.boxes.high.sprite.position),
            low: new game.Tween(this.boxes.low.sprite.position),
            highLoud: new game.Tween(this.boxes.highLoud.sprite.position),
            highSoft: new game.Tween(this.boxes.highSoft.sprite.position),
            lowLoud: new game.Tween(this.boxes.lowLoud.sprite.position),
            lowSoft: new game.Tween(this.boxes.lowSoft.sprite.position),
          };
          tweensBoxesPosition.high.to({ x: -200, y: 0 }, 1000);
          tweensBoxesPosition.high.interpolation(game.Tween.Interpolation.Bezier);
          tweensBoxesPosition.low.to({ x: -200, y: 0 }, 1000);
          tweensBoxesPosition.low.interpolation(game.Tween.Interpolation.Bezier);
          tweensBoxesPosition.highLoud.to({ x: -350, y: 0 }, 1000);
          tweensBoxesPosition.highLoud.interpolation(game.Tween.Interpolation.Bezier);
          tweensBoxesPosition.highSoft.to({ x: -350, y: 0 }, 1000);
          tweensBoxesPosition.highSoft.interpolation(game.Tween.Interpolation.Bezier);
          tweensBoxesPosition.lowLoud.to({ x: -350, y: 0 }, 1000);
          tweensBoxesPosition.lowLoud.interpolation(game.Tween.Interpolation.Bezier);
          tweensBoxesPosition.lowSoft.to({ x: -350, y: 0 }, 1000);
          tweensBoxesPosition.lowSoft.interpolation(game.Tween.Interpolation.Bezier);

          this.boxes.high.sprite.visible = false;
          this.boxes.low.sprite.visible = false;

          var tweenLabelsRotation = {
            high: new game.Tween(this.boxes.high.label),
            low: new game.Tween(this.boxes.low.label)
          };
          tweenLabelsRotation.high.to({ rotation: -1.6 }, 1000);
          tweenLabelsRotation.low.to({ rotation: -1.6 }, 1000);

          var tweenLabelsPosition = {
            high: new game.Tween(this.boxes.high.label.position),
            low: new game.Tween(this.boxes.low.label.position),
            highLoud: new game.Tween(this.boxes.highLoud.label.position),
            highSoft: new game.Tween(this.boxes.highSoft.label.position),
            lowLoud: new game.Tween(this.boxes.lowLoud.label.position),
            lowSoft: new game.Tween(this.boxes.lowSoft.label.position),
          };
          tweenLabelsPosition.high.to({ x: this.boxes.high.label.x - 200, y: this.boxes.high.label.y - 100 }, 1000);
          tweenLabelsPosition.high.interpolation(game.Tween.Interpolation.Bezier);
          tweenLabelsPosition.low.to({ x: this.boxes.low.label.x - 200, y: this.boxes.low.label.y - 70 }, 1000);
          tweenLabelsPosition.low.interpolation(game.Tween.Interpolation.Bezier);
          tweenLabelsPosition.highLoud.to({ x: this.boxes.highLoud.label.x - 350, y: this.boxes.highLoud.label.y }, 1000);
          tweenLabelsPosition.highLoud.interpolation(game.Tween.Interpolation.Bezier);
          tweenLabelsPosition.highSoft.to({ x: this.boxes.highSoft.label.x - 350, y: this.boxes.highSoft.label.y }, 1000);
          tweenLabelsPosition.highSoft.interpolation(game.Tween.Interpolation.Bezier);
          tweenLabelsPosition.lowLoud.to({ x: this.boxes.lowLoud.label.x - 350, y: this.boxes.lowLoud.label.y }, 1000);
          tweenLabelsPosition.lowLoud.interpolation(game.Tween.Interpolation.Bezier);
          tweenLabelsPosition.lowSoft.to({ x: this.boxes.lowSoft.label.x - 350, y: this.boxes.lowSoft.label.y }, 1000);
          tweenLabelsPosition.lowSoft.interpolation(game.Tween.Interpolation.Bezier);

          var tweenImagesPosition = []
          this.images.map((image, index) => {
            tweenImagesPosition.push(new game.Tween(image.sprite.position));
            tweenImagesPosition[index].to({ x: image.sprite.position.x - 350, y: image.sprite.position.y }, 1000);
            tweenImagesPosition[index].interpolation(game.Tween.Interpolation.Bezier);
            tweenImagesPosition[index].start();
          });

          tweenLabelsRotation.high.start();
          tweenLabelsRotation.low.start();
          tweenLabelsPosition.high.start();
          tweenLabelsPosition.low.start();
          tweenLabelsPosition.highLoud.start();
          tweenLabelsPosition.highSoft.start();
          tweenLabelsPosition.lowLoud.start();
          tweenLabelsPosition.lowSoft.start();
          tweensBoxesPosition.highLoud.start();
          tweensBoxesPosition.highSoft.start();
          tweensBoxesPosition.lowLoud.start();
          tweensBoxesPosition.lowSoft.start();

          tweensBoxesPosition.lowSoft.onComplete(() => this.playSound('intro3'));

          // Rotate labels of high en los boxes
        }, 17000);

        // In the second 22 on intro 3
        setTimeout(() => {
          this.boxes.questionHL = new Box(game.config.settings.groupContainer.filter(set => set.name === 'questionHL')[0]);
          this.boxes.questionHS = new Box(game.config.settings.groupContainer.filter(set => set.name === 'questionHS')[0]);
          this.boxes.questionLL = new Box(game.config.settings.groupContainer.filter(set => set.name === 'questionLL')[0]);
          this.boxes.questionLS = new Box(game.config.settings.groupContainer.filter(set => set.name === 'questionLS')[0]);
          this.boxes.questionHL.setVisible(true);
          this.boxes.questionHS.setVisible(true);
          this.boxes.questionLL.setVisible(true);
          this.boxes.questionLS.setVisible(true);
          this.boxes.signalHL = new Box(game.config.settings.groupContainer.filter(set => set.name === 'signalHL')[0]);
          this.boxes.signalHS = new Box(game.config.settings.groupContainer.filter(set => set.name === 'signalHS')[0]);
          this.boxes.signalLL = new Box(game.config.settings.groupContainer.filter(set => set.name === 'signalLL')[0]);
          this.boxes.signalLS = new Box(game.config.settings.groupContainer.filter(set => set.name === 'signalLS')[0]);
        }, 39000);

        setTimeout(() => {
            this.boxes.signalHL.setVisible(true);
            this.boxes.signalHS.setVisible(true);
            this.boxes.signalLL.setVisible(true);
            this.boxes.signalLS.setVisible(true);
            this.signals.map((signal, i) => {
              this.signals[i].add();
              this.signals[i].setCorrectAudio(signal.config.settings.tmpAudios[0]);
              this.signals[i].setErrorAudio(signal.config.settings.tmpAudios[1]);
              this.signals[i].setVisible(true);
              this.signals[i].setInteractive(true);
              this.signals[i].setAlpha(1);
              if (i===0) signal.setCorners(this.boxes.signalHL, this.boxes.questionHL);
              if (i===1) signal.setCorners(this.boxes.signalHS, this.boxes.questionHS);
              if (i===2) signal.setCorners(this.boxes.signalLL, this.boxes.questionLL);
              if (i===3) signal.setCorners(this.boxes.signalLS, this.boxes.questionLS);
            });
          }, 39500);
      },
      playSound: function(sound) {
        this.sounds[sound].play();
      }
    });
  });