import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import quiz from '../quiz';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class QuizScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      score: 0,
      selected: '',
    };
  }
  componentDidMount = () => {
    var questionNumber = this.props.navigation.getParam('questionNumber');
    var score = this.props.navigation.getParam('score');
    if (questionNumber !== undefined) {
      this.setState({ questionNumber: questionNumber, score: score });
    }
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/quiz1.png')}
        style={{ width: '100%', height: '100%' }}>
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
          <Text style={{ color: 'white', fontSize: 18 }}>Quiz</Text>
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
            marginTop: 10,
            marginLeft: 10,
            marginRight:5,
            fontSize:"20",
            fontWeight:'bold',
          }}>
          <Text style={{
            fontFamily:"Times",
            fontSize:16,
          }}>{quiz[this.state.questionNumber].question}</Text>
          <TouchableOpacity
            style={{
              
              borderWidth: 1,
              width: '70%',
              height: 40,
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 15,
              justifyContent: 'center',
              backgroundColor:
                this.state.selected === quiz[this.state.questionNumber].option1
                  ? '#BF953F'
                  : 'rgba(255,255,255,0.5)',
            }}
            onPress={() => {
              this.setState({
                selected: quiz[this.state.questionNumber].option1,
              });
            }}>
            <Text>{quiz[this.state.questionNumber].option1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '70%',
              height: 40,
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 15,
              backgroundColor:
                this.state.selected === quiz[this.state.questionNumber].option2
                  ? '#BF953F'
                  : 'rgba(255,255,255,0.5)',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.setState({
                selected: quiz[this.state.questionNumber].option2,
              });
            }}>
            <Text>{quiz[this.state.questionNumber].option2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '70%',
              height: 40,
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 15,
              backgroundColor:
                this.state.selected === quiz[this.state.questionNumber].option3
                  ? '#BF953F'
                  : 'rgba(255,255,255,0.5)',

              justifyContent: 'center',
            }}
            onPress={() => {
              this.setState({
                selected: quiz[this.state.questionNumber].option3,
              });
            }}>
            <Text>{quiz[this.state.questionNumber].option3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '70%',
              height: 40,
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 15,
              backgroundColor:
                this.state.selected === quiz[this.state.questionNumber].option4
                  ? '#BF953F'
                  : 'rgba(255,255,255,0.5)',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.setState({
                selected: quiz[this.state.questionNumber].option4,
              });
            }}>
            <Text>{quiz[this.state.questionNumber].option4}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: '40%',
              height: 45,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
              marginLeft: '60%',
            }}
            onPress={() => {
              //calculate score
              if (this.state.selected !== '') {
                var score =
                  this.state.selected === quiz[this.state.questionNumber].answer
                    ? this.state.score + 1
                    : this.state.score;
              } else {
                alert('Please select an option!');
                return;
              }

              //navigate
              if (this.state.questionNumber < 9) {
                this.setState({selected:''})

                this.props.navigation.push('QuizScreen', {
                  questionNumber: this.state.questionNumber + 1,
                  score: score,
                });
              } else {
                this.setState({selected:''})

                this.props.navigation.push('FinalScreen', { score: score });
              }
            }}>
            <Entypo name="arrow-right" size={24} color="white" />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}>
              {' '}
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
