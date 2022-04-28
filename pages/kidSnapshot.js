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

    return (

        <View style={styles.container} >{/*style={[styles.container,{minHeight: Dimensions.get('screen').height - 100, minWidth:Dimensions.get('screen').width}]}*/}
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <KeyboardAvoidingView style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
                <Text>Thank you</Text>
            </KeyboardAvoidingView>
        </View>

    );
};