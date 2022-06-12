import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';

import * as firebase from "firebase";

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  //-----------push-notifications----------------
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
      var code1 = response.notification.request.trigger.remoteMessage.data.body;
      var code2 = JSON.parse(code1);
      console.log("code: " + code2.code);
      moveToImageGallery(code2.code, code2.name);

    });

    const moveToImageGallery = (code, name) => {
      console.log(code);

      const dbRef = firebase.database().ref();
      var ref = dbRef.child("Kids").child(code).child("\images");
      ref.get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(JSON.stringify(snapshot.val()));

          //navigate to kid's gallery
          navigation.navigate('imageGallery', { code: code, name: name, images: snapshot.val() })
        } else {
          console.log("No data available");
          navigation.navigate('imageGallery', { code: code, name: name, images: [] })
        }
      }).catch((error) => {
        console.error(error);
      });

    }

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }


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
          console.log("SIGN-IN- user found: " + JSON.stringify(snapshot.val()));

          //save notification token to the DB:
          ref.child("token").set(expoPushToken);

          navigation.navigate('personalPage', { user: userCredentials.user, userDitails: snapshot.val() });
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