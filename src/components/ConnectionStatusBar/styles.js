import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#2d2d2d',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center'
  },
  xContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center'
  },
  x: {
    fontSize: PixelRatio.getFontScale() * 15,
    color: '#fff'
  }
});
