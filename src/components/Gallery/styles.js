import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: '#000'
  },
  headerBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: 20,
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15
  },
  btnIcon: {
    color: '#999',
    fontSize: PixelRatio.getFontScale() * 20,
    marginRight: 5,
    padding: 15
  },
  btnText: {
    color: '#999',
    fontSize: PixelRatio.getFontScale() * 15
  },
  photoView: {
    width: null,
    flex: 1,
    backgroundColor: '#fff'
  },
  actionBar: {
    backgroundColor: '#000'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  loading: {
    width: 40,
    height: 40
  }
});
