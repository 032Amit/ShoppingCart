import {store} from '../src/redux/store';
import {
  addProductToCart,
  removeCartItem,
  deleteCartItem,
} from '../src/redux/CartSlice';
import {IProduct} from '../src/models/product.model';

test('Adds a new Product to Cart', () => {
  let cartList: IProduct[] = store.getState().cart;
  const initialProductCount = cartList.length;

  const Product1 = {
    colour: 'Pink',
    id: 23,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Pink Floral Dress',
    price: 30,
    qty: 0,
  };

  const Product2 = {
    colour: 'green',
    id: 45,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Green Floral Dress',
    price: 67,
    qty: 0,
  };

  //Adding multiple products here that will help to test remove and delete functionality.
  store.dispatch(addProductToCart(Product1));
  store.dispatch(addProductToCart(Product1));
  store.dispatch(addProductToCart(Product2));

  cartList = store.getState().cart;
  const newlyAddedProduct = cartList.find(product => product.id === 23);
  expect(newlyAddedProduct?.name).toBe('Pink Floral Dress');
  expect(newlyAddedProduct?.price).toBe(30);
  expect(cartList.length).toBeGreaterThan(initialProductCount);
});

test('Removes a Product from cart', () => {
  let cartList: IProduct[] = store.getState().cart;
  const totalQuantity = cartList.reduce((acc, item) => {
    acc = acc + item.qty;
    return acc;
  }, 0);

  // Taking Prevously Added Product that we can use to test remove functionality.
  const Product = {
    colour: 'Pink',
    id: 23,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Pink Floral Dress',
    price: 30,
    qty: 0,
  };

  store.dispatch(removeCartItem(Product));

  const ProductInCart = cartList.find(item => item.id === 23);

  expect(Product).not.toBe(ProductInCart);
  cartList = store.getState().cart;
  const newTotalQuantity = cartList.reduce((acc, item) => {
    acc = acc + item.qty;
    return acc;
  }, 0);

  // Checking if new Total quantity smaller than inital quantity total
  expect(newTotalQuantity).toBeLessThan(totalQuantity);
});

test('Delete a Product from cart by id', () => {
  let cartList: IProduct[] = store.getState().cart;
  const initialProductCount = cartList.length;

  const product = {
    colour: 'green',
    id: 45,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Green Floral Dress',
    price: 67,
    qty: 0,
  };

  store.dispatch(deleteCartItem(product.id));

  const ProductInCart = cartList.find(item => item.id === 45);

  expect(product).not.toBe(ProductInCart);
  cartList = store.getState().cart;

  // Checking if new length smaller than inital length
  expect(cartList.length).toBeLessThan(initialProductCount);
});
