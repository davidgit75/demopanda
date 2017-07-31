var addAllAssets = function() {
  // get images from components
  game.config.settings.components.map(comp => game.addAsset(comp.image.src, comp.image.src));
  // get images from images (draggable)
  game.config.settings.images.map(img => game.addAsset(img.src, img.src));
}

var addAllAudios = function() {
  game.addAudio('Audios/General/Step1/step1_intro1.mp3', 'step1_intro1');
  game.addAudio('Audios/General/Step1/step1_intro2.mp3', 'step1_intro2');
  game.addAudio('Audios/General/Step1/step1_intro3.mp3', 'step1_intro3');
}

var getPrefix = function() {
  return 'assets'
}