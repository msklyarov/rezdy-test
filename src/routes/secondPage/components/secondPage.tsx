import React from 'react';

import { Recipe } from '../../../modules/recipes';
import { Ingredient } from '../../../modules/ingredients';

interface IProps {
  recipes: Recipe[],
  ingredients: Ingredient[],
}

class SecondPage extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        {this.props.recipes.map((item, i) => (
          <div key={i}>
            <h4>{item.title}</h4>
            <h5>What you'll need:</h5>
            <ul>
              {item.ingredients.map((ingredient, j) => (
                <li key={j}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default SecondPage;