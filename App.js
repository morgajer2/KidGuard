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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator /*screenOptions={{ headerShown: false }}*/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WhoRU" component={WhoRUScreen} options={{ title: "Start Discovering" }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Start Discovering" }} />
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