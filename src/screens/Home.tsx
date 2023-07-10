import React, {useEffect, useState} from 'react';
import {View, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import {IRootState} from '../redux/store';
import {IProduct} from '../models/product.model';
import ProductCard from '../components/ProductCard';
import CartFooter from '../components/CartFooter';

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const products = useSelector((state: IRootState) => state.product);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const renderProductList: ListRenderItem<IProduct> = ({
    item,
  }: {
    item: IProduct;
  }) => <ProductCard item={item} from={'Home'} />;

  return (
    <View style={rootStyles.wrapper}>
      <Header title={'PRETTYLITTLETHING'} />
      <FlatList data={productsList} renderItem={renderProductList} />
      <CartFooter from={'Home'} />
    </View>
  );
};

const rootStyles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
});

export default Home;
