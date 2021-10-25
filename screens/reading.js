import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Reading extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#BF953F', '#FCF6BA', '#B38728', '#FBF5B7', '#AA771C']}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
          start={{ x: 0.5, y: 0.5 }}>
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
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: '19%',
                alignItems: 'center',
                fontFamily: 'Times',
              }}>
              Reading
            </Text>
            <TouchableOpacity
              style={{ marginLeft: '18%' }}
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <FontAwesome name="user-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ width: '100%' }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                margin: 10,
              }}>
              <Avatar
                rounded
                size="large"
                source={{
                  uri:
                    'https://www.kindpng.com/picc/m/339-3399258_about-denise-tarot-reader-tarot-card-reading-clipart.png',
                }}
              />
            </View>

            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                //marginTop: '5%',
                fontSize: 18,
                fontFamily: 'Times',
              }}>
              Prangan Dhingra
            </Text>

            <Text
              style={{
                color: 'black',
                fontFamily: 'Times',
                fontSize: 18,
                marginTop: '5%',
                padding: 10,
              }}>
              Testimonials
            </Text>
            <ScrollView horizontal>
              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  You've been doing a great job. You're so talented. Thank you
                  for your hard work, and letting me know my destiny.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                </View>

                <Text
                  style={{
                    //marginRight: '80%',
                    //alignItems: 'flex-end',\
                    fontFamily: 'Comic',
                  }}>
                  Advika Sharma
                </Text>
              </View>

              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  I was confused in doing job or business but u have been
                  helping me out of this confusion...thanks alot.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star-half-empty" size={20} color="black" />
                </View>
                <Text
                  style={{
                    alignItems: 'flex-end',
                    fontFamily: 'Comic',
                  }}>
                  Aryan Gupta
                </Text>
              </View>

              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  BEST tarot card reader,very accurate!
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                </View>
                <Text
                  style={{
                    alignItems: 'flex-end',
                    fontFamily: 'Comic',
                  }}>
                  Taranpreet Singh
                </Text>
              </View>
              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  Thank you so much for everything. Best tarot reading I've ever
                  had. Your reading has brought me so much clarity as things
                  have been unfolding in my life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star-half-empty" size={20} color="black" />
                </View>
                <Text
                  style={{
                    alignItems: 'flex-end',
                    fontFamily: 'Comic',
                  }}>
                  Reena Mahajan
                </Text>
              </View>

              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  Thank you so much for doing such amazing readings for us!
                  Everyone really enjoyed their experience wishing you a great
                  success.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star-o" size={20} color="black" />
                </View>
                <Text
                  style={{
                    alignItems: 'flex-end',
                    fontFamily: 'Comic',
                  }}>
                  Meetu Chadha
                </Text>
              </View>

              <View
                style={{
                  width: 360,
                  height: 155,
                  backgroundColor: '#CAE8FF',
                  //alignSelf: 'center',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#BF953F',
                  marginTop: 10,
                  //flexDirection: 'row',
                  marginHorizontal: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Comic',
                  }}>
                  Thanks so much for everything. Best tarot reading I've ever
                  had.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star" size={20} color="black" />
                  <FontAwesome name="star-half-empty" size={20} color="black" />
                </View>
                <Text
                  style={{
                    alignItems: 'flex-end',
                    fontFamily: 'Comic',
                  }}>
                  Meenakshi Anand
                </Text>
              </View>
            </ScrollView>

            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Book Your Appointment Now
            </Text>
            <TouchableOpacity
              style={{
                width: 320,
                height: 50,
                backgroundColor: 'black',
                marginTop: 30,
                marginLeft: 20,
                borderRadius: 10,
                justifyContent: 'center',
              }}
              onPress={() => {
                Linking.openURL('mailto:thecardsoul15@gmail.com');
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Times',
                }}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
