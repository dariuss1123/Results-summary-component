const randomNum1 = Math.floor(Math.random() * 100)
const randomNum2 = Math.floor(Math.random() * 100)
const randomNum3 = Math.floor(Math.random() * 100)
const randomNum4 = Math.floor(Math.random() * 100)

export const stats = [
    {
      "category": "Reaction",
      "score": randomNum1,
      "icon": "./assets/images/icon-reaction.svg",
      "color": [255, 87, 87],
    },
    {
      "category": "Memory",
      "score": randomNum2,
      "icon": "./assets/images/icon-memory.svg",
      "color": [255, 176, 31],
    },
    {
      "category": "Verbal",
      "score": randomNum3,
      "icon": "./assets/images/icon-verbal.svg",
      "color": [0, 189, 145],
    },
    {
      "category": "Visual",
      "score": randomNum4,
      "icon": "./assets/images/icon-visual.svg",
      "color": [17, 37, 212],
    }
  ];

  export {randomNum1, randomNum2, randomNum3, randomNum4}