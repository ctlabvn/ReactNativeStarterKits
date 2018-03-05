import React from 'react';
import { Container, Content, Text } from 'native-base';

export default class Notification extends React.PureComponent {
  render() {
    return (
      <Container>
        <Content>
          <Text>Notification</Text>
        </Content>
      </Container>
    );
  }
}
