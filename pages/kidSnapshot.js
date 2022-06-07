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
      //aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {

      var imageName = Math.floor(Math.random() * 9999) + 1000;
      console.log('imageName ' + imageName);
      const ref = storage.ref(code + '/' + imageName + '.jpg');

      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();

      ref.put(bytes).then(() => {
        ref.getDownloadURL().then((imageUrl) => {
          console.log("imageUrl: " + imageUrl);

          axios.get('http://192.168.1.61:3000/AI/', { params: { imageUrl: imageUrl } })
            .then(function (response) {
              // handle success
              var response = response.request["_response"];
              console.log("Got Response: " + response);
              if (response == 'false') {
                console.log('49');
                ref.delete();
              }
              else { //upload to realtime db
                const dbRef = firebase.database().ref();
                var ref2 = dbRef.child("Kids").child(code);
                ref2.get().then((snapshot) => {
                  if (snapshot.exists()) {
                    var kid = snapshot.val();
                    if ('images' in kid) {
                      console.log("5");
                      kid.images[kid.images.length] = imageUrl;
                    }
                    else
                      kid.images = [imageUrl];
                    var ref3 = ref2.child('\images');
                    ref3.set(kid.images);
                  }
                  else {

                    ref2.set([imageUrl]);
                  }
                }).catch((error) => {
                  console.log(error);

                });

              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
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
      <TouchableOpacity activeOpacity={0.5} onPress={pickImage}>
        <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
          <Text textAnchor="middle" style={styles.text_button}>Upload a screenshot</Text>
        </ImageBackground>
      </TouchableOpacity>
      {/*<Button title="Pick an image from camera roll" onPress={pickImage} />*/}


    </View>
  );
};