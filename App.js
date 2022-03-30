import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Icon } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages:
import { HomeScreen } from './pages/homePage'
import { WhoRUScreen } from './pages/whoRU'
import { SignInScreen } from './pages/signIn'
import {PersonalScreen} from './pages/personalPage'

//Disable "Setting a timer" warning.
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']);
//-----

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator /*screenOptions={{ headerShown: false }}*/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WhoRU" component={WhoRUScreen} options={{ title: "Start Discovering" }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Start Discovering" }} />
        <Stack.Screen name="personalPage" component={PersonalScreen} options={{ title: "Start Discovering" }} />

      </Stack.Navigator>
      <View>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      </View>
    </NavigationContainer>

  );
}


/*
//Navigation-Example:
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};*/