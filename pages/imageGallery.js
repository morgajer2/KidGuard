import { Text, View, AppRegistry, TouchableWithoutFeedback, Modal, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';
import * as toxicity from '@tensorflow-models/toxicity';
import Carousel, { Pagination } from 'react-native-snap-carousel';

function renderCategoryItem({ imageUrl, id }) {
    return (

        <TouchableOpacity key={id}>
            <Image source={{ uri: imageUrl }} 
                style={{ width: '90%',  maxHeight: 400, minHeight:200, alignSelf:'center', margin:5 }} resizeMode='contain' />
        </TouchableOpacity>
    )

}
export const ImageGalleryScreen = ({ route, navigation }) => {
    const { code } = route.params;
    const { width } = Dimensions.get('window');
    var images = [{ id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/kidguard-bff83.appspot.com/o/4771%2Fimage.jpg?alt=media&token=192b9def-47dc-4241-a460-f3f833aaa519' }, { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/kidguard-bff83.appspot.com/o/4771%2Fimg.jpg?alt=media&token=e213103d-c154-469b-a59c-7bb3c9d95b3e' }];

    const SPACING = 10;
    const THUMB_SIZE = 80;

    {/*state = {
        modalVisible: false,
        modalImage: require('../assets/Images/addB.png'),
        images: [
            require('../assets/Images/addBGray.png'),
            require('../assets/Images/hatGray.png')
        ]
    }

setMosalVisible(visible, imageKey);*/}

    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{code}</Text>
            <ScrollView style={{ height: '80%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
                <View>
                    {images ? images.map((image) => renderCategoryItem({ imageUrl: image.url, id: image.id })) : <Text>test</Text>}
                </View>
            </ScrollView>
            <View>

            </View>
        </View>

    );


};