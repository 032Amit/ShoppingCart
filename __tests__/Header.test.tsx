import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';

test('renders header with title', () => {
  const title = 'Flipkart';
  const component = renderer.create(<Header title={title} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('updates header title', () => {
  const component = renderer.create(<Header title="Amazon" />);
  const newTitle = 'PRETTYLITTLETHING';

  component.update(<Header title={newTitle} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('handles empty title', () => {
  const component = renderer.create(<Header title="" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
