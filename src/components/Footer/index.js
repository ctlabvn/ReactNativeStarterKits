import React, { PureComponent } from 'react';
import { Button, Footer, FooterTab } from 'native-base';
import Icon from '~/elements/Icon';
import styles from './styles';
import options from './options';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      route: props.route
    };
  }

  tabClick(route) {
    const { onTabClick } = this.props;
    onTabClick && onTabClick(this.state.type, route);
  }

  show(type, route) {
    this.setState({ type, route });
  }

  renderFooterTabs(route) {
    return (
      <Footer>
        <FooterTab>
          {options.footerItems.map((item, index) => (
            <Button key={index} transparent onPress={this.tabClick.bind(this, item.route)}>
              <Icon name={item.icon} style={styles.photoIcon} />
            </Button>
          ))}
        </FooterTab>
      </Footer>
    );
  }

  render() {
    const { type, route } = this.state;
    // event will be invoke via pageInstance
    switch (type) {
      case 'none':
        return false;
      default:
        return this.renderFooterTabs(route);
    }
  }
}
