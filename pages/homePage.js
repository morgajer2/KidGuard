import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';

import {general_color, gray_color, orange_color, styles} from './styles/styleSheet1';

export const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
          style={styles.background}
        />
        <View style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
          <View style={[styles.container, { flex: 3 }]}>
            <Image source={require('../assets/Images/mainIcon.png')} />
            <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 46, color:general_color }}>Get Notified,{"\n"}
              <Text style={{ color: orange_color }}>Protect</Text> your Kids</Text>
            <Text style={{ fontSize: 15, paddingTop: 27, color:general_color }}>Discover potential cyber bullying</Text>
          </View>
          <View style={{ flex: 1, alignContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{
              navigation.navigate('WhoRU')
            }}>
              <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
                <Text textAnchor="middle" style={styles.text_button}>Get Started</Text>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{ color: gray_color, fontSize: 10, alignSelf:'center'}}>Already have an acoount? <Text style={styles.text_link} onPress={()=>navigation.navigate('SignIn')}>Sign in</Text></Text>
          </View>
        </View>
      </View>
    );
  };

  //module.exports = HomeScreen;