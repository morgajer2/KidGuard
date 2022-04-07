import { Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';

export const KidScreen = ({ navigation }) => {
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