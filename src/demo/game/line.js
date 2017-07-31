game
  .module('game.line')
  .body(function() {
    Line = game.createClass('Line', {
      init: function(config) {
        this.config = config;
        this.sprite = new game.Graphics();
        this.sprite.visible = true;
        this.sprite.beginFill(`0x${this.config.color}`);
        this.sprite.lineStyle(this.config.width, `0x${this.config.color}`, 1);
        this.sprite.drawRect(this.config.position.x, this.config.position.y, this.config.size.width, this.config.size.height);
        this.sprite.endFill();
        game.scene.stage.addChild(this.sprite);
      }
    });
  });