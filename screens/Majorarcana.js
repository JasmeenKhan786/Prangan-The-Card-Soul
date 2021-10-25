import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
 Image,
  Dimensions,
} from 'react-native';
import majorarcana from '../majorarcana';
import { AntDesign } from '@expo/vector-icons';

export default class MajorArcana extends React.Component {
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
              this.props.navigation.navigate('Card');
            }}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              marginRight: '27%',
               fontFamily: 'Times',
            }}>
            Major Arcana
          </Text>
          
        </View>

        <FlatList
          horizontal={true}
          data={majorarcana}
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
                    width: '90%',
                    height: 400,
                    alignSelf:'center',
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
