import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';

export default class Shuffle extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/sh.png')}
          style={{ width: '100%', height: '100%' }}>
          <View
            style={{
              width: '100%',
              height: 80,
              paddingTop: 36,
              paddingHorizontal: 20,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('Card');
              }}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Times',
                marginRight: '10%',
              }}>
              How to Shuffle Tarot Cards
            </Text>
          </View>
          <ScrollView style={{ width: '100%' }}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                fontSize: 20,
                marginLeft: 5,
                marginRight: 10,
                fontFamily: 'Comic',
              }}>
              How to Shuffle Tarot Cards
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                fontSize: 16,
                marginLeft: 7,
                marginRight: 5,
                fontFamily: 'Comic',
              }}>
              A tarot deck is made up of 78 standard playing cards divided into
              Major Arcana (spanning from 0-21) and Minor Arcana (spanning from
              22-54). Shuffling the Tarot cards before a reading is essential.
              It allows you to focus on why you’re doing the reading and to
              imprint your energy on the cards. Before shuffling, take a moment
              to relax and tune in to your intuition. Then, mix up the cards in
              any way that feels right fan the deck over and over and put them
              back together. There is no wrong way to shuffle your Tarot cards.
              No matter how you shuffle, it’s the intention that really matters.
              As you shuffle, be present and truly focus on the question for
              which you need answers.
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
