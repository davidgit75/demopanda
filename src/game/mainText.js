game
  .module(
    'game.mainText'
  )
  .body(function() {
    MainText = game.createClass('MainText', {
      init: function() {
        this.text = new game.Text('Dichotomous Key',  { fontSize: 20, align: 'center', fill: '#2B80FF' });
        this.text.position.set(400, 150);
				this.text.addTo(game.scene.stage);
				setTimeout(() => {
					this.text.setStyle({ fontSize: 20, align: 'center', fill: '#2B80FF', dropShadowAngle: Math.PI / 4, dropShadow: true });
				}, 500);
        game.scene.stage.addChild(this.text);
      }
    })
  })