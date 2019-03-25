import React from 'react';
import styled from 'styled-components';
import { innerJoin, sortBy } from 'ramda';

import { Recipe } from '../../../modules/recipes';
import { Ingredient } from '../../../modules/ingredients';

import prepareData from '../../../utils/prepareData';

const Block = styled.div`
  font-family: Arial;
  margin-bottom: 2em;
`;

const Title = styled.h3`
  margin-bottom: 0.5em;
`;

const SubTitle = styled.div`
  color: grey;
  font-size: 0.9em;
`;

const Item = styled.li`
  font-size: 0.9em;
`;

export default({
  recipes,
  ingredients
}: {
  recipes: Recipe[],
  ingredients: Ingredient[],
}) => {
  const data = prepareData(recipes, ingredients);

  return (
    <Block>
      {data.map((item, i) => (
        <div key={i}>
          <Title>{item.title}</Title>
          <SubTitle>What you'll need:</SubTitle>
          <ul>
            {item.ingredients.map((ingredient, j) => (
              <Item key={j}>{ingredient}</Item>
            ))}
          </ul>
        </div>
      ))}
    </Block>
  );
};