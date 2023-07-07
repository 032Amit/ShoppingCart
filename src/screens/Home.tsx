import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {styles} from './Style';
import {IRootState} from '../redux/store';
import {IProduct} from '../models/product.model';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const products = useSelector((state: IRootState) => state.product);
  const cartItems = useSelector((state: IRootState) => state.cart);
  const navigation = useNavigation();

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const getTotal = () => {
    let total = 0;
    cartItems.map((item: IProduct) => {
      total = total + item.qty * item.price;
    });

    return total;
  };

  const renderProductList: ListRenderItem<IProduct> = ({
    item,
  }: {
    item: IProduct;
  }) => <ProductCard item={item} from={'Home'} />;

  return (
    <View style={rootStyles.wrapper}>
      <Header title={'PRETTYLITTLETHING'} />
      <FlatList data={productsList} renderItem={renderProductList} />
      {cartItems.length > 0 ? (
        <View style={rootStyles.cartWrapper}>
          <View style={rootStyles.cartDesc}>
            <Text style={styles.headerTxt}>
              {`added items (${cartItems.length})`}
            </Text>
            <Text>{'Total:' + getTotal()}</Text>
          </View>
          <View style={rootStyles.cartDesc}>
            <TouchableOpacity
              style={rootStyles.viewCartBtn}
              onPress={() => {
                navigation.navigate('Cart' as never);
              }}>
              <Text style={rootStyles.viewCartTxt}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const rootStyles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  cartWrapper: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cartDesc: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  viewCartBtn: {
    width: '70%',
    height: 35,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  viewCartTxt: {
    color: '#fff',
  },
});

export default Home;
