game
  .module(
    'game.interactiveimage'
  )
  .body(function(sound) {
    InteractiveImage = game.createClass('InteractiveImage', {
      init: function(config, callbackFinishDrag) {
        this.prefix = getPrefix();
        this.dragging = false;
        this.data = null;
        this.config = config;
        this.position = this.config.position;
        this.audio = this.config.settings.audio;
        this.callbackFinishDrag = callbackFinishDrag;
        this.sprite = new game.Sprite(this.config.settings.src);
        this.sprite.visible = true;
        this.sprite.alpha = 0;
        this.sprite.cursor = 'pointer';
        this.sprite.position.set(this.config.position.x, this.config.position.y);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.scale.set(0.8, 0.8);
        this.sprite.interactive = false;

        this.audios = {
          yes: new Howl({ src: [this.prefix + '/Audios/yes.mp3']}),
          no: new Howl({ src: [this.prefix + '/Audios/no.mp3']}),
          error: new Howl({ src: [this.prefix + '/Audios/error.mp3']}),
          correct: new Howl({ src: [this.prefix + '/Audios/correct.mp3']}),
          congrats: new Howl({ src: [this.prefix + '/Audios/congrats.mp3']}),
          sound: new Howl({ src: [this.prefix + '/' + this.audio]}),
          yes: new Howl({ src: [this.prefix + '/Audios/yes.mp3']})
        };

        this.setAlpha = function(alpha) {
          this.sprite.alpha = alpha;
        }

        this.setScale = function(x, y) {
          this.sprite.scale.set(x, y);
        }

        this.onDragStart = function(event) {
          this.sprite.anchor.set(0.5);
          this.data = event;
          this.dragging = true;
        }

        this.onDragEnd = function() {
          this.dragging = false;
          this.data = null;
          this.audios.sound.stop();
          this.isInsideTarget();
        }

        this.onDragMove = function() {
          if (this.dragging) {
            var newPosition = this.data.global;
            this.sprite.position.set(newPosition.x, newPosition.y);
          }
        }
        

        // Events tap (mobile devices)
        this.sprite.tap = () => this.audios.sound.play();
        this.sprite.touchstart = event => this.onDragStart(event);
        this.sprite.touchend = (event) => this.onDragEnd(event);
        this.sprite.touchendoutside = event =>  this.onDragEnd(event);
        this.sprite.touchmove = () => this.onDragMove();

        // Events mouse
        this.sprite.mousedown = event => this.onDragStart(event);
        this.sprite.mouseup = () => this.onDragEnd();
        this.sprite.mouseupoutside = event =>  this.onDragEnd(event);
        this.sprite.mousemove = () => this.onDragMove();
        this.sprite.mouseover = () => this.audios.sound.play();
        this.sprite.mouseout = () => this.audios.sound.stop();

        this.setOrigin = (origin) => {
          this.origin = origin;
        }

        this.setTarget = (target) => {
          this.target = target;
        }

        // Define corners to know what is the correct target
        this.defineCorners = () => {
          this.corners = {
            in: {
              lt: { x: this.origin.x, y: this.origin.y },
              rt: { x: this.origin.x + this.origin.width, y: this.origin.y },
              lb: { x: this.origin.x, y: this.origin.y + this.origin.height },
              rb: { x: this.origin.x + this.origin.width, y: this.origin.y + this.origin.height },
            },
            out: {
              lt: { x: this.target.x, y: this.target.y },
              rt: { x: this.target.x + this.target.width, y: this.target.y },
              lb: { x: this.target.x, y: this.target.y + this.target.height },
              rb: { x: this.target.x + this.target.width, y: this.target.y + this.target.height },
            },
          };
        }

        // set corners to update origin and target
        this.setCorners = (origin, target) => {
          this.setOrigin(origin.getBounds());
          this.setTarget(target.getBounds());
          this.defineCorners();
        }

        this.getPosition = () => {
          return this.position;
        }

        this.setOriginalPosition = (position) => {
          this.position.x = position.x;
          this.position.y = position.y;
        }

        this.setInteractive = (interactive) => {
          this.sprite.interactive = interactive;
        }

        this.setCallbackFinishDrag = (callbackFinishDrag) => {
          this.callbackFinishDrag = callbackFinishDrag;
        }

        this.isInsideTarget = () => {
          var positionLeftTop = {
            x: this.sprite.x - (this.sprite.width / 2),
            y: this.sprite.y - (this.sprite.height / 2),
          };

          if (
            ((positionLeftTop.x > this.corners.out.lt.x) && (positionLeftTop.x < this.corners.out.rt.x))
            &&
            ((positionLeftTop.y > this.corners.out.lt.y) && (positionLeftTop.y < this.corners.out.lb.y))
          ) {
            this.sprite.interactive = false;
            this.audios.correct.play();
            this.callbackFinishDrag();
          } else {
            this.audios.error.play();
            this.backToOriginalPosition();
          }
        }

        this.backToOriginalPosition = () => {
          this.sprite.position.set(
            this.position.x,
            this.position.y,
          );
        }

        game.scene.stage.addChild(this.sprite);
      }
    })
  })