import { Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';
import * as toxicity from '@tensorflow-models/toxicity';

import axios from 'axios';

export const KidScreen = ({ navigation }) => {

    var imageUrl = "https://tesseract.projectnaptha.com/img/eng_bw.png";

    axios.get('http://192.168.1.61:3000/AI/', { params: { imageUrl: imageUrl } })
    .then(function (response) {
      // handle success
      console.log(response.request["_response"]);
      console.log("m");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log("y");
    })
    .then(function () {
      // always executed
    });

const backToSignIn= () => {
    navigation.navigate('SignIn');

  };
    return (

        <View style={{ paddingTop: 50, paddingLeft: 10 }}>
         <Image style={{alignSelf:'center'  }} source={require('../assets/Images/mainIcon.png')} />
         <Image style={{alignSelf:'center', marginTop: 100}} source={require('../assets/Images/Group71.png')} />
         <Text style={{ fontSize: 35, textAlign: 'center', paddingTop: 20, paddingBottom: 35,fontWeight: 'bold',marginBottom:50 }}>Nothing out{"\n"}  of line here... </Text>
         <TouchableOpacity activeOpacity={0.5} onPress={backToSignIn}>
            <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
              <Text textAnchor="middle" style={styles.text_button}>Im a grown up</Text>
            </ImageBackground>
          </TouchableOpacity>


        </View>
    );
};