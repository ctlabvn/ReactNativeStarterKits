import React, { PureComponent } from 'react';
import { Button } from 'native-base';
import Icon from '~/elements/Icon';
import styles from './styles';

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
      <Button style={styles.button} onPress={this.tabClick.bind(this, 'qrCode')}>
        <Icon name="camera" style={styles.photoIcon} />
      </Button>
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
