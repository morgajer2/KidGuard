import { Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';
import * as toxicity from '@tensorflow-models/toxicity';

export const KidScreen = ({ navigation }) => {

    const AI = () => {
        // The minimum prediction confidence.
        const threshold = 0.9;

        // Which toxicity labels to return.
        const labelsToInclude = ['identity_attack', 'insult', 'threat'];
        console.log("yarin");

        toxicity.load(threshold, labelsToInclude).then(model => {
            // Now you can use the `model` object to label sentences. 
            model.classify(['you suck']).then(predictions => 
                { console.log("mor!!!!!!!!") })
                .catch(function (error) {
                    console.log(error);
                });
        }).catch(function (error) {
            console.log("load"+error);
        });
    };

    AI();


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