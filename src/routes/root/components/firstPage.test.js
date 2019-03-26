import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './firstPage';

it('first page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
