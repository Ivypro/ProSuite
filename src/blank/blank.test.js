import React from 'react';
import ReactDOM from 'react-dom';
import blank from './blank';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<blank />, div);
  ReactDOM.unmountComponentAtNode(div);
});
