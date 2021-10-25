import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Dashboard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
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
              <Text
                style={{ color: 'white', fontSize: 18, fontFamily: 'Times' }}>
                Home
              </Text>
              <TouchableOpacity
                style={{ marginLeft: '50%' }}
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <FontAwesome name="user-circle" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '90%',
                height: RFValue(45),
                padding: RFValue(10),
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#BF953F',
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <EvilIcons name="search" size={20} color="#BF953F" />
              <TextInput
                style={{
                  paddingLeft: 10,
                  width: '92%',
                  fontFamily: 'Times',
                  fontSize: 15,
                }}
                placeholder="Search"
                placeholderTextColor="#BF953F"
              />
            </View>

            <Text
              style={{
                marginTop: 15,
                marginLeft: 20,
                fontSize: 22,
                color: 'white',
                fontFamily: 'Times',
              }}>
              Special Offer
            </Text>

            <View
              style={{
                width: '85%',
                height: 140,
                backgroundColor: '#CAE8FF',
                alignSelf: 'center',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#BF953F',
                marginTop: 20,
                flexDirection: 'row',
                elevation: 30,
              }}>
              <LinearGradient
                colors={['#BF953F', '#FCF6BA', '#B38728', '#FBF5B7', '#AA771C']}
                start={{ x: 0.8, y: 0 }}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}>
                <Image
                  source={require('../assets/bgg1.png')}
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    borderRadius: 30,
                    marginTop: 5,
                  }}
                />
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: '#BF953F',
                    marginTop: 30,
                    marginLeft: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('Card');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontFamily: 'Times',
                    }}>
                    Start Learning
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <Text
              style={{
                marginTop: 15,
                marginLeft: 20,
                fontSize: 22,
                color: 'white',
                fontFamily: 'Times',
              }}>
              Services
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <View
                style={{
                  width: '42%',
                  height: 200,
                  backgroundColor: '#CAE8FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: '10%',
                }}>
                <LinearGradient
                  colors={[
                    '#BF953F',
                    '#FCF6BA',
                    '#B38728',
                    '#FBF5B7',
                    '#AA771C',
                  ]}
                  style={{
                    flex: 1,
                    //flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={require('../assets/home1.png')}
                    style={{
                      width: 100,
                      height: 100,
                      alignSelf: 'center',
                      borderRadius: 30,
                      marginTop: '10%',
                    }}
                  />
                  <Text style={{ textAlign: 'center', fontFamily: 'Times' }}>
                    Test Your Knowledge
                  </Text>

                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: '#BF953F',
                      marginTop: 10,
                      alignSelf: 'center',
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('QuizScreen');
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Times',
                      }}>
                      Quiz
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              <View
                style={{
                  width: '42%',
                  height: 200,
                  backgroundColor: '#CAE8FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: '10%',
                }}>
                <LinearGradient
                  colors={[
                    '#BF953F',
                    '#FCF6BA',
                    '#B38728',
                    '#FBF5B7',
                    '#AA771C',
                  ]}
                  style={{
                    flex: 1,
                    //flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={require('../assets/home2.png')}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: '10%',
                      alignSelf: 'center',
                      borderRadius: 30,
                    }}
                  />
                  <Text style={{ textAlign: 'center', fontFamily: 'Times' }}>
                    Get Your Reading Done Now!!
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: '#BF953F',
                      marginTop: 10,
                      alignSelf: 'center',
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Reading');
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Times',
                      }}>
                      Reading
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <View
                style={{
                  width: '42%',
                  height: 200,
                  backgroundColor: '#CAE8FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: '10%',
                }}>
                <LinearGradient
                  colors={[
                    '#BF953F',
                    '#FCF6BA',
                    '#B38728',
                    '#FBF5B7',
                    '#AA771C',
                  ]}
                  style={{
                    flex: 1,
                    //flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={require('../assets/home3.png')}
                    style={{
                      width: 100,
                      height: 100,
                      alignSelf: 'center',
                      borderRadius: 30,
                      marginTop: '10%',
                    }}
                  />
                  <Text style={{ textAlign: 'center', fontFamily: 'Times' }}>
                    Ask Your Doubts Now
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: '#BF953F',
                      marginTop: 10,
                      alignSelf: 'center',
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Doubt');
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Times',
                      }}>
                      Doubt
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              <View
                style={{
                  width: '42%',
                  height: 200,
                  backgroundColor: '#CAE8FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: '10%',
                }}>
                <LinearGradient
                  colors={[
                    '#BF953F',
                    '#FCF6BA',
                    '#B38728',
                    '#FBF5B7',
                    '#AA771C',
                  ]}
                  style={{
                    flex: 1,
                    //flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={require('../assets/home4.png')}
                    style={{
                      width: 100,
                      height: 100,
                      alignSelf: 'center',
                      borderRadius: 30,
                      marginTop: '10%',
                    }}
                  />
                  <Text style={{ textAlign: 'center', fontFamily: 'Times' }}>
                    Know About Us
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: '#BF953F',
                      marginTop: 10,
                      alignSelf: 'center',
                      borderRadius: 10,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('AboutUs');
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Times',
                      }}>
                      About Us
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
