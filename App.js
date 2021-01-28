import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from './screens/welcomeScreen'
import db from './config'

export default function App() {
  return (
      <WelcomeScreen/>
  );
}
