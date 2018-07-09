import React from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header, Body, Title, Container, List, ListItem } from 'native-base';

import styles from './styles';
import { MenuButton } from '../../.././components';
import jobcard from './jobcard.png';
import emcard from './emcard.png';
import adcard from './adcard.png';

const images = [jobcard, emcard, adcard];

const Cards = (props) => (
  <Container>
    <Header style={{ backgroundColor: '#158384' }}>
      <MenuButton onPress={() => props.navigation.openDrawer()} />
      <Body>
        <Title>CARDS</Title>
      </Body>
    </Header>
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      style={styles.container}
      scrollEnabled
    >
      <View style={styles.form} >
        <List
          dataArray={images}
          renderRow={data => (
            <ListItem>
              <Image
                source={data}
                style={{ alignSelf: 'center', marginBottom: 20 }}
              />
            </ListItem>
              )}
        />
      </View>
    </KeyboardAwareScrollView>
  </Container>
);

export default Cards;

