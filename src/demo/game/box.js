game
  .module(
    'game.box'
  )
  .body(function() {
    Box = game.createClass('Box', {
      init: function(config) {
        this.config = config;
        this.sprite = new game.Graphics();
        this.sprite.visible = false;
        this.sprite.beginFill(0xFFFFFF);
        this.sprite.lineStyle(4, 0x2B80FF, 1);
        this.sprite.drawRect(config.position.x, config.position.y, config.size.width, config.size.height);
        this.sprite.endFill();

        this.getBounds = () => {
          return this.sprite.getBounds();
        }

        this.printLabel = () => {
          if (this.config.label.show) {
            var textStyle = {
              font: 'bold 18px Arial',
              fill: '#2B80FF',
              align: 'center',
            };
            var bounds = this.sprite.getBounds();
            this.label = new game.Text(this.config.label.text, textStyle);
            this.label.position.set(
              bounds.x + (bounds.width / 2),
              (bounds.y + bounds.height) - 15,
            );
            this.label.anchor.set(0.5);
            this.label.visible = true;
            this.label.addTo(game.scene.stage);

            this.labelStyles = {
              normal: {
                font: 'bold 18px Arial',
                fill: '#2B80FF',
                align: 'center',
              },
              focused: {
                font: 'bold 18px Arial',
                fill: '#2B80FF',
                stroke: '#4a1850',
                strokeThickness: 2,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: true,
                wordWrapWidth: 440,
              },
            };
          }
        }

        game.scene.stage.addChildAt(this.sprite, 4);
        this.printLabel();
      }
    })
  })