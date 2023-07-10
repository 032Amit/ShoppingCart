import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../screens/Style';
import {IRootState} from '../redux/store';
import {IProduct} from '../models/product.model';

interface IProps {
  from: string;
}
const CartFooter = (props: IProps) => {
  const {from} = props;
  const cartItems = useSelector((state: IRootState) => state.cart);
  const navigation = useNavigation();

  const getTotal = () => {
    let total = 0;
    cartItems.map((item: IProduct) => {
      total = total + item.qty * item.price;
    });

    return total;
  };
  return (
    <View>
      {cartItems.length > 0 ? (
        <View style={rootStyles.cartWrapper}>
          <View style={rootStyles.cartDesc}>
            <Text style={styles.headerTxt}>
              {`added items (${cartItems.length})`}
            </Text>
            <Text>{'Total:' + getTotal()}</Text>
          </View>
          <View style={rootStyles.cartDesc}>
            {from === 'Home' ? (
              <TouchableOpacity
                style={rootStyles.viewCartBtn}
                onPress={() => {
                  navigation.navigate('Cart' as never);
                }}>
                <Text style={rootStyles.viewCartTxt}>View Cart</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={rootStyles.viewCartBtn}>
                <Text style={rootStyles.viewCartTxt}>Place Order</Text>
              </TouchableOpacity>
            )}
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

export default CartFooter;
