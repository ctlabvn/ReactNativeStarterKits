import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import * as Progress from 'react-native-progress';
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
        <Content padder>
          <Card>
            <CardItem cardBody>
              <MapView
                style={{
                  width: null,
                  height: 150,
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
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text
                onPress={() => this.props.app.props.openBrowser('https://github.com/agiletechvn/')}
              >
                agiletechvn
              </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem cardBody style={{ flexDirection: 'column' }}>
              <Progress.Bar progress={0.3} width={200} />
              <Progress.Pie progress={0.4} size={50} />
              <Progress.Circle size={30} indeterminate />
              <Progress.CircleSnail color={['red', 'green', 'blue']} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
