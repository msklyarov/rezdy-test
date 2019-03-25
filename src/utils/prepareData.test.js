import prepareData from './prepareData';

const recipes = [{
  "title": "Ham and Cheese Toastie",
  "ingredients": ["Ham", "Cheese", "Bread", "Butter"]
}, {
  "title": "Fry-up",
  "ingredients": ["Bacon", "Eggs", "Baked Beans", "Mushrooms", "Sausage", "Bread"]
}, {
  "title": "Salad",
  "ingredients": ["Lettuce", "Tomato", "Cucumber", "Beetroot", "Salad Dressing"]
}, {
  "title": "Hotdog",
  "ingredients": ["Hotdog Bun", "Sausage", "Ketchup", "Mustard"]
}, {
  "title": "Omelette",
  "ingredients": ["Eggs", "Mushrooms", "Milk", "Salt", "Pepper", "Spinach"]
}];

const ingredients = [
  {
    "title": "Ham",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Cheese",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Bread",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Butter",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Bacon",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Eggs",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Mushrooms",
    "best-before": new Date("2019-03-14"),
    "use-by": new Date("2019-03-17")
  },
  {
    "title": "Sausage",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Hotdog Bun",
    "best-before": new Date("2019-03-14"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Ketchup",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Mustard",
    "best-before": new Date("2019-03-29"),
    "use-by": new Date("2019-04-03")
  },
  {
    "title": "Lettuce",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Tomato",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Cucumber",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Beetroot",
    "best-before": new Date("2019-03-24"),
    "use-by": new Date("2019-03-29")
  },
  {
    "title": "Salad Dressing",
    "best-before": new Date("2019-03-14"),
    "use-by": new Date("2019-03-17")
  }
];

const output = [
  {
    "ingredients": ["Ham", "Cheese", "Bread", "Butter"],
    "title": "Ham and Cheese Toastie"
  },
  {
    "ingredients": ["Hotdog Bun", "Sausage", "Ketchup", "Mustard"],
    "title": "Hotdog"
  }
];

it('prepareData test', () => {
  expect(prepareData(recipes, ingredients)).toEqual(output);
  expect(prepareData(recipes.slice(1), ingredients)).toEqual(output.slice(1));
});