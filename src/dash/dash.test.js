import React from 'react';
import ReactDOM from 'react-dom';
import dash from './dash';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<dash />, div);
  ReactDOM.unmountComponentAtNode(div);
});
