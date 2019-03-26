import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import fetch from "./fetch";

const testData = {
  "ingredients": [
    {
      "title": "Ham",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Cheese",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Bread",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Butter",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Bacon",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Eggs",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Mushrooms",
      "best-before": "2019-03-14",
      "use-by": "2019-03-17"
    },
    {
      "title": "Sausage",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Hotdog Bun",
      "best-before": "2019-03-14",
      "use-by": "2019-03-29"
    },
    {
      "title": "Ketchup",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Mustard",
      "best-before": "2019-03-29",
      "use-by": "2019-04-03"
    },
    {
      "title": "Lettuce",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Tomato",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Cucumber",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Beetroot",
      "best-before": "2019-03-24",
      "use-by": "2019-03-29"
    },
    {
      "title": "Salad Dressing",
      "best-before": "2019-03-14",
      "use-by": "2019-03-17"
    }
  ]
};

describe("ingredients fetch", () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  it('check receiving of the data model', async () => {
    mock.onGet('https://www.mocky.io/v2/5c9075843600004b00f100fa').reply(200, testData);
    return fetch(1, 10).payload.then(result => {
      expect(Array.isArray(result).toBeTruthy);
      expect(result[0].title).toEqual(testData.ingredients[0].title);
      expect(result[0]['best-before']).toEqual(new Date(testData.ingredients[0]['best-before']));
      expect(result[0]['use-by']).toEqual(new Date(testData.ingredients[0]['use-by']));
    });
  });
});
