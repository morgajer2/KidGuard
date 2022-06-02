import { Text, View, TouchableOpacity, ImageBackground, Button, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import * as toxicity from '@tensorflow-models/toxicity';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';


import axios from 'axios';

export const KidScreen = ({ route, navigation }) => {
  const [image, setImage] = useState(null);
  const { code } = route.params;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const ref = storage.ref(code + '/image.jpg');

      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();

      ref.put(bytes).then(() => {
        //var imageUrl = "https://tesseract.projectnaptha.com/img/eng_bw.png";
        ref.getDownloadURL().then((imageUrl) => {
          console.log("imageUrl: " + imageUrl);

          axios.get('http://192.168.1.61:3000/AI/', { params: { imageUrl: imageUrl } })
            .then(function (response) {
              // handle success
              var response = response.request["_response"];
              console.log("Got Response: " + response);
              if (response=='false')
                ref.delete();
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        });

      })
    }
  };




  const backToSignIn = () => {
    navigation.navigate('SignIn');

  };
  return (

    <View style={{ paddingTop: 50, paddingLeft: 10 }}>
      <Image style={{ alignSelf: 'center' }} source={require('../assets/Images/mainIcon.png')} />
      <Image style={{ alignSelf: 'center', marginTop: 100 }} source={require('../assets/Images/Group71.png')} />
      <Text style={{ fontSize: 35, textAlign: 'center', paddingTop: 20, paddingBottom: 35, fontWeight: 'bold', marginBottom: 50 }}>Nothing out{"\n"}  of line here... </Text>
      <TouchableOpacity activeOpacity={0.5} onPress={backToSignIn}>
        <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
          <Text textAnchor="middle" style={styles.text_button}>Im a grown up</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Button title="Pick an image from camera roll" onPress={pickImage} />


    </View>
  );
};