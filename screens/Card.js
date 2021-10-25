import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#613854', '#FFFFFF']}
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '100%',
          }}>
          <ScrollView>
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
                onPress={() => {
                  this.props.navigation.navigate('Dashboard');
                }}>
                <AntDesign name="home" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{ color: 'white', fontSize: 18, fontFamily: 'Times' }}>
                Card
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <FontAwesome name="user-circle" size={24} color="white" />
              </TouchableOpacity>
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
                marginTop: 5,
                flexDirection: 'row',
              }}>
              <LinearGradient
                colors={['#f7afff', '#5d70ea']}
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
                    this.props.navigation.navigate('Whatistarot');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      marginTop: '78%',
                      fontFamily: 'Times',
                    }}>
                    Tarot
                  </Text>
                  <Text
                    style={{
                      marginLeft: '-70%',
                      marginTop: '60%',
                      fontFamily: 'Times',
                    }}>
                    Know More About Tarot
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
                colors={['#00aaff', '#FFFFFF']}
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
                    this.props.navigation.navigate('Shuffle');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontFamily: 'Times',
                    }}>
                    Shuffle
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: -175,
                    marginTop: '40%',
                    fontFamily: 'Times',
                  }}>
                  How to Shuffle Tarot Cards
                </Text>
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
                colors={['#95EF95', '#B5F4B5', '#D8FAD8', '#E1F8E1']}
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
                      marginTop: '74%',
                      fontFamily: 'Times',
                    }}>
                    Major Arcana
                  </Text>
                  <Text
                    style={{
                      marginLeft: -74,
                      marginTop: '60%',
                      fontFamily: 'Times',
                    }}>
                    Learn About Major Arcana
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
                colors={['#ea1d5d', '#FFFFFF']}
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
                      marginTop: '78%',
                      fontFamily: 'Times',
                    }}>
                    Minor Arcana
                  </Text>
                  <Text
                    style={{
                      marginLeft: -74,
                      marginTop: '57%',
                      fontFamily: 'Times',
                    }}>
                    Learn About Minor Arcana
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
