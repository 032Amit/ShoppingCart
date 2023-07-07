import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../models/product.model';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToCart(state: IProduct[], action) {
      let newIndex = -1;
      state.map((item: IProduct, index) => {
        if (item.id === action.payload.id) {
          newIndex = index;
        }
      });
      if (newIndex === -1) {
        state.push({
          colour: action.payload.colour,
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          img: action.payload.img,
          qty: action.payload.qty + 1,
        });
      } else {
        const itemByIndex = state[newIndex] as IProduct;
        itemByIndex.qty = itemByIndex.qty + 1;
      }
    },
    removeCartItem(state, action) {
      let newIndex = -1;
      state.map((item: IProduct, index) => {
        if (item.id === action.payload.id) {
          newIndex = index;
        }
      });

      if (newIndex === -1) {
      } else {
        const itemByIndex = state[newIndex] as IProduct;
        itemByIndex.qty = itemByIndex.qty - 1;
      }
    },
    deleteCartItem(state, action) {
      return (state = state.filter(
        (item: IProduct) => item.id !== action.payload,
      ));
    },
  },
});

export const {addProductToCart, removeCartItem, deleteCartItem} =
  CartSlice.actions;
export default CartSlice.reducer;
