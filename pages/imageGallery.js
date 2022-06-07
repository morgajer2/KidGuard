import { Text, View, AppRegistry, TouchableWithoutFeedback, Modal, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { storage } from '../firebase';
import * as firebase from "firebase";


function renderCategoryItem({ imageUrl, id }) {
    return (

        <TouchableOpacity key={id}>
            <Image source={{ uri: imageUrl }}
                style={{ width: '90%', maxHeight: 800, minHeight: 500, alignSelf: 'center', margin: 5 }} resizeMode='contain' />
        </TouchableOpacity>
    )

}
export const ImageGalleryScreen = ({ route, navigation }) => {
    const { code, name, images } = route.params;
    var images2 = [{ id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/kidguard-bff83.appspot.com/o/4771%2Fimage.jpg?alt=media&token=192b9def-47dc-4241-a460-f3f833aaa519' }, { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/kidguard-bff83.appspot.com/o/4771%2Fimg.jpg?alt=media&token=e213103d-c154-469b-a59c-7bb3c9d95b3e' }];

    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', margin: 7 }}>{name}'s screenshots</Text>

            <ScrollView style={{ height: '80%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden', marginBottom: 10 }}>
                <View>
                    {images.length > 0 ? images.map((image, index) => renderCategoryItem({ imageUrl: image, id: index })) :
                        <View style={{ paddingTop: 50, paddingLeft: 10 }}>
                            <Image style={{ alignSelf: 'center', marginTop: 50 }} source={require('../assets/Images/Group71.png')} />
                            <Text style={{ fontSize: 25, textAlign: 'center', paddingTop: 30, paddingBottom: 35, fontWeight: 'bold', marginBottom: 50 }}>No screenshots{"\n"}yet...</Text>
                        </View>}
                </View>
            </ScrollView>
            <View>

            </View>
        </View>

    );


};