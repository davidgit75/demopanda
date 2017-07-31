game
  .module(
    'game.mainText'
  )
  .body(function() {
    MainText = game.createClass('MainText', {
      init: function() {
        this.text = new game.Text('Dichotomous Key',  { font: 'bold 28px Arial', align: 'center', fill: '#2B80FF' });
        this.text.position.set(400, 150);
				this.text.addTo(game.scene.stage);
        game.scene.stage.addChild(this.text);

        var unerline = new Line({ position: { x: 400, y: 180 }, size: { width: 240, height: 0.5 }, color: 'FF0000', width: 2 })
      }
    })
  })