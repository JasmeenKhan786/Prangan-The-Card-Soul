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
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pwd: '',
    };
  }

  signup = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        this.props.navigation.navigate('Dashboard');
      })
      .catch(function (error) {
        var errrorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
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
              color: '#141518',
              fontFamily: 'Times',
            }}>
            Welcome Back!
          </Text>
          <Text
            style={{
              color: 'pink',
              marginLeft: 20,
              fontSize: 15,
              fontFamily: 'Times',
            }}>
            Hey! Good to see you again,
          </Text>

          <Text
            style={{
              fontSize: 35,
              marginLeft: 20,
              marginTop: 50,
              color: 'black',
              fontFamily: 'Times',
            }}>
            Login
          </Text>

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
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              fontFamily: 'Times',
            }}
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                fontFamily: 'Times',
                fontSize: 15,
              }}>
              Don't have an account?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 10,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Reset');
            }}>
            <Text
              style={{
                fontFamily: 'Times',
                fontSize: 15,
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
