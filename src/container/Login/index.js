import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Input,
  InputGroup,
  Header,
  Body,
  Title,
  Button,
  Form,
  Label,
  Text
} from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as commonSelectors from '~/store/selectors/common';

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
        <Content>
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
        </Content>
      </Container>
    );
  }
}

export default Login;
