import React from 'react';
import ReactDOM from 'react-dom';
import dash3 from './dash3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<dash3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
