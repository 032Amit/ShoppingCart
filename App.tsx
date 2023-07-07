/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation/RootNavigator';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addProduct} from './src/redux/ProductsSlice';
import {IProduct} from './src/models/product.model';

const productsUrl =
  'https://my-json-server.typicode.com/benirvingplt/products/products';

const App = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getProductsList = useCallback(async () => {
    try {
      const response = await axios.get(productsUrl);

      // Adding qty key in product list to toggle Add To Cart and handle Quantity buttons.
      if (response?.data.length > 0) {
        response?.data.map((item: IProduct) => {
          dispatch(addProduct({...item, ...{qty: 0}}));
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
});

export default App;
