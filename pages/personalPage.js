
import { Text, View, TouchableOpacity, ImageBackground, TextInput, Modal, Pressable, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import * as React from 'react';
import { auth } from '../firebase';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import * as firebase from "firebase";


import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import addB from '../assets/Images/addB.png';
import addBGray from '../assets/Images/addBGray.png'

export const PersonalScreen = ({ route, navigation }) => {
  const { user, userDitails } = route.params;
  const [kidName, setKidName] = useState('');
  const [kidCode, setKidCode] = useState('     ');
  const [errorMsg, setErrorMsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [addDisable, setAddDisable] = useState(false);
  const [imgSource, setImgSource] = useState(addB);
  const [childList, setChildList] = useState(userDitails.children);



  const logOut = () => {

    auth.signOut().then(() => {
      navigation.navigate('Home');
    }).catch((error) => {
      console.log(error);
    });
  };

  const addNewKid = () => {
    console.log('entered Add New Kid function');

    //input validation
    if (kidName.length == 0) {
      setErrorMsg("All filleds are required.");
      return;
    }
    //appearnce:
    setAddDisable(true);
    setImgSource(addBGray);

    //generate code
    var code = Math.floor(Math.random() * 9999) + 1000
    setKidCode((code).toString());

    //enter ditails to the DB
    var uId = user.uid;


    var newKid = { kidName: kidName, kidCode: code.toString() };
    //console.log("children: " + JSON.stringify(userDitails));
    if ('children' in userDitails) {
      userDitails.children[userDitails.children.length] = newKid;
    }
    else {
      userDitails['children'] = [newKid];
    }

    // console.log('childList: ' + JSON.stringify(userDitails.children));

    var ref = firebase.database().ref('users/' + uId + '/children/');
    ref.set(userDitails.children);

    var temp = {};
    ref = firebase.database().ref('Kids/');

    ref.get().then((snapshot) => {
      var temp = snapshot.val();
      console.log(JSON.stringify(snapshot.val()))
      temp[code] = uId;
      ref.set(temp);
    })


    setChildList(userDitails.children);


  }



  return (

    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
        style={styles.background}
      />
      <View style={[{ backgroundColor: "white", width: '100%', flex: 1, flexDirection: 'row' }]}>
        <View style={{ paddingTop: 25, paddingLeft: 10 }}>
          <Image source={require('../assets/Images/mainIcon.png')} />
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
        <View style={{ flex: 1, paddingTop: 50 }}>
          <FlatList
            data={childList}
            renderItem={({ item }) => (<View style={{ borderRadius: 20.0, backgroundColor: '#fff', overflow: 'hidden', minWidth: '50%', marginBottom: 10 }}>
              <Text style={styles.item} onPress={() => { navigation.navigate('imageGallery', { code: item.kidCode }) }}>{item.kidName}</Text>
            </View>)}
          />
        </View>

      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }} onPress={() => { setModalVisible(true); setKidName(''); setKidCode('     '); setAddDisable(false); setImgSource(addB); }}>Add a new kid +</Text>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable onPress={() => { setModalVisible(!modalVisible); }} style={{ alignSelf: 'flex-end' }}>
                <Image source={require('../assets/Images/xIcon.png')} style={{ maxHeight: 20, maxWidth: 20, minHeight: 20, minWidth: 20 }} />
              </Pressable>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Add new kid</Text>
              <Text style={{ fontSize: 14, color: gray_color, textAlign: 'center', paddingTop: 12, paddingBottom: 35 }}>Please enter your{"\n"}child details </Text>
              {errorMsg.length > 0 &&
                <Text style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>{errorMsg}</Text>
              }
              <TextInput
                value={kidName}
                onChangeText={(text) => setKidName(text)}
                placeholder={'Kid\'s full name'}
                style={[styles.input]}
              />
              <Pressable disabled={addDisable} onPress={addNewKid}>
                {/*<Text style={styles.textStyle}>Add +</Text>*/}
                <Image source={imgSource} />
              </Pressable>
              <Text style={{ color: gray_color, fontSize: 15, paddingBottom: 20, textAlign: 'center' }}>Keep this code safe</Text>
              <Text style={{ backgroundColor: '#E9EDF2', borderRadius: 5, padding: 10, fontSize: 23, letterSpacing: 20 }}>{kidCode}</Text>
              <Text style={{ color: gray_color, fontSize: 15, paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>Write this code in your kid's device:{'\n'}Get Started {'>'} kid {'>'}write code {'>'} Connect </Text>



            </View>
          </View>
        </Modal>
      </View>



    </View>








  );

};