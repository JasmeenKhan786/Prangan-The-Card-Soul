import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

export default class Doubt extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      doubts: [],
      question: '',
      noofquestions: 0,
      email: firebase.auth().currentUser.email,
    };
  }
  getQuestions = async () => {
    this.setState({doubts:[]})
    var tempt = await db
      .collection('doubts')
      .where('email', '==', this.state.email)
      .get();
    this.setState({ noofquestions: tempt.docs.length });
    tempt.docs.map((x) => {
      var arr = this.state.doubts;
      arr.push(x.data());
      this.setState({ doubts: arr });
    });
  };
  componentDidMount = async () => {
    this.getQuestions();
  };

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
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginLeft: '20%',
                fontFamily: 'Times',
              }}>
              Ask Your Doubts
            </Text>

            <TouchableOpacity
              style={{ marginLeft: '18%' }}
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <FontAwesome name="user-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <Text
              style={{
                marginTop: '5%',
                marginBottom: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                marginRight: 5,
              }}>
              Biography
            </Text>

            <Text
              style={{
                marginBottom: 10,
                fontWeight: '100',
                color: 'black',
                marginLeft: 5,
                marginRight: 5,
              }}>
              Hey Everyone, This is Prangan Dhingra the Tarot Card Reader. We
              love engaging with people and sharing our expertise. We believe
              deeply in making every customer happy –after all, it's those
              customers who are helping us grow and be successful.
            </Text>

            <Text
              style={{
                marginTop: '10%',
                marginBottom: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                marginRight: 5,
              }}>
              Your Questions
            </Text>

            {this.state.doubts.map((xyz) => {
              return (
                <ScrollView
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    width: '90%',
                    height: 125,
                    borderRadius: 10,
                    padding: 5,
                    alignSelf: 'center',

                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Times',
                    }}>
                    Question: {xyz.question}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Times',
                    }}>
                    Answer: {xyz.answer}
                  </Text>
                </ScrollView>
              );
            })}

            <TouchableOpacity
              style={{
                width: 320,
                height: 50,
                backgroundColor: 'black',
                marginTop: 30,
                marginLeft: 20,
                borderRadius: 10,
                justifyContent: 'center',
                padding: 20,
              }}
              onPress={() => {
                if (this.state.noofquestions >= 3) {
                  alert(
                    'You have Reached the maximum questions limit. Please upgrade to Premium!'
                  );
                } else {
                  this.setState({ modalVisible: true });
                }
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Times',
                }}>
                Ask a Question
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '10%',
                marginBottom: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 5,
                fontSize: 20,
                marginRight: 5,
              }}>
              Special Offer
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
                Alert.alert(
                  'Mail us to thecardsoul15@gmail.com !',
                  'Also you can contact us through "About Us"',
                  [
                    {
                      text: 'Maybe, Later!',
                      style: 'cancel',
                    },
                    {
                      text: 'Ok!',
                      style: 'cancel',
                    },
                    {
                      text: 'Cancel!',
                    },
                  ]
                );
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Times',
                }}>
                Upgrade To Premium
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
                  }}
                  placeholder="Ask A Question"
                  onChangeText={(val) => {
                    this.setState({ question: val });
                  }}
                  value={this.state.question}
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
                      this.state.question !== '' &&
                      this.state.question.length >= 10
                    ) {
                      this.setState({ modalVisible: false });
                      db.collection('doubts').add({
                        email: this.state.email,
                        question: this.state.question,
                        answer: '',
                      });
                      Alert.alert(
                        'Submitted!',
                        'Thank you for asking your question! We would love to answer your question. You can expect back from us within 48 hours! Happy Learing!'
                      );
                        this.setState({question:''})
                      this.getQuestions();
                    } else {
                      alert('Please enter a valid question!');
                    }
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
