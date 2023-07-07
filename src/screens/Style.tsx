import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#fff',
    elevation: 1,
  },
  headerTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  productContainer: {
    width: '94%',
    alignSelf: 'center',
    height: 120,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  imgStyl: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  container: {
    marginLeft: 10,
  },
  nameTxt: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  priceTxt: {
    color: 'green',
    fontWeight: '600',
    fontSize: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  btnStyl: {
    backgroundColor: 'green',
    borderRadius: 8,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  txtStyl: {
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  qtyTxt: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
