import React from 'react';
import { connect } from 'react-redux';
import { WebView, TouchableOpacity, Modal } from 'react-native';
import { Container, Header, Body, View, Text, Button, Item } from 'native-base';
import * as Progress from 'react-native-progress';
import Icon from '../../elements/Icon';
import { getDomainName } from '../../utils/common';
import { closeBrowser } from '../../store/actions/common';
import styles from './styles';

@connect(state => ({ browser: state.ui.browser }), { closeBrowser })
export default class Browser extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  renderLoading = () => (
    <View style={styles.anounceContainer}>
      <Progress.Circle size={30} indeterminate />
      <Text>Loading...</Text>
    </View>
  );

  renderError = error => (
    <View style={styles.anounceContainer}>
      <Icon name="ios-sad" style={styles.iconSad} />
      <Text style={styles.msgError}>{error}</Text>
      <Text style={styles.msgError2}>
        We can't display the webpage because your mobile phone isn't connected
        to internet (and/or website not available etc...)
      </Text>
    </View>
  );

  render() {
    const { browser } = this.props;
    if (!browser.showing) return null;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={() => this.props.closeBrowser()}
      >
        <Container>
          <Header>
            <Button transparent onPress={() => this.props.closeBrowser()}>
              <Icon name="ios-close" style={styles.iconClose} />
            </Button>
            <Body>
              <Item style={styles.addressBar}>
                <Text style={styles.address}>{getDomainName(browser.uri)}</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.webviewRef.reload()}
                  style={styles.btnReload}
                >
                  <Icon name="refresh" style={styles.iconReload} />
                </TouchableOpacity>
              </Item>
            </Body>
          </Header>
          <WebView
            ref={ref => (this.webviewRef = ref)}
            source={{ ...browser }}
            style={styles.webview}
            javaScriptEnabled
            scalesPageToFit
            thirdPartyCookiesEnabled={false}
            mediaPlaybackRequiresUserAction
            allowsInlineMediaPlayback
            shouldRasterizeIOS
            renderToHardwareTextureAndroid
            renderError={this.renderError}
            renderLoading={this.renderLoading}
          />
        </Container>
      </Modal>
    );
  }
}
