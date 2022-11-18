import { View, Text, StyleSheet, Alert, Image, useWindowDimensions, TouchableOpacity, ImageBackground, StatusBar, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SetQuestions from '../TeacherScreen/SetQuestions'
import CheckResult from './CheckResult';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TeacherLogin from './TeacherLogin';
import PreviewScreen from './PreviewScreen';

export default function TeacherHomeScreen({ setStep }) {
    const { height, width } = useWindowDimensions();
    const [stage, setStage] = useState(4)
    const [LoginSuccesful, setLoginSuccesful] = useState(false)
    const [TeachersListOfSubjects, setTeachersListOfSubjects] = useState(["Mathematics", "Basic Technology", "French"])
    const [FirstName, setFirstName] = useState(null)
    const [Surname, setSurname] = useState(null)
    const [image, setImage] = useState('')
    const [RegNo, setRegNo] = useState(null)
    //storing string value
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
        }
    }

    //storing object value
    const storeObjectData = async (value) => {
        try {
            const jsonValue = JSON.stringify(TeachersListOfSubjects)
            await AsyncStorage.setItem('@myRegNo', jsonValue).then(alert('succesful'))
        } catch (e) {
            alert('saving error')
        }
    }

    return (
        <View
            style={{ height, width }}>
            {stage == 1 && //Home page
                <View style={{
                    height: "100%",
                    width: "100%",
                }}><StatusBar backgroundColor={"#f44f19"} barStyle={'light-content'} />
                    <View style={{
                        width: '100%', height: 50,
                        backgroundColor: "#f44f19",
                        //  elevation:10,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: '-20%',
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                    }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Home</Text>

                    </View>
                    {/* <TouchableOpacity onPress={getData}><Text>sdfghj</Text></TouchableOpacity> */}
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
                        height: height*0.7,
                        width: "100%",
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        alignItems: "center",
                        flexDirection: "row",
                        // backgroundColor: "#00751c",
                        padding: 10
                    }}>
                        <View
                            style={{
                                height: 50,
                                width,
                                flexDirection: 'row',
                                paddingHorizontal: 20,
                                borderBottomColor: 'lightgrey',
                                borderBottomWidth: 1,
                                justifyContent: 'center'
                            }}>
                            <View style={{ height: 50, width: "80%", justifyContent: 'center' }}>
                                <Text style={{
                                    fontWeight: '600', fontSize: 17,
                                }}>Welcome, {FirstName} {Surname}</Text>
                            </View>
                            <View style={{ height: 50, width: "20%",alignItems:'center', justifyContent: 'center' }}>
                                <Image
                                    style={{overflow:'hidden',
                                        width: 50, height: 50, borderRadius: 25, alignItems: "center",
                                        justifyContent: "center", borderWidth: 1.5, borderColor: 'grey'
                                    }} 
                                    // defaultSource
                                    source={{ uri: image }} 
                                    />
                                    </View>

                        </View>
                        <View style={{ width, height:(height*0.7)-80, }}>
                        <ScrollView>
                            <View style={{alignItems:"center", justifyContent:'center',width,paddingBottom:200}}>
                            <TouchableOpacity
                            onPress={() => setStage(2)} style={{
                                height: 70,
                                width: width - 70, margin: 10,
                                borderRadius: 10,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                elevation: 3
                            }}>
                            <Text style={{ fontSize: 18, }}>Set Question</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setStage(3)} style={{
                                height: 70,
                                width: width - 70,margin: 10,
                                borderRadius: 10,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                elevation: 3
                            }}><Text style={{ fontSize: 18, textAlign: 'center' }}>Check Students Result</Text>
                            </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setStage(5)
                                // storeObjectData
                            } style={{
                                height: 70,
                                width: width - 70, margin: 10,
                                borderRadius: 10,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                elevation: 3,
                                padding: 10,
                            }}><Text style={{ fontSize: 18, textAlign: 'center' }}>Preview Questions</Text>
                            </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { AsyncStorage.clear(), setStage(4) }
                                // storeObjectData
                            } style={{
                                height: 70,
                                width: width - 70, margin: 10,
                                borderRadius: 10,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                elevation: 3
                            }}>
                                <Text style={{ fontSize: 18, textAlign: 'center' }}>Log Out</Text>
                            </TouchableOpacity>

                            </View>
                        
                        </ScrollView>
                        </View>
                        
                        
                        
                    </View>
                </View>}
            {stage == 2 && //set questions
                <View
                    style={{
                        height,
                        width,
                    }}>
                    {/* <View //Select Subject
                        style={{
                            height: 50,
                            width: "100%",
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, }}>
                            <TouchableOpacity onPress={() => setStage(1)}>
                                <MaterialCommunityIcons
                                    style={{ padding: 5 }}
                                    name="arrow-left" color='black' size={20} /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Set Examination</Text>
                    </View> */}
                    <SetQuestions setStage={setStage} setStep={setStep} RegNo={RegNo} />
                </View>}
            {stage == 3 && //Check student results
                <View
                    style={{
                        height,
                        width,
                    }}><StatusBar backgroundColor={'#f44f19'} barStyle={'light-content'} />
                    <View //Select Subject
                        style={{
                            height: 50,
                            width: "100%",
                            backgroundColor:'#f44f19',
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}><View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
                            <TouchableOpacity onPress={() => setStage(1)}>
                                <MaterialCommunityIcons
                                    style={{ padding: 5 }}
                                    name="arrow-left" color='white' size={20} /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white' }}>Check Students Result</Text>
                    </View>
                    <CheckResult myRegNo={RegNo} />
                </View>}
            {stage == 4 &&
                <TeacherLogin
                    setStage={setStage}
                    setStep={setStep}
                    RegNo={RegNo}
                    setImage={setImage}
                    setRegNo={setRegNo}
                    setSurname={setSurname}
                    setFirstName={setFirstName}
                // LoginSuccesful={LoginSuccesful}
                // setLoginSuccesful={setLoginSuccesful}
                />
            }
            {stage == 5 && <PreviewScreen
                setRegNo={setRegNo}
                RegNo={RegNo}
                setStage={setStage} />}

        </View>
    )
}



const styles = StyleSheet.create({
    IntentButtons: {
        height: 300,
        width: 300,
        borderRadius: 10,

    }
})