import React from 'react';
import { View } from 'react-native';
import { Content, Card, CardItem, Icon, Header, Body, Title, Container, Button, Text } from 'native-base';


import styles from './styles';
import { MenuButton } from '../../.././components';

const Profile = (props) => (
  // const { navigate } = props.navigation;
  <Container>
    <Header style={{ backgroundColor: '#158384' }}>
      <MenuButton onPress={() => props.navigation.openDrawer()} />
      <Body>
        <Title>Profile</Title>
      </Body>
    </Header>
    <Content>
      <View style={styles.view} >
        <Text style={styles.text}> Amanda Parker </Text>
        <Button success style={{ alignSelf: 'center' }}><Text> Top Up </Text></Button>
      </View>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Icon type="MaterialIcons" name="home" style={{ color: '#158384' }} />
            <Text style={{ color: '#000' }}>Location:</Text>
          </CardItem>
          <CardItem header bordered>
            <Icon type="MaterialIcons" name="email" style={{ color: '#158384' }} />
            <Text style={{ color: '#000' }}>Email:</Text>
          </CardItem>
          <CardItem header bordered>
            <Icon type="MaterialIcons" name="home" style={{ color: '#158384' }} />
            <Text style={{ color: '#000' }}>Address:</Text>
          </CardItem>
          <CardItem header bordered>
            <Icon type="MaterialIcons" name="phone" style={{ color: '#158384' }} />
            <Text style={{ color: '#000' }}>Phone</Text>
          </CardItem>
        </Card>
      </Content>
    </Content>
  </Container>
);

export default Profile;
