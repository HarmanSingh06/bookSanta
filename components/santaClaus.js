import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView style = {{width:"60%"}}source = {require("../assets/santa.json")} autoPlay loop/>
        );
    }
}