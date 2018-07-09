import React from 'react';
import { Header, Body, Title, Container, Content, H1, View, Button, Text, Card, CardItem, List, ListItem } from 'native-base';

import styles from './styles';
import { MenuButton } from '../../.././components';
import Transactions from '../constants';

const Wallet = (props) => (
  <Container>
    <Header style={{ backgroundColor: '#158384' }}>
      <MenuButton onPress={() => props.navigation.openDrawer()} />
      <Body>
        <Title>Wallet</Title>
      </Body>
    </Header>
    <Content style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}> Your Balance </Text>
        <H1 style={styles.text}> #100,000 </H1>
        <Button success style={{ alignSelf: 'center' }}><Text> Top Up </Text></Button>
      </View>
      <List
        dataArray={Transactions}
        renderRow={data => (
          <ListItem>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    {data}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </ListItem>
              )}
      />
    </Content>
  </Container>
);

export default Wallet;

