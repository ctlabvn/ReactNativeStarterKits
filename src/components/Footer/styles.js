import { StyleSheet } from 'react-native';
import material from '~/theme/variables/material';

export default StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderColor: '#ddd'
  },
  footerIcon: {
    color: material.tabBarTextColor,
    paddingTop: 2,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 18
  },
  get footerIconActive() {
    return { ...this.footerIcon, color: material.tabBarActiveTextColor };
  },
  button: {
    // move to bottom and stretch to height
    alignSelf: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -15,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center'
  },
  badgeIcon: {
    marginTop: -18
  },
  badgeText: {
    left: 18,
    top: -2
  },
  photoIcon: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    top: 10
  }
});
