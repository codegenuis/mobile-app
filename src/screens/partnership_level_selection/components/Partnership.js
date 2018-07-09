import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Image } from 'react-native';
import { DeckSwiper, Card, CardItem, Text, Left, Body, View, Container, Button, Icon, Right } from 'native-base';
import { Buttons, CheckBox } from '../../.././components';

import cards from '../constants';
import styles from './styles';

/* eslint no-underscore-dangle: ["error", { "allow": ["_deckSwiper","_root"] }] */
/* eslint no-return-assign: "off" */

class Partnership extends Component {
  submit = (values) => {
    const level = Object.keys(values);
    console.log(level[0]);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container style={styles.body}>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderItem={item =>
          (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{}}>{item.name}</Text>
                  </Body>
                </Left>
                <Right>
                  <Field component={CheckBox} name={item.name} type="text" value={item.name} />
                </Right>
              </CardItem>
              <CardItem>
                <Image style={styles.image} source={item.image} />
              </CardItem>
              <CardItem cardBody>
                <Text style={styles.text}>{item.Description}</Text>
              </CardItem>
              <CardItem>
                <Left />
                <Right>
                  <Buttons
                    style={[styles.button, styles.padding]}
                    onPress={handleSubmit(this.submit)}
                  >
                Submit
                  </Buttons>
                </Right>
              </CardItem>
            </Card>
           )
        }
          />
        </View>
        <View style={{ flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, top: 50, justifyContent: 'space-between', padding: 15 }}>
          <Button onPress={() => this._deckSwiper._root.swipeLeft()} style={styles.button}>
            <Icon name="arrow-back" />
          </Button>
          <Button onPress={() => this._deckSwiper._root.swipeRight()} style={styles.button}>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'partnership_form'
})(Partnership);
