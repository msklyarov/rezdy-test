import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pick } from 'ramda';

import FirstPage from './components/firstPage';
import SecondPage from '../secondPage/';

interface IState {
  showFirstPage: boolean;
}

class RootContainer extends React.Component<{}, IState> {
  state = {
    showFirstPage: true
  };

  handlePageChange = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.setState({ showFirstPage: !this.state.showFirstPage })
  }

  render() {
    return this.state.showFirstPage ?
      <FirstPage onClickHandler={this.handlePageChange} /> :
      <SecondPage
        // {...pick([
        //   'recipes',
        //   // 'ingredients',
        //   'fetchRecipes',
        //   // 'clearRecipes',
        //   // 'fetchIngredients',
        //   // 'clearIngredients'
        // ], this.props)}
      />;
  }
}

export default RootContainer;
