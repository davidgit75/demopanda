game
  .module(
    'game.background'
  )
  .body(function() {
    Background = game.createClass('Background', {
      settings: game.config.settings.components.filter(conf => conf.name === 'background')[0],
      init: function() {
        this.sprite = new game.Sprite(this.settings.image.src);
        this.sprite.with = game.system.with
        this.sprite.height = game.system.height

        this.setVisible = (visible) => {
          this.sprite.visible = visible;
        }

        game.scene.stage.addChild(this.sprite);
      }
    })
  })