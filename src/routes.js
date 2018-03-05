import Markets from './container/Markets';
import ChangeLogs from './container/ChangeLogs';
import VIPGroups from './container/VIPGroups';
import Search from './container/Search';
import Notification from './container/Notification';

export default {
  markets: {
    title: 'Markets',
    Page: Markets,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  changeLogs: {
    title: 'ChangeLogs',
    Page: ChangeLogs,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  vipGroups: {
    title: 'VIPGroups',
    Page: VIPGroups,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  search: {
    title: 'Search',
    Page: Search,
    headerType: 'back',
    footerType: 'none'
  },
  notification: {
    title: 'Notification',
    Page: Notification,
    headerType: 'back',
    footerType: 'none'
  },
  notFound: {
    title: 'Markets',
    Page: Markets,
    headerType: 'none',
    footerType: 'none',
    cache: true
  }
};
