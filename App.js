import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import RecieverDetailsScreen from './screens/RecieverDetailsScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
