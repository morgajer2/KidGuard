import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';
import { useState } from 'react';

import * as firebase from "firebase";

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';

export const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  const signIn = () => {
    console.log('signIn: checking values fron user...');

    if (email.length == 0 || password.length == 0) {
      setErrorMsg("All filleds are required.");
      return;
    }

    handleLogin();

  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.uid);

      //get all the data about the user
      const dbRef = firebase.database().ref();
      var ref = dbRef.child("users").child(user.uid);
      ref.get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log("SIGN-IN- user found: "+ JSON.stringify(snapshot.val()));
          navigation.navigate('personalPage',{user: userCredentials.user, userDitails: snapshot.val()});
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

    }).catch(error => alert(error.message))

  }

  //const errorAlert = (ans) => { if (ans == true) setErrorMsg("You alredy have an account. Please try to sign in."); else if (typeof ans == typeof firebase.database().ref()) { setErrorMsg(""); navigation.navigate('SignIn'); /* TODO: show a message to the user that "registered successfully" */ } else setErrorMsg(ans) }

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
          {errorMsg.length > 0 &&
            <Text style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>{errorMsg}</Text>
          }
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 2, alignContent: 'center' }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signIn}>
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