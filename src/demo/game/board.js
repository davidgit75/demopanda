game
  .module(
    'game.board'
  )
  .body(function() {
    Board = game.createClass('Board', {
      settings: game.config.settings.components.filter(set => set.name === 'board')[0],
      init: function() {
        this.sprite = new game.Sprite(this.settings.image.src);
        this.sprite.width = 0.95 * game.system.width;
        this.sprite.height = 0.9 * game.system.height;
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.position.x = game.system.width / 2;
        this.sprite.position.y = game.system.height / 2;
        this.sprite.visible = false;

        game.scene.stage.addChild(this.sprite);
      },
      setVisible: function(visible) {
        this.sprite.visible = visible;
      }
    })
  })