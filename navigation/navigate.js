import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import LoadingScreen from '../screens/LoadingScreen';
import Profile from '../screens/Profile';
import Reset from '../screens/Reset';
import Cups from '../screens/Cups';
import Pentacles from '../screens/Pentacles';
import Wands from '../screens/Wands';
import Swords from '../screens/Swords';
import QuizScreen from '../screens/Quiz';
import Whatistarot from '../screens/WhatisTarot';
import MajorArcana from '../screens/Majorarcana';
import MinorArcana from '../screens/Minorarcana';
import AboutUs from '../screens/aboutus';
import Shuffle from '../screens/Shuffle';
import Reading from '../screens/reading';
import Doubt from '../screens/doubt';
import FinalScreen from '../screens/Final';
import Card from '../screens/Card';
import { AntDesign } from '@expo/vector-icons';

const StackTab = createStackNavigator({
  QuizScreen: { screen: QuizScreen, navigationOptions: { headerShown: false } },
  FinalScreen: {
    screen: FinalScreen,
    navigationOptions: { headerShown: false },
  },
});

const CardsStack = createStackNavigator({
  Card: { screen: Card, navigationOptions: { headerShown: false } },
  MajorArcana: {
    screen: MajorArcana,
    navigationOptions: { headerShown: false },
  },
  MinorArcana: {
    screen: MinorArcana,
    navigationOptions: { headerShown: false },
  },
  Wands: { screen: Wands, navigationOptions: { headerShown: false } },
  Pentacles: { screen: Pentacles, navigationOptions: { headerShown: false } },
  Swords: { screen: Swords, navigationOptions: { headerShown: false } },
  Cups: { screen: Cups, navigationOptions: { headerShown: false } },
  Whatistarot: {
    screen: Whatistarot,
    navigationOptions: { headerShown: false },
  },
  Shuffle: { screen: Shuffle, navigationOptions: { headerShown: false } },
});
const MainStack = createStackNavigator({
  Dashboard: { screen: Dashboard, navigationOptions: { headerShown: false } },
  StackTab: { screen: StackTab, navigationOptions: { headerShown: false } },
  CardsStack: { screen: CardsStack, navigationOptions: { headerShown: false } },
});

const BottomTabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: MainStack,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: <AntDesign name="home" size={22} color="black" />,
    },
  },
  Doubt: {
    screen: Doubt,
    navigationOptions: {
      title: 'Doubt',
      tabBarIcon: <AntDesign name="question" size={22} color="black" />,
    },
  },
  Reading: {
    screen: Reading,
    navigationOptions: {
      title: 'Reading',
      tabBarIcon: <AntDesign name="gift" size={22} color="black" />,
    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      title: 'AboutUs',
      tabBarIcon: <AntDesign name="user" size={22} color="black" />,
    },
  },
});

const screens = {
   LoadingScreen: { screen: LoadingScreen },
  Login: { screen: Login },
  SignUp: { screen: Signup },
  Dashboard: { screen: BottomTabNavigator },
  Reset: { screen: Reset },
  CardsStack: { screen: CardsStack },
  Profile: { screen: Profile },
  Stack: { screen: StackTab },
};

const TabNavigator = createSwitchNavigator(screens);

export default createAppContainer(TabNavigator);
