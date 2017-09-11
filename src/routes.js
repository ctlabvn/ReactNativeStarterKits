import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import Gallery from './container/Gallery';
import Setting from './container/Setting';
import UserProfile from './container/UserProfile';

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
    headerType: 'none',
    footerType: 'none',
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
  login: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'none',
    footerType: 'none'
  }
};
