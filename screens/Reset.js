import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View
        style={{
          marginTop: 30,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '100%' }}>
          <TextInput
            style={{
              marginLeft: 20,
              marginTop: '89%',
              //margin: 30,
              width: '80%',
              height: 30,
              borderWidth: 1,
              borderRadius: 6,
              alignSelf: 'center',
              paddingLeft: 7,
              fontFamily: 'Times',
            }}
            placeholder="Enter Email"
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: '50%',
              height: 30,
              padding: 5,
              borderRadius: 5,
              marginTop: '8%',
              alignSelf: 'center',
            }}
            onPress={() => {
              var img;
              if (this.state.email === '' || this.state.length <= 0) {
                alert('Please enter a valid Email-id');
              } else {
                firebase.auth().sendPasswordResetEmail(this.state.email).then(()=>{
                Alert.alert(
                  'Sent!',
                  'Password Reset Email Sent! Check Your Registered Email-id!',
                  [{ text: 'Ok!', onPress: () => console.log('OK Pressed') }]
                );

                this.props.navigation.navigate('Login');
                 }).catch((err)=>{
                   alert(err.message)
                 })
              }
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Times',
              }}>
              Send Reset Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text
              style={{
                fontFamily: 'Times',
                fontSize: 15,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
