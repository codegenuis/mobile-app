import React from 'react';
import { Header, Body, Title, Container, Content, H3, View, Text, Card, CardItem, Left, Button, Icon } from 'native-base';

import styles from './styles';

const TransactionDetails = (props) => (
  <Container>
    <Header style={{ backgroundColor: '#158384' }}>
      <Left>
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Transaction</Title>
      </Body>
    </Header>
    <Content style={styles.container}>
      <View style={styles.view}>
        <H3 style={styles.text}> Transaction Details </H3>
      </View>
      <Card>
        <CardItem>
          <Body>
            <Text>
                Transaction Details
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

export default TransactionDetails;

