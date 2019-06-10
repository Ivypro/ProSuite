import React from 'react';
import ReactDOM from 'react-dom';
import dash2 from './dash2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<dash2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
