import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Content } from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as authSelectors from '~/store/selectors/auth';

@connect(
  state => ({
    ...authSelectors.getUser(state)
  }),
  {
    ...commonActions,
    ...authActions
  }
)
class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <Content>
          <MapView
            style={{
              width: null,
              height: 500,
              flex: 1
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 21.028297,
              longitude: 105.832992,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 21.028297,
                longitude: 105.832992
              }}
            />
          </MapView>
        </Content>
      </Container>
    );
  }
}

export default Home;
