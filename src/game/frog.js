game
  .module(
    'game.frog'
  )
  .body(function() {
    Frog = game.createClass('Frog', {
      settings: game.config.settings.components.filter(set => set.name === 'frog')[0],
      init: function(callback) {
        var spriteSheet = new game.SpriteSheet(this.settings.image.src, 231, 256);
        var initAnimation = spriteSheet.anim(10, 2);
        initAnimation.anchor.set(0.5, 0.5);
        initAnimation.position.set(game.system.width / 2, (game.system.height / 2) + 50);
        initAnimation.animationSpeed = 0.05;
        initAnimation.play(false);

        var finalAnimation = spriteSheet.anim(3, 0);
        finalAnimation.anchor.set(0.5, 0.5);
        finalAnimation.position.set(100, 580);
        finalAnimation.animationSpeed = 0.02;

        var tweenMove = new game.Tween(initAnimation.position);
        tweenMove.to({ x: 100, y: 580 }, 1000);
        tweenMove.easing(game.Tween.Easing.Quadratic.InOut);
        tweenMove.interpolation(game.Tween.Interpolation.Bezier);

        var tweenScale = new game.Tween(initAnimation.scale);
        tweenScale.to({ x: 0.5, y: 0.5 }, 1000);

        setTimeout(function(){
          tweenMove.onComplete(function() {
            finalAnimation.play();
            game.scene.stage.removeChild(initAnimation);
            finalAnimation.addTo(game.scene.stage);
          });
          tweenScale.onComplete(function() {
            finalAnimation.scale.set(0.5, 0.5);
            callback();
          });
          tweenMove.start();
          tweenScale.start();
        }, 2500);

        initAnimation.addTo(game.scene.stage);
      }
    })
  })