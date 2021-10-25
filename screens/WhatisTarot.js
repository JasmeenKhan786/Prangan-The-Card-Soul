import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Whatistarot extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/wt.png')}
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
              style={{}}
              onPress={() => {
                this.props.navigation.navigate('Card');
              }}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginRight: '15%',
                fontFamily: 'Times',
              }}>
              Know More About Tarot
            </Text>
          </View>

          <ScrollView>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                fontFamily: 'Comic',
              }}>
              HISTORY OF THE TAROT
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              The history of tarot cards is unclear and poorly documented. Many
              historians believe that tarot cards were used to play a game
              between the 15th and 17th centuries in Europe and China. These
              games are thought to have been played by the wealthy, scholars,
              and nobility who lived during those times.
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                fontFamily: 'Comic',
              }}>
              ORIGIN OF THE TAROT
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              The origin of the Tarot is generally considered to be in Italy,
              and some historians assert that it was invented there, although
              there is also evidence. There are many books on the topic of card
              reading and Tarot readings in general. Tarot cards have been used
              around for centuries. It is generally believed that Tarot card
              paintings were created for wealthy families in Central Europe. One
              of the most famous sets of Tarot cards was painted by Martiano da
              Tortona in 1460 for the Visconti family.
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontFamily: 'Comic',
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
              }}>
              HOW TO READ TAROT CARDS?
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                fontFamily: 'Comic',
                marginLeft: 5,
                fontSize: 15,
              }}>
              There are three basic steps when you’re reading Tarot cards:-
            </Text>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              First, consider your question,
            </Text>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontFamily: 'Comic',
                fontSize: 15,
              }}>
              Then select a Tarot spread with positions that relate to your
              question.
            </Text>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                fontFamily: 'Comic',
                marginLeft: 5,
                fontSize: 15,
              }}>
              Next, you'll shuffle the cards and lay them out in that spread,
              and then finally, interpret the cards to answer your question.
              Also, Anyone can learn how to read Tarot cards.
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                fontFamily: 'Comic',
                marginLeft: 5,
                fontSize: 20,
              }}>
              WHAT IS TAROT? HOW DOES IT WORKS?
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              Tarot is a set of wooden or cardboard cards with pictures on one
              side. Often used for fortune telling. The Tarot deck contains 78
              cards and it is divided into 2 deck The Major Arcana and The Minor
              Arcana.
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                fontFamily: 'Comic',
              }}>
              THE MAJOR ARCANA
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              There are 22 cards in the major arcana. The ​Major Arcana​ denote
              important life events, lessons or milestones, while the minor
              arcana​ cards reflect day-to-day events.
            </Text>
            <View
              style={{
                width: '80%',
                height: 140,
                backgroundColor: '#CAE8FF',
                alignSelf: 'center',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'gold',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <LinearGradient
                colors={['#2F1C53', '#A46DFF', '#F6D1FD']}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}>
                <Image
                  source={require('../assets/card.png')}
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}
                />
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: 'black',
                    marginTop: 30,
                    marginLeft: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('MajorArcana');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      marginTop: '82%',
                    }}>
                    Major Arcana
                  </Text>
                  <Text
                    style={{
                      marginLeft: -94,
                      textAlign: 'center',
                      marginEnd: '10%',
                      marginTop: '60%',
                    }}>
                    Learn About Major Arcana
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 10,
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                fontFamily: 'Comic',
              }}>
              THE MINIOR ARCANA
            </Text>

            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                fontWeight: "100",
                color: 'black',
                marginLeft: 5,
                fontSize: 15,
                fontFamily: 'Comic',
              }}>
              There are 56 cards in the Minor Arcana and they are divided into
              four suits of 14 cards each. The suits are as follows: wands,
              swords, cups and pentacles.
            </Text>
            <View
              style={{
                width: '80%',
                height: 140,
                backgroundColor: '#CAE8FF',
                alignSelf: 'center',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'gold',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <LinearGradient
                colors={['#2F1C53', '#A46DFF', '#F6D1FD']}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}>
                <Image
                  source={require('../assets/card.png')}
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}
                />
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: 'black',
                    marginTop: 30,
                    marginLeft: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('MinorArcana');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      marginTop: '75%',
                    }}>
                    Minor Arcana
                  </Text>
                  <Text
                    style={{
                      marginLeft: -94,
                      textAlign: 'center',
                      marginEnd: '10%',
                      marginTop: '50%',
                    }}>
                    Learn About Minor Arcana
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
