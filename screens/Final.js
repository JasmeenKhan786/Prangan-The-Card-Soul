import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';


export default class FinalScreen extends React.Component {
  render() {
    var img;
    if(this.props.navigation.getParam('score')>=5){
img=require("../assets/trop.png")
    }
    else{
img=require("../assets/tr2.png")
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={{uri:"https://media.istockphoto.com/vectors/shiny-banners-with-air-balloons-and-serpentine-vector-illustration-vector-id841199952?k=20&m=841199952&s=612x612&w=0&h=Q1kVA_LIDTb9sgvb7TmP34cz3RFDwgSDJX6cfWElsXc="}}
          style={{ width: '100%', height: '100%',  }}>
          <ScrollView>
        
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: '70%',
                alignSelf: 'center',
                color:'white',
              }}>
              Final Score is {this.props.navigation.getParam('score')}
            </Text>
            <Image
              source={img}
              style={{ width: 170, height: 170, marginTop: '15%', alignSelf:'center',}}></Image>
            <TouchableOpacity
              style={{
                backgroundColor: '#BF953F',
                width: 100,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10%',
                alignSelf:'center',

              }}
              onPress={() => {
                this.props.navigation.popToTop();
              }}>
              <Text> Back</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
