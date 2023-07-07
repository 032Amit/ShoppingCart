import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header';

import {IRootState} from '../redux/store';
import {IProduct} from '../models/product.model';
import ProductCard from '../components/ProductCard';

const Cart = () => {
  const cartItems = useSelector((state: IRootState) => state.cart);

  const renderProductList: ListRenderItem<IProduct> = ({
    item,
  }: {
    item: IProduct;
  }) => <ProductCard item={item} from={'Home'} />;

  return (
    <>
      <Header title={'PRETTYLITTLETHING'} />
      <FlatList data={cartItems} renderItem={renderProductList} />
    </>
  );
};

export default Cart;
