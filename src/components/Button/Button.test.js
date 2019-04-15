/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Submit</Button>, div);
  });

  it('renders markup correctly', () => {
    const tree = renderer.create(<Button>Submit</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
