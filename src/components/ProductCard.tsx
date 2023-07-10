import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  addProductToCart,
  deleteCartItem,
  removeCartItem,
} from '../redux/CartSlice';
import {decreaseQty, increaseQty} from '../redux/ProductsSlice';
import {styles} from '../screens/Style';
import {IProduct} from '../models/product.model';

interface IProps {
  item: IProduct;
  from: string;
}
const ProductCard = (props: IProps) => {
  const {item, from} = props;
  const dispatch = useDispatch();

  return (
    <View
      key={from === 'Home' ? item.id : `${item.id}${item.name}`}
      style={styles.productContainer}>
      <Image source={{uri: item.img}} style={styles.imgStyl} />
      <View style={styles.container}>
        <Text style={styles.nameTxt}>{item.name.substring(0, 20) + '...'}</Text>
        <Text style={styles.priceTxt}>{'₹' + item.price}</Text>
        <View style={styles.actionContainer}>
          {from !== 'Cart' && item?.qty === 0 ? (
            <TouchableOpacity
              style={styles.btnStyl}
              onPress={() => {
                dispatch(addProductToCart(item));
                dispatch(increaseQty(item.id));
              }}>
              <Text style={styles.txtStyl}>Add To Cart</Text>
            </TouchableOpacity>
          ) : null}

          {item?.qty === 0 ? null : (
            <TouchableOpacity
              style={styles.btnStyl}
              onPress={() => {
                if (item.qty > 1) {
                  dispatch(removeCartItem(item));
                  dispatch(decreaseQty(item.id));
                } else {
                  dispatch(deleteCartItem(item.id));
                  dispatch(decreaseQty(item.id));
                }
              }}>
              <Text style={styles.txtStyl}>-</Text>
            </TouchableOpacity>
          )}

          {item?.qty === 0 ? null : (
            <Text style={styles.qtyTxt}>{item.qty}</Text>
          )}

          {item?.qty === 0 ? null : (
            <TouchableOpacity
              style={styles.btnStyl}
              onPress={() => {
                dispatch(addProductToCart(item));
                dispatch(increaseQty(item.id));
              }}>
              <Text style={styles.txtStyl}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
