import React from 'react';
import { Container, Text } from 'native-base';

export default class extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        <Text>Message</Text>
      </Container>
    );
  }
}
