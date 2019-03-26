import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import fetch from "./fetch";

const testData = {
  "recipes": [{
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
  }]
};

describe("recipes fetch", () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  it('check receiving of the data model', async () => {
    mock.onGet('http://www.mocky.io/v2/5c85f7a1340000e50f89bd6c').reply(200, testData);
    return fetch(1, 10).payload.then(result => {
      expect(Array.isArray(result).toBeTruthy);
      expect(result[0].title).toEqual(testData.recipes[0].title);
      expect(result[0].ingredients).toEqual(testData.recipes[0].ingredients);
    });
  });
});
