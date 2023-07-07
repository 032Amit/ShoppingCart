import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../models/product.model';

const ProductsSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct(state: IProduct[], action) {
      state.push(action.payload);
    },
    increaseQty(state, action) {
      let newIndex = -1;
      state.map((item: IProduct, index) => {
        if (item.id === action.payload) {
          newIndex = index;
        }
      });
      if (newIndex === -1) {
      } else {
        const itemByIndex = state[newIndex] as IProduct;
        itemByIndex.qty = itemByIndex.qty + 1;
      }
    },
    decreaseQty(state, action) {
      let newIndex = -1;
      state.map((item: IProduct, index) => {
        if (item.id === action.payload) {
          newIndex = index;
        }
      });
      if (newIndex === -1) {
      } else {
        const itemByIndex = state[newIndex] as IProduct;
        itemByIndex.qty = itemByIndex.qty - 1;
      }
    },
  },
});

export const {addProduct, increaseQty, decreaseQty} = ProductsSlice.actions;
export default ProductsSlice.reducer;
