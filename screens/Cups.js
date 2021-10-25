import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import cups from '../cups';

export default class Cups extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
            style={{ alignItems: 'center' }}
            onPress={() => {
              this.props.navigation.navigate('MinorArcana');
            }}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              marginRight: '26%',
              fontFamily: 'Times',
            }}>
            Minor Arcana
          </Text>
        </View>

        <FlatList
          horizontal={true}
          data={cups}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, width: Dimensions.get('window').width }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  {item.title}
                </Text>
                <Image
                  source={item.image}
                  style={{
                    flex: 1,
                    width: '100%',
                    height: 400,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                    fontFamily:'Comic',
                  }}>
                  {item.description}
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
