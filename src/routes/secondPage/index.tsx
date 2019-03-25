import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pick } from 'ramda';

import SecondPageComponent from './components/secondPage';

import fetchRecipesAction from '../../modules/recipes/actions/fetch';
import clearRecipesAction from '../../modules/recipes/actions/clear';
import fetchIngredientsAction from '../../modules/ingredients/actions/fetch';
import clearIngredientsAction from '../../modules/ingredients/actions/clear';

import { Recipe } from '../../modules/recipes';
import { Ingredient } from '../../modules/ingredients';

interface IProps {
  recipes: Recipe[],
  ingredients: Ingredient[],
  fetchRecipes: () => Object,
  clearRecipes: () => Object,
  fetchIngredients: () => Object,
  clearIngredients: () => Object
}

class SecondPageContainer extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchIngredients();
  }

  componentWillUnmount() {
    this.props.clearIngredients();
    this.props.clearRecipes();
  }

  render() {
    return (
      <SecondPageComponent
        {...pick([
          'recipes',
          'ingredients',
        ], this.props)}
      />
    );
  }
}

const select = (state: any, props: Object) => ({
  recipes: state.recipes,
  ingredients: state.ingredients,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchRecipes: fetchRecipesAction,
      clearRecipes: clearRecipesAction,
      fetchIngredients: fetchIngredientsAction,
      clearIngredients: clearIngredientsAction
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(SecondPageContainer);
