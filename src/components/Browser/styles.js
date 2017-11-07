import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
export default StyleSheet.create({
  addressBar: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconClose: {
    color: '#fff',
    paddingRight: 5,
    fontSize: 28
  },
  address: {
    color: '#333'
  },
  btnReload: {
    position: 'absolute',
    right: 5
  },
  iconReload: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10
  },
  webview: {
    width: null,
    height,
    flex: 1
  },
  anounceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  iconSad: {
    fontSize: 120,
    color: '#999'
  },
  msgError: {
    textAlign: 'center',
    fontSize: 26,
    color: '#666'
  },
  msgError2: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#666'
  }
});
