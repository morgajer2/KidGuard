import { Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';
import * as toxicity from '@tensorflow-models/toxicity';

export const imageGalleryScreen = ({ route, navigation }) => {
    const { code } = route.params;


    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{code}</Text>


        </View>
    );

};