import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import firebase from 'firebase';
import db from '../config';
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      city: '',
      image: '',
      contact: '',
      email: firebase.auth().currentUser.email,
      id: '',
    };
  }
  getProfile = async () => {
    var temp = await db
      .collection('users')
      .where('email', '==', this.state.email)
      .get();
    console.log(temp.docs);
     temp.docs.map((doc) => {
      var obj = doc.data();
      this.setState({
        name: obj.name,
        contact: obj.contact,
        city: obj.city,
        id: doc.id,
      });
    });
  };

  componentDidMount = () => {
    this.getProfile();
  };
  onSubmit = () => {
    db.collection('users').doc(this.state.id).update({
      name: this.state.name,
      contact: this.state.contact,
      city: this.state.city,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        
         <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Dashboard');
                }}>
                <AntDesign name="home" size={24} color="white" />
              </TouchableOpacity>
           <Text style={{ color: 'white', fontSize: 18 }}>Profile</Text>
          <TouchableOpacity
            style={{  }}
            onPress={() => {
              alert('Logout Successfully');
              firebase.auth().signOut();
              this.props.navigation.navigate('LoginScreen');
            }}>
            <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
          </View>
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
                'https://cdn4.iconfinder.com/data/icons/hobbies-color-pop-vol-3/64/tarot-card-reading-512.png',
            }}
          />
        </View>

        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Name
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#BF953F',
            paddingLeft: 10,
          }}
          value={this.state.name}
          placeholder="John Doe"
          onChangeText={(val) => {
            this.setState({ name: val });
          }}
        />
        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Email
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#BF953F',
            paddingLeft: 10,
          }}
          value={this.state.email}
          editable={false}
          placeholder="johndoe@gmail.com"
        />
        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Address
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#BF953F',
            paddingLeft: 10,
          }}
          value={this.state.city}
          placeholder="Mumbai"
          onChangeText={(val) => {
            this.setState({ city: val });
          }}
        />

        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Contact
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#BF953F',
            paddingLeft: 10,
          }}
          value={this.state.contact}
          placeholder="Contact"
          maxLength={10}
              keyboardType={'numeric'}
          onChangeText={(val) => {
            this.setState({ contact: val });
          }}
        />

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 40,
            borderColor: '#BF953F',
            borderWidth: 1,
            borderRadius: 5,
            width: '40%',
            backgroundColor: 'black',
            padding: 6,
          }}
          
            onPress={() => {
              alert('Saved Successfully!');
              this.onSubmit()}}>
          
          <Text style={{ textAlign: 'center', color: 'white' }}>Confirm</Text>
          
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
