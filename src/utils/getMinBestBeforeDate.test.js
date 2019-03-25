import getMinBestBeforeDate from './getMinBestBeforeDate';

const frigeIngredients = [
  {  
    "title":"Ham",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Cheese",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Bread",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Butter",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Bacon",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Eggs",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Mushrooms",
    "best-before": new Date("2019-03-14"),
  },
  {  
    "title":"Sausage",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Hotdog Bun",
    "best-before": new Date("2019-03-14"),
  },
  {  
    "title":"Ketchup",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Mustard",
    "best-before": new Date("2019-03-29"),
  },
  {  
    "title":"Lettuce",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Tomato",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Cucumber",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Beetroot",
    "best-before": new Date("2019-03-24"),
  },
  {  
    "title":"Salad Dressing",
    "best-before": new Date("2019-03-14"),
  }
];


it('getMinBestBeforeDate test', () => {
  expect(getMinBestBeforeDate(["Ham", "Cheese", "Bread", "Butter"], frigeIngredients)).toEqual(new Date("2019-03-29"));
  expect(getMinBestBeforeDate(["Hotdog Bun", "Sausage", "Ketchup", "Mustard"], frigeIngredients)).toEqual(new Date("2019-03-14"));
});