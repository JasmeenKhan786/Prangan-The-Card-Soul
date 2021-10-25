import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default class MinorArcana extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
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
              marginRight: '30%',
              fontFamily: 'Times',
            }}>
            MinorArcana
          </Text>
        </View>

        <ScrollView style={{ width: '100%' }}>
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
              colors={['#004488', '#FFF8FF']}
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                borderRadius: 30,
              }}>
              <Image
                source={require('../assets/cups.png')}
                style={{
                  width: 69,
                  height: 100,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: 'black',
                  marginTop: 30,
                  marginLeft: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Cups');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Times',
                  }}>
                  Cups
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

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
              colors={['#c13584', '#fd1d1d']}
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                borderRadius: 30,
              }}>
              <Image
                source={require('../assets/swords.png')}
                style={{
                  width: 69,
                  height: 100,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: 'black',
                  marginTop: 30,
                  marginLeft: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Swords');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Times',
                  }}>
                  Swords
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

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
              colors={['#fbbc05', '#FFFFFF']}
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                borderRadius: 30,
              }}>
              <Image
                source={require('../assets/wands.png')}
                style={{
                  width: 69,
                  height: 100,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: 'black',
                  marginTop: 30,
                  marginLeft: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Wands');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Times',
                  }}>
                  Wands
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

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
              colors={['#026466', '#cfdc00']}
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                borderRadius: 30,
              }}>
              <Image
                source={require('../assets/pentacles.png')}
                style={{
                  width: 69,
                  height: 100,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: 'black',
                  marginTop: 30,
                  marginLeft: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Pentacles');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Times',
                  }}>
                  Pentacles
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
