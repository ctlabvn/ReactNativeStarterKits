import React from 'react';
import color from 'color';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Input,
  InputGroup,
  Button,
  Form,
  Label,
  Text,
  View
} from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as commonSelectors from '~/store/selectors/common';
import material from '~/theme/variables/material';

@connect(
  state => ({
    loginRequest: commonSelectors.getRequest(state)
  }),
  {
    ...commonActions,
    ...authActions
  }
)
class Login extends React.PureComponent {
  render() {
    return (
      <Container>
        <Content
          padder
          style={{
            backgroundColor: '#000'
          }}
        >
          <View
            style={{
              backgroundColor: color('#fff')
                .darken(0.2)
                .hex(),
              top: material.deviceHeight * 0.4,
              borderRadius: 10,
              padding: 5
            }}
          >
            <Form>
              <InputGroup>
                <Label>Username</Label>
                <Input placeholder="Enter your username" />
              </InputGroup>
              <InputGroup>
                <Label>Password</Label>
                <Input placeholder="password" secureTextEntry />
              </InputGroup>
              <Button
                onPress={() => this.props.login()}
                style={{ marginTop: 10, alignSelf: 'center' }}
              >
                <Text>Login</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
