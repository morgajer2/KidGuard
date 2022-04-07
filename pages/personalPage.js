
import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';
import { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
//import { getAuth, signOut } from "firebase/auth";

export const PersonalScreen = ({ navigation }) => { 


const logOut = () => {

    auth.signOut().then(() => {
        navigation.navigate('Home');
      }).catch((error) => {
        console.log(error);
    });
};
return (

<View style={styles.container}>
<LinearGradient
  // Background Linear Gradient
  colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
  style={styles.background}
/>
<View style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
  <View style={[styles.container, { flex: 1 }]}>
    <View style={[styles.container, { flex: 1, paddingTop:50 }]}>
        <TouchableOpacity activeOpacity={0.5} onPress={logOut}>
                <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
                <Text textAnchor="middle" style={[styles.text_button, {paddingBottom: 240}]}>Log Out</Text>
                </ImageBackground>
        </TouchableOpacity>
    </View>
    <View style={[styles.container, { flex: 1 }]}>
        <Image source={require('../assets/Images/mainIcon.png')} />
        <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 46, color: general_color }}>Welcome Back name</Text>
    </View>
  </View>
</View>
</View>


);

};