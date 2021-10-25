import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      pwd: '',
      contact: '',
      city: '',
    };
  }

  signup = (emailId, password) => {
    if(this.state.email && this.state.name && this.state.pwd && this.state.contact && this.state.city){
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        db.collection('users').add({
          email: emailId,
          name: this.state.name,
          contact: this.state.contact,
          pwd: this.state.pwd,
          city: this.state.city,
        });
        this.props.navigation.navigate('Dashboard');
      })
      .catch(function (error) {
        var errrorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
    }
    else{
      Alert.alert("Please Fill All The Fields!")
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '100%' }}>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 20,
              marginTop: '30%',
              fontFamily: 'Times',
            }}>
            Sign Up
          </Text>
          <Text
            style={{
              color: 'pink',
              marginLeft: 20,
              fontFamily: 'Times',
              fontSize: 15,
            }}>
            We are happy to see you here!
          </Text>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginHorizontal: '5%',
              marginTop: 30,
              borderBottomColor: 'black',
            }}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 10, width: '92%', fontFamily: 'Times' }}
              placeholder="Name"
              placeholderTextColor="grey"
              onChangeText={(val) => {
                this.setState({ name: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginHorizontal: '5%',
              marginTop: 20,
              borderBottomColor: 'black',
            }}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 10, width: '92%', fontFamily: 'Times' }}
              placeholder="Email"
              placeholderTextColor="grey"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginHorizontal: '5%',
              marginTop: 20,
              borderBottomColor: 'black',
            }}>
            <Entypo name="key" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 10, width: '92%', fontFamily: 'Times' }}
              placeholder="Password"
              placeholderTextColor="grey"
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginHorizontal: '5%',
              marginTop: 20,
              borderBottomColor: 'black',
            }}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 10, width: '92%', fontFamily: 'Times' }}
              placeholder="Contact No."
              placeholderTextColor="grey"
              //  maxLength={10}
              // keyboardType={'numeric'}
              onChangeText={(val) => {
                this.setState({ contact: val });
                
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginHorizontal: '5%',
              marginTop: 20,
              borderBottomColor: 'black',
            }}>
            <FontAwesome5 name="city" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 10, width: '92%', fontFamily: 'Times' }}
              placeholder="City"
              placeholderTextColor="grey"
              onChangeText={(val) => {
                this.setState({ city: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '70%',
              height: 30,
              alignSelf: 'center',
              marginTop: 30,
              borderRadius: 20,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.signup(this.state.email, this.state.pwd);
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Times',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
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
              Already have an account?
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
