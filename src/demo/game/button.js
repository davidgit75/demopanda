game
  .module('game.button')
  .body(function() {
    Button = game.createClass('Button', {
      init: function(config, info) {
        this.config = config;
        this.info = info;
        this.sprite = new game.Sprite(this.config.image.src);
        this.sprite.position.set(this.info.position.x, this.info.position.y);
        this.sprite.anchor.set(this.info.anchor);
        this.sprite.visible = false;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.scale.set(this.info.scale.x, this.info.scale.y);

        this.setVisible = (visible) => this.sprite.visible = visible;

        this.sprite.click = () => {
          this.info.action();
        }

        this.sprite.tap = () => {
          this.info.action();
        }

        game.scene.stage.addChild(this.sprite);
      }
    });
  });