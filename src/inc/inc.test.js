import React from 'react';
import ReactDOM from 'react-dom';
import inc from './inc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<inc />, div);
  ReactDOM.unmountComponentAtNode(div);
});
