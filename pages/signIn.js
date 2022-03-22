import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';

export const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const signIn = () => {
    console.log('signIn: checking values fron user...');
    var error = "";

    if (email.length == 0 || password.length == 0) {
      errorAlert("All filleds are required.");
      return;
    }

    //TODO: arrange!

    //checking email:
    var re = /\S+@\S+\.\S+/;
    var eAns = re.test(email);
    (!eAns) ? error += "Email address is not valid." : null;

    //checking password:
    (password.length < 6) ? error += " Password must have at least 6 characters." : null;

    //error display
    (error != "") ? errorAlert(error) : null;
    
    //addNewUser(email, fullName, password, errorAlert);
  };

  const errorAlert = (ans) => { if (ans == true) setErrorMsg("You alredy have an account. Please try to sign in."); else if (typeof ans == typeof firebase.database().ref()) { setErrorMsg(""); navigation.navigate('SignIn'); /* TODO: show a message to the user that "registered successfully" */ } else setErrorMsg(ans) }


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
          <TouchableOpacity activeOpacity={0.5} onPress={() => { signIn }}>
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