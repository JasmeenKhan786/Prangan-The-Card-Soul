import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import AppNavigator from './navigation/navigate';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  Times: require('./assets/times.ttf'),
  Comic: require('./assets/comic.ttf'),
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return <AppNavigator />;
    }
  }
}
