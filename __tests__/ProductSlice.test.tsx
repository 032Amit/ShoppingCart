import {store} from '../src/redux/store';
import {addProduct, increaseQty, decreaseQty} from '../src/redux/ProductsSlice';
import {IProduct} from '../src/models/product.model';

test('Adds a new Product in Current Product List', () => {
  let productList: IProduct[] = store.getState().product;
  const initialProductCount = productList.length;

  const Product = {
    colour: 'Yellow',
    id: 65,
    img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
    name: 'Yellow Floral Dress',
    price: 654,
    qty: 0,
  };

  store.dispatch(addProduct(Product));
  store.dispatch(increaseQty(65));

  //Increasing quantity to 2.
  store.dispatch(increaseQty(65));

  productList = store.getState().product;
  const newlyAddedProduct = productList.find(product => product.id === 65);
  expect(newlyAddedProduct?.name).toBe('Yellow Floral Dress');
  expect(newlyAddedProduct?.price).toBe(654);
  expect(productList.length).toBeGreaterThan(initialProductCount);
});

test('Increase the quantity of previously added product by Id', () => {
  let productList: IProduct[] = store.getState().product;

  //Quantity of previously added product.
  const prevAddedProduct = productList.find(product => product.id === 65);

  const prevProdQuantity = prevAddedProduct?.qty;

  // Increasing the Quantity of previously added product by ID.
  store.dispatch(increaseQty(65));

  productList = store.getState().product;
  const newQuantity = productList.find(product => product.id === 65);

  // Checking if new Total quantity smaller than inital quantity total
  expect(prevProdQuantity).toBeLessThan(newQuantity?.qty as number);
});

test('Decrease the quantity of previously added product by Id', () => {
  let productList: IProduct[] = store.getState().product;

  //Quantity of previously added product.
  const prevAddedProduct = productList.find(product => product.id === 65);

  const prevProdQuantity = prevAddedProduct?.qty;

  // Increasing the Quantity of previously added product by ID.
  store.dispatch(decreaseQty(65));
  productList = store.getState().product;

  const newQuantity = productList.find(product => product.id === 65);

  // Checking if new Total quantity smaller than inital quantity total
  expect(prevProdQuantity).toBeGreaterThan(newQuantity?.qty as number);
});
