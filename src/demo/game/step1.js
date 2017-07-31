game
  .module('game.step1')
  .body(function(){
    Step1 = game.createClass('Step1', {
      init: function() {
        this.config = game.config.settings.scenes.filter(set => set.name === 'step1')[0];
        this.sounds = {
          intro1: new Howl({
            src: [getPrefix() + '/' + this.config.audio[0]]
          }),
          intro2: new Howl({
            src: [getPrefix() + '/' + this.config.audio[1]]
          }),
          intro3: new Howl({
            src: [getPrefix() + '/' + this.config.audio[2]]
          })
        };
      },
      playSound: function(sound) {
        this.sounds[sound].play();
      }
    });
  });