import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import React, { useState } from 'react';

import {general_color, gray_color, orange_color, styles} from './styles/styleSheet1';

var formdata = {};

const onSubmit = () => {
    console.log('data: ', JSON.stringify(formdata));
};

const getCode = () => {
    return "5V6F";
};

export const WhoRUScreen = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(true); // to hide and show components
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#0F8CFF', '#274EF3', '#3E8CE8']}
                style={styles.background}
            />
            <View style={{ height: '90%', width: '90%', borderRadius: 10.0, backgroundColor: '#fff', overflow: 'hidden' }}>
                <View style={[styles.container, { flex: 1 }]}>
                    <Image source={require('../assets/Images/mainIcon.png')} style={{ height: 18, width: 18 }} />
                    <Text style={{ fontSize: 23, textAlign: 'center', color: general_color }}>So who are we{"\n"}talking to?</Text>
                    <Text style={{ fontSize: 12, color: gray_color, textAlign: 'center' }}>{"\n"}Please tell us a bit about{"\n"}yourself, you are a</Text>
                </View>
                {shouldShow ? (
                    //Parent: (Register)
                    <View style={[styles.container, { flex: 2 }]}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', flex: 1 }}>
                            <View style={[styles.type_button]}><Text textAnchor="middle" style={styles.type_text}><Image style={{ height: 12, width: 18, resizeMode: 'center', paddingRight: 3 }} source={require('../assets/Images/coffeeOrange.png')} />Parent</Text></View>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} title="Parent" style={[styles.other_type_button,{left:12}]}><Text style={styles.other_type_text}>Kid</Text></TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 35, alignSelf: 'center', flex: 2 }}>
                            <TextInput
                                //value={this.state.username}
                                onChangeText={(fullName) => { formdata['fullName'] = fullName; console.log("hello") }}
                                placeholder={'Full name'}
                                style={styles.input}
                            />
                            <TextInput
                                //value={this.state.username}
                                onChangeText={(email) => { formdata['email'] = email; }}
                                placeholder={'Email address'}
                                style={styles.input}
                            />
                            <TextInput
                                //value={this.state.password}
                                onChangeText={(password) => { formdata['password'] = password; }}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                style={styles.input}
                            />
                        </View>

                        <View style={{ alignContent: 'center', paddingTop: 20, flex: 1 }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={onSubmit}>
                                <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
                                    <Text textAnchor="middle" style={styles.text_button}>Start Discovering <Image style={{ height: 12, width: 14 }} source={require('../assets/Images/arrow.png')} /></Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: gray_color, fontSize: 10, alignSelf:'center', paddingBottom: 10}}>Already have an acoount? <Text style={styles.text_link} onPress={()=>navigation.navigate('SignIn')}>Sign in</Text></Text>
                    </View>
                ) : (
                    //Kid: (Generate code)
                    <View style={[styles.container, { flex: 2 }]}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', flex: 1 }}>
                            <TouchableOpacity onPress={/*() => { navigation.navigate('Register') }*/() => setShouldShow(!shouldShow)} title="Parent" style={styles.other_type_button}><Text textAnchor="middle" style={styles.other_type_text}><Image style={{ height: 12, width: 18, resizeMode: 'center', paddingRight: 3 }} source={require('../assets/Images/coffeeOrange.png')} />Parent</Text></TouchableOpacity>
                            <View style={[styles.type_button, {left:12}]}><Text textAnchor="middle" style={styles.type_text}><Image style={{ height: 15, width: 18, resizeMode: 'center', paddingRight: 3 }} source={require('../assets/Images/hatGray.png')} />Kid</Text></View>
                        </View>
                        <View style={{ alignSelf: 'center', flex: 2 }}>
                            <Text style={{color:gray_color, fontSize:12, paddingBottom:20}}>To keep this safe, Please transfer{"\n"}this code to your parent device</Text>
                            <Text style={{ backgroundColor: '#E9EDF2',borderRadius:5, padding: 10,fontSize:23, letterSpacing: 20}}>{getCode()}</Text>
                            </View>
                        {//Share this code ??
                            /*<View style={{ alignContent: 'center', paddingTop: 20, flex: 1 }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={onSubmit}>
                                <ImageBackground source={require('../assets/Images/mainButton.png')} style={styles.image_button} >
                                    <Text textAnchor="middle" style={styles.text_button}>Share this code <Image style={{ height: 12, width: 14 }} source={require('../assets/Images/arrow.png')} /></Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>*/}
                    </View>
                )}
            </View>
        </View>
    );
};

//module.exports = RegisterScreen;