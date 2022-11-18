import { View, Image, ToastAndroid, Alert, ScrollView, TouchableOpacity, ActivityIndicator, Text, useWindowDimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database';

export default function TeacherProfile() {
    const { height, width } = useWindowDimensions()
    const [image, setImage] = useState(null)
    const [ListOfSelectedStaff, setListOfSelectedStaff] = useState(null)

    function readUserData(params) {
        try {            const dbRef = ref(getDatabase());
            //   setProcessingStudentVerification(true)
            get(child(dbRef, 'SubjectAllocation/')).then((snapshot) => {
                // setProcessingStudentVerification(false)
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setListOfSelectedStaff(data)
                    console.log(data)
                    // alert(data);
                    // setRegNo(data.length);
                    //   setFirstName(data.FirstName)
                    //   setSurname(data.Surname)
                    //   setStep(2)
                } else {
                    //   setProcessingStudentVerification(false)
                    alert("No data available");
                }
            }).catch((error) => {
                // setProcessingStudentVerification(false)
                console.error(error);
            })
        } catch (error) {
            //   setProcessingStudentVerification(false)
            alert(error.message)
        }


    }
    useEffect(() => {
        readUserData()
    }, [])

    return (
        <View style={{
            height, width, position: "absolute",
            backgroundColor: "#f5f5f5",
            alignItems:"center",
            // paddingHorizontal:10,
        }}>
            <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
            <View style={{
                height: 50,
                width: '100%',
                backgroundColor: "#d6491e"
            }}>
                <View style={{
                    height: "100%",
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgrey'
                }}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Profile</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setStep(1)} style={{
                        height: 50,
                        width: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        // backgroundColor: 'red'
                    }}>
                    <MaterialCommunityIcons
                        style={{ padding: 5 }}
                        name="arrow-left" color='white' size={20} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View //image view
                    style={{
                        height: 200,
                        width: "100%",
                        // backgroundColor:"red",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                    <View //Image View
                        style={{
                            width: 150,
                            height: 150,
                            marginTop: 10, justifyContent: "center", alignItems: 'center',
                            // backgroundColor:"red",
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            overflow: 'hidden'
                        }}>{image == null ? <Image
                            style={{
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            source={require("C:/Users/EMINEIMO/HeraldCBE/HeraldCBTEmineimo/Component/Assets/user.png")} /> :
                            <Image
                                source={{ uri: image }} style={{
                                    height: "100%",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }} />}

                    </View>
                    {/* <View style={{ height: 100, flexDirection: "row", width: "100%", alignItems: "center", justifyContent: 'space-evenly' }}>
                                <TouchableOpacity 
                                // onPress={_pickImage}
                                    style={{
                                        height: 45,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: "grey",
                                        borderWidth: 1,
                                        width: 120, backgroundColor: '#eeeeee'
                                    }}><Text style={{ color: 'black' }}>Pick Image</Text></TouchableOpacity>
                                <TouchableOpacity 
                                // onPress={_takePhoto}
                                    style={{
                                        height: 45,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: "grey",
                                        borderWidth: 1,
                                        width: 120, backgroundColor: '#eeeeee'
                                    }}><Text style={{ color: 'black' }}>Take Photo</Text></TouchableOpacity>
                            </View> */}
                </View>
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>007</Text>
                <View style={{flexDirection:'row',alignItems:"center",width,justifyContent:'center',}}>
                <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Umoh, </Text>
                <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Emineimo </Text>
                <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Uko</Text>
                </View>
                <View style={{width,marginTop:10, paddingHorizontal:10,}}>
                <Text style={{textAlign:'left',fontSize:17,fontWeight:'500'}}>Subject(s) allocated:</Text>
                </View>
                {/* {ListOfSelectedStaff!=null?
                ListOfSelectedStaff.map((data, index)=>
                <View style={{width,marginTop:10, paddingHorizontal:10,}}>
                <Text style={{textAlign:'left',fontSize:17,fontWeight:'500'}}>{data.BasicTechnology}</Text>
                </View>): null} */}
                <View style={{width,marginTop:10, paddingHorizontal:10,}}>
                <Text style={{textAlign:'left',fontSize:17,fontWeight:'500'}}></Text>
                </View>
                <View style={{width,marginTop:10, paddingHorizontal:10,}}>
                <Text style={{textAlign:'left',fontSize:17,fontWeight:'500'}}>Class allocated:</Text>
                </View>
                <View 
                style={{flexDirection:'row',alignItems:"center",width, }}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:"center",}}>
                    <MaterialCommunityIcons
                        style={{ padding: 5 }}
                        name="logout" color='black' size={25} />
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                
                </View>
                
            </ScrollView>
            <Text>TeacherProfile</Text>
        </View>
    )
}