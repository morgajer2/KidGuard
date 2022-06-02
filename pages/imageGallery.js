import { Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import { general_color, gray_color, orange_color, styles } from './styles/styleSheet1';
import { addNewUser } from '../firebase';
import * as firebase from "firebase";

import { auth } from '../firebase';
import * as toxicity from '@tensorflow-models/toxicity';

export const ImageGalleryScreen = ({ route, navigation }) => {
    const { code } = route.params;
    const [images, setImages] = useState([{ id: '1', Image: require('../assets/Images/addB.png') }, { id: '2', Image: require('../assets/Images/addBGray.png') }]);
    const { width } = Dimensions.get('window');
    const SPACING = 10;
    const THUMB_SIZE = 80;

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{code}</Text>
            <View style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 32,
                        marginTop: 50,
                        marginBottom: 25
                    }}
                >
                    Custom Gallery
                </Text>
                {/* Carousel View */}
                {/* Thumbnail component using FlatList */}
            </View>

        </View>
    );

};