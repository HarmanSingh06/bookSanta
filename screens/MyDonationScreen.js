import React ,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native'; 
import {Card,Icon,ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader.js';
import firebase from 'firebase';
import db from '../config.js';

export default class MyDonationScreen extends React.Component{
    render(){
        return( 
            <Text>
                This is My Donation Screen
            </Text>
        )
    }
}
