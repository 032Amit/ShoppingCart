import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import CartReducer, {addProductToCart} from '../src/redux/CartSlice';
import ProductCard from '../src/components/ProductCard';

test('dispatches addToCart action', () => {
  const store = configureStore({reducer: {cart: CartReducer}});

  const item = {
    colour: 'Pink',
    id: 23,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Pink Floral Dress',
    price: 30,
    qty: 0,
  };

  const addedItem = {
    colour: 'Pink',
    id: 23,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Pink Floral Dress',
    price: 30,
    qty: 1,
  };
  const from = 'Screen 1';

  const component = renderer.create(
    <Provider store={store}>
      <ProductCard item={item} from={from} />
    </Provider>,
  );

  // Manually trigger the dispatch action
  store.dispatch(addProductToCart(item));

  // Get the updated store state
  const updatedState = store.getState().cart;

  // Assert that the action was dispatched correctly
  expect(updatedState).toEqual([addedItem]);
});
