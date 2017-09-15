import React from 'react';
import { TabViewAnimated, TabBar, TabViewPagerScroll } from 'react-native-tab-view';
import Contact from './Contact';
import Message from './Message';
import Phone from './Phone';

export default class Whatsapp extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'phone',
        title: 'Phone'
      },
      {
        key: 'message',
        title: 'Message'
      },
      {
        key: 'contact',
        title: 'Contact'
      }
    ]
  };

  shouldComponentUpdate() {
    return false;
  }

  renderHeader = () => {};

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'message':
        return <Message />;
      case 'contact':
        return <Contact />;
      default:
        return <Phone />;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={{ flex: 1 }}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}
