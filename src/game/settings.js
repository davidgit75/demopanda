game.config = {
  name: 'Panda&Linden',
  sourceFolder: 'src',
  mediaFolder: 'assets',
  system: {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: true,
    center: true,
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
      }
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
                "value": 1600
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
          x: 600,
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
          x: 500,
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
          x: 500,
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
          x: 500,
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
          x: 500,
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
          x: 500,
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
          x: 500,
          y: 565
        },
        size: {
          width: 200,
          height: 110
        },
        "borderColor": "3B5998",
        "backgroundColor": "FFFFFF"
      }
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
      }
    ]
  }
};