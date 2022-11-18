import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SetQuestions from '../TeacherScreen/SetQuestions'

export default function Home({setStep}) {
    const { height, width } = useWindowDimensions();
  return (
    <View style={{
        height,
        width,
        backgroundColor:"red"
    }}>
        <StatusBar backgroundColor={"#f5f5f5"} barStyle={'dark-content'} />
        <View style={{
            width: '100%', height: 50,
            backgroundColor: "#f5f5f5",
            //  elevation:10,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: '-20%',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
        }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>Home</Text>

        </View>
        <View style={{
            height: '40%', width: "100%",
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:"blue"
        }}>
            <ImageBackground
                source={require('C:/Users/EMINEIMO/HeraldCBE/HeraldCBTEmineimo/Component/Assets/Teaching.gif')}
                style={{
                    height: 260,
                    width: 260,
                }} />
        </View>
        <View style={{
            height: '70%',
            width: "100%",
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f5f5f5",
            padding: 10
        }}>
            <View
                style={{
                    height: 50,
                    width,
                    paddingHorizontal: 20,
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    justifyContent: 'center'
                }}>
                <Text>Hi, Emineimo Umoh</Text>
            </View>
            // <TouchableOpacity
                onPress={() => setStep(2)} style={{
                    height: 100,
                    width: 150, margin: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3
                }}><Text style={{ fontSize: 18, }}>Set Question</Text></TouchableOpacity>
             <TouchableOpacity
                onPress={() => setStep(3)} style={{
                    height: 100,
                    width: 150, margin: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3
                }}><Text style={{ fontSize: 18, textAlign: 'center' }}>Check Students Result</Text></TouchableOpacity>
            // <TouchableOpacity
                onPress={()=>setStep(5)
                    // storeObjectData
                } style={{
                    height: 100,
                    width: 150, margin: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 3
                }}><Text style={{ fontSize: 18, textAlign: 'center' }}>Preview Questions</Text></TouchableOpacity>

        </View>
    </View>
  )
}