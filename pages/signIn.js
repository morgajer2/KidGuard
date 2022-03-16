import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';

import {general_color, gray_color, orange_color, styles} from './styles/styleSheet1';

export const SignInScreen = ({ navigation }) => {
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
        <View style={{ paddingTop: 35, alignSelf: 'center', flex: 1 }}>
          <TextInput
            //value={this.state.username}
            onChangeText={(fullName) => { formdata['fullName'] = fullName; console.log("hello") }}
            placeholder={'Full name'}
            style={styles.input}
          />
          <TextInput
            //value={this.state.username}
            onChangeText={(email) => { formdata['email'] = email; }}
            placeholder={'Email address'}
            style={styles.input}
          />
        </View>
        <View style={{ flex: 2, alignContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('') /* TODO: add navigation!*/ }}>
            <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
              <Text textAnchor="middle" style={styles.text_button}>Sign In</Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text style={{ color: gray_color, fontSize: 10, alignSelf: 'center' }}>Don't have an account yet? <Text style={styles.text_link} onPress={() => navigation.navigate('WhoRU')}>Sign Up</Text></Text>
        </View>
      </View>
    </View>
  );
};


  //module.exports = HomeScreen;