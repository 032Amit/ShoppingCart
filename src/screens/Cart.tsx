import React from 'react';
import {Text, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header';

import {IRootState} from '../redux/store';
import {IProduct} from '../models/product.model';
import ProductCard from '../components/ProductCard';
import CartFooter from '../components/CartFooter';
import BlankListMsg from '../components/BlankListMsg';

const Cart = () => {
  const cartItems = useSelector((state: IRootState) => state.cart);

  const renderProductList: ListRenderItem<IProduct> = ({
    item,
  }: {
    item: IProduct;
  }) => <ProductCard item={item} from={'Home'} />;

  return (
    <>
      {/* <Header title={'PRETTYLITTLETHING'} /> */}
      <FlatList
        data={cartItems}
        renderItem={renderProductList}
        ListEmptyComponent={<BlankListMsg message="No Items in Your Cart" />}
      />
      <CartFooter from={'Cart'} />
    </>
  );
};

export default Cart;
