import React from 'react';
import ReactDOM from 'react-dom';
import topbar from './topbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<topbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
