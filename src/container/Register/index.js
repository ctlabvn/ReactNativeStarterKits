import React from 'react';
import {
  Container,
  Content,
  Text,
  Input,
  InputGroup,
  Header,
  Body,
  Title,
  Button,
  Form,
  Label
} from 'native-base';

class Register extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Register</Title>
          </Body>
        </Header>
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
            <Button>
              <Text>Register</Text>
            </Button>
            <Button>
              <Text>Forgot password</Text>
            </Button>
            <Button>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Register;
