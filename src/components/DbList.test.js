import React from 'react';
import ReactDOM from 'react-dom';
import DbList from './DbList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DbList />, div);
});
