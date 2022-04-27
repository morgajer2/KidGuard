
import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';
import { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { getAuth, signOut } from "firebase/auth";


export const PersonalScreen = ({ route, navigation }) => {
  const { userCredentials, userDitails } = route.params;

  const logOut = () => {

    auth.signOut().then(() => {
      navigation.navigate('Home');
    }).catch((error) => {
      console.log(error);
    });
  };

  const addNewKid = () => {
    console.log("ADD NEW KID");
  }
  return (

    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
        style={styles.background}
      />
      <View style={[{ backgroundColor: "white", width: '100%', flex: 1, flexDirection: 'row' }]}>
      <View style={{paddingTop: 25, paddingLeft: 10}}>
      <Image source={require('../assets/Images/mainIcon.png')}  />
      </View>
        <View>
          <Text style={{ fontSize: 12, textAlign: 'left', color: gray_color, paddingLeft: 10, paddingTop: 25 }}>Welcome back</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, textAlign: 'left', color: general_color, paddingLeft: 10, fontWeight: 'bold' }}>{userDitails["fullName"]}</Text>
            <Text style={{ fontSize: 20, textAlign: 'right', color: general_color, paddingLeft: 150, textAlign: 'left', fontWeight: 'bold' }} onPress={logOut}>log out</Text>
          </View>

        </View>
      </View>


      <View style={{ flex: 5 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingTop: 50 }}>
            {/*Images */}
          </View>
          <View style={{ flex: 1 }}>

          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }} onPress={addNewKid}>Add a new kid +</Text>
      </View>
    </View>


  );

};