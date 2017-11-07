import Register from './container/Register';
import Home from './container/Home';
import Gallery from './container/Gallery';
import Setting from './container/Setting';
import UserProfile from './container/UserProfile';
import Shop from './container/Shop';

export default {
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'home',
    cache: true
  },
  gallery: {
    title: 'Gallery',
    Page: Gallery,
    headerType: 'home',
    footerType: 'home',
    cache: true
  },
  shop: {
    title: 'Shop',
    Page: Shop,
    headerType: 'home',
    footerType: 'home',
    cache: true
  },
  setting: {
    title: 'Setting',
    Page: Setting,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  'user/profile': {
    title: 'User Profile',
    Page: UserProfile,
    headerType: 'none',
    cache: true
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'none',
    footerType: 'none'
  },
  notFound: {
    title: 'Home',
    Page: Home,
    headerType: 'none',
    footerType: 'none'
  }
};
