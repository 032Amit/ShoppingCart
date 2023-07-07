/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
it('renders correctly', () => {
  renderer.create(<ProviderApp />);
});
