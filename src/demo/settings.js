// window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio
game.config = {
  name: 'Panda&Linden',
  sourceFolder: './',
  mediaFolder: '../../assets',
  system: {
    webGL: true
  },
  settings: {
    "name": "6051-T4L",
    "title": "Dichotomous Key",
    "components": [
      {
        "name": "background",
        "image": {
          "src": "Images/background2.png"
        }
      },
      {
        "name": "board",
        "image": {
          "src": "Images/background.png"
        }
      },
      {
        "name": "frog",
        "image": {
          "src": "Images/frogAnimation.png"
        }
      },
      {
        "name": "buttonDone",
        "image": {
          "src": "Images/done.png"
        }
      },
      {
        "name": "buttonDoneH",
        "image": {
          "src": "Images/doneh.png"
        }
      },
      {
        "name": "buttonFull",
        "image": {
          "src": "Images/full.png"
        }
      },
      {
        "name": "buttonHelp",
        "image": {
          "src": "Images/but_Q.png"
        }
      },
    ],
    "scenes": [
      {
        "name": "step1",
        "audio": [
          "Audios/step1_intro1.mp3",
          "Audios/step1_intro2.mp3",
          "Audios/step1_intro3.mp3"
        ],
        "animations": [
          {
            "name": "explanation_high_low",
            "times": [
              {
                "name": "high",
                "value": 1700
              },
              {
                "name": "low",
                "value": 4500
              }
            ]
          }
        ]
      },
      {
        "name": "step2",
        "audio": [
          "Audios/step2_intro1.mp3",
          "Audios/step2_intro2.mp3"
        ]
      },
      {
        "name": "step3",
        "audio": [
          "Audios/step3_intro1.mp3",
          "Audios/step3_intro2.mp3",
          "Audios/step3_intro3.mp3",
          "Audios/step3_intro4.mp3"
        ]
      },
      {
        "name": "general",
        "audio": [
          "Audios/yes.mp3",
          "Audios/no.mp3",
          "Audios/error.mp3",
          "Audios/correct.mp3",
          "Audios/congrats.mp3"
        ]
      }
    ],
    "groupContainer": [
      {
        "name": "originImages",
        "type": "origin",
        "label": {
          "show": false
        },
        position: {
          x: 700,
          y: 200
        },
        size: {
          width: 250,
          height: 450
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "highImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "High Pitched",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 200
        },
        size: {
          width: 200,
          height: 205
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "lowImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "Low Pitched",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 440
        },
        size: {
          width: 200,
          height: 205
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "softHighImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "Soft Volume",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 190
        },
        size: {
          width: 200,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "loudHighImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "Loud Volume",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 310
        },
        size: {
          width: 200,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "softLowImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "Soft Volume",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 445
        },
        size: {
          width: 200,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "loudLowImagesContainer",
        "type": "target",
        "label": {
          "show": true,
          "text": "Loud Volume",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 600,
          y: 565
        },
        size: {
          width: 200,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "questionHL",
        "type": "target",
        "label": {
          "show": true,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 520,
          y: 190
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "questionHS",
        "type": "target",
        "label": {
          "show": true,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 520,
          y: 310
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "questionLL",
        "type": "target",
        "label": {
          "show": true,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 520,
          y: 440
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "questionLS",
        "type": "target",
        "label": {
          "show": true,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 520,
          y: 560
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "signalHL",
        "type": "target",
        "label": {
          "show": false,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 700,
          y: 190
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "FFFFFF",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "signalHS",
        "type": "target",
        "label": {
          "show": false,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 700,
          y: 310
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "FFFFFF",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "signalLL",
        "type": "target",
        "label": {
          "show": false,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 700,
          y: 440
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "FFFFFF",
        "backgroundColor": "FFFFFF"
      },
      {
        "name": "signalLS",
        "type": "target",
        "label": {
          "show": false,
          "text": "?",
          "position": "bottom",
          "color": "3B5998"
        },
        position: {
          x: 700,
          y: 560
        },
        size: {
          width: 110,
          height: 110
        },
        "borderColor": "FFFFFF",
        "backgroundColor": "FFFFFF"
      },
    ],
    "images": [
      {
        "name": "image1_high",
        "type": {
          "a": "high",
          "b": "loud"
        },
        "src": "Images/high1.png",
        "audio": "Audios/high1.mp3"
      },
      {
        "name": "image2_high",
        "type": {
          "a": "high",
          "b": "soft"
        },
        "src": "Images/high2.png",
        "audio": "Audios/high2.mp3"
      },
      {
        "name": "image3_high",
        "type": {
          "a": "high",
          "b": "soft"
        },
        "src": "Images/high3.png",
        "audio": "Audios/high3.mp3"
      },
      {
        "name": "image4_high",
        "type": {
          "a": "high",
          "b": "loud"
        },
        "src": "Images/high4.png",
        "audio": "Audios/high4.mp3"
      },
      {
        "name": "image5_high",
        "type": {
          "a": "high",
          "b": "soft"
        },
        "src": "Images/high5.png",
        "audio": "Audios/high5.mp3"
      },
      {
        "name": "image6_high",
        "type": {
          "a": "high",
          "b": "loud"
        },
        "src": "Images/high6.png",
        "audio": "Audios/high6.mp3"
      },
      {
        "name": "image7_high",
        "type": {
          "a": "high",
          "b": "soft"
        },
        "src": "Images/high7.png",
        "audio": "Audios/high7.mp3"
      },
      {
        "name": "image8_high",
        "type": {
          "a": "high",
          "b": "loud"
        },
        "src": "Images/high8.png",
        "audio": "Audios/high8.mp3"
      },
      {
        "name": "image1_low",
        "type": {
          "a": "low",
          "b": "soft"
        },
        "src": "Images/low1.png",
        "audio": "Audios/low1.mp3"
      },
      {
        "name": "image2_low",
        "type": {
          "a": "low",
          "b": "loud"
        },
        "src": "Images/low2.png",
        "audio": "Audios/low2.mp3"
      },
      {
        "name": "image3_low",
        "type": {
          "a": "low",
          "b": "soft"
        },
        "src": "Images/low3.png",
        "audio": "Audios/low3.mp3"
      },
      {
        "name": "image4_low",
        "type": {
          "a": "low",
          "b": "loud"
        },
        "src": "Images/low4.png",
        "audio": "Audios/low4.mp3"
      },
      {
        "name": "image5_low",
        "type": {
          "a": "low",
          "b": "soft"
        },
        "src": "Images/low5.png",
        "audio": "Audios/low5.mp3"
      },
      {
        "name": "image6_low",
        "type": {
          "a": "low",
          "b": "loud"
        },
        "src": "Images/low6.png",
        "audio": "Audios/low6.mp3"
      },
      {
        "name": "image7_low",
        "type": {
          "a": "low",
          "b": "soft"
        },
        "src": "Images/low7.png",
        "audio": "Audios/low7.mp3"
      },
      {
        "name": "image8_low",
        "type": {
          "a": "low",
          "b": "loud"
        },
        "src": "Images/low8.png",
        "audio": "Audios/low8.mp3"
      },
      {
        "name": "waves1",
        "type": {},
        "audio": null,
        "tmpAudios": [
          "Audios/waves1.mp3",
          "Audios/waves1w.mp3",
        ],
        "src": "Images/waves1.png"
      },
      {
        "name": "waves2",
        "type": {},
        "audio": null,
        "tmpAudios": [
          "Audios/waves2.mp3",
          "Audios/waves2w.mp3",
        ],
        "src": "Images/waves2.png"
      },
      {
        "name": "waves3",
        "type": {},
        "audio": null,
        "tmpAudios": [
          "Audios/waves3.mp3",
          "Audios/waves3w.mp3",
        ],
        "src": "Images/waves3.png"
      },
      {
        "name": "waves4",
        "type": {},
        "audio": null,
        "tmpAudios": [
          "Audios/waves4.mp3",
          "Audios/waves4w.mp3",
        ],
        "src": "Images/waves4.png"
      }
    ]
  }
};