
import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';
import { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';

export const PersonalScreen = ({ navigation }) => { 

return (

<View style={styles.container}>
<LinearGradient
  // Background Linear Gradient
  colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
  style={styles.background}
/>
<View style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
  <View style={[styles.container, { flex: 2 }]}>
    <Image source={require('../assets/Images/mainIcon.png')} />
    <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 46, color: general_color }}>Welcome Back</Text>
  </View>
</View>
</View>


);

};