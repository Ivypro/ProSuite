import React from 'react';
import ReactDOM from 'react-dom';
import dash4 from './dash4';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<dash4 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
