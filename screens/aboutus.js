import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
  Modal,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      feedback: '',
      comments: '',
      email: firebase.auth().currentUser.email,
    };
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
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
              marginLeft: '18%',
              fontFamily: 'Times',
            }}>
            About Us
          </Text>
          <TouchableOpacity
            style={{ marginLeft: '18%' }}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <FontAwesome name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            
            width: '100%',
            height: '100%',
          }}>
          <Text
            style={{
              marginTop: '3%',
              marginBottom: 10,
              // fontWeight: 'bold',
              color: 'black',
              marginLeft: 5,
              fontSize: 16,
              fontFamily: 'Comic',
              marginRight: 5,
            }}>
            Hey Everyone, This is Prangan Dhingra the Tarot Card Reader. We love
            engaging with people and sharing our expertise. We believe deeply in
            making every customer happy –after all, it's those customers who are
            helping us grow and be successful.
          </Text>

          <Text
            style={{
              marginTop: 5,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              marginLeft: 5,
              marginRight: 5,
              fontFamily: 'Comic',
            }}>
            Why should you trust us?
          </Text>

          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              color: 'black',
              fontFamily: 'Comic',
              marginLeft: 5,
              marginRight: 5,
            }}>
            We have been teaching various cousres of Tarot for years. Our goal
            is to provide quality education services to our students at
            affordable prices. We only learn from what other people teach us and
            want to share the knowledge with others, so that they can also learn
            things in their own time. We promise 100% customer satisfaction
            because we are committed in helping every individual who enrolls in
            our courses. We will do everything within our power not just to help
            them succeed, but also make sure they have a fun learning experience
            that makes them feel satisfied with what they have learned.
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
              Linking.openURL('https://prangandhingra.github.io/54-/');
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Times',
              }}>
              Our Website
            </Text>
          </TouchableOpacity>

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
              this.setState({ modalVisible: true });
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Times',
              }}>
              Review Us
            </Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                backgroundColor: 'white',
                width: '80%',
                height: '50%',
                alignSelf: 'center',
                marginTop: '20%',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{ alignItems: 'flex-end', marginTop: 10, margin: 10 }}
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginTop: 50,
                  width: '70%',
                  height: 30,
                  borderRadius: 5,
                  alignSelf: 'center',
                  paddingLeft: 10,
                  fontFamily: 'Times',
                }}
                placeholder="Review Us"
                onChangeText={(val) => {
                  this.setState({ feedback: val });
                }}
                value={this.state.feedback}
              />
              <TouchableOpacity
                style={{
                  width: '50%',
                  height: 30,
                  backgroundColor: 'black',
                  marginTop: 30,
                  marginLeft: 20,
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (
                    this.state.feedback !== '' &&
                    this.state.feedback.length >= 2
                  ) {
                    this.setState({ modalVisible: false });
                    db.collection('feedback').add({
                      email: this.state.email,
                      feedback: this.state.feedback,
                    });
                    Alert.alert(
                      'Submitted!',
                      'Thank you for submitting your feedback! Your Feedback matters!!',
                      [
                        {
                          text: 'Cool!',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        }
                      ]
                    );
                  } else {
                    alert('Please enter a valid feedback!');
                  }
                }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </LinearGradient>
      </ScrollView>
    );
  }
}
