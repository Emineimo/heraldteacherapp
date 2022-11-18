import { View, KeyboardAvoidingView, Image, TextInput, ScrollView, Text, useWindowDimensions, TouchableOpacity, Alert, ActivityIndicator, ImageBackground, StatusBar, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider as PaperProvider } from 'react-native-paper';
// import { TextInput, TextInputMask } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import { RadioButton } from 'react-native-paper';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set, get, child, onValue, update } from 'firebase/database';
import ListsOfClasses from '../Component/ListsOfClasses';
import ListOfSubjects from '../Component/ListOfSubjects';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import 

export default function SetQuestions({ setStage, RegNo }) {
    const { height, width } = useWindowDimensions();
    const option = useRef(null)
    const [uploading, setUploading] = useState(false)

    //     const reference = firebase
    //   .app()
    //   .database('https://<databaseName>.<region>.firebasedatabase.app/')
    //   .ref('/users/123');

    const [instruction, setInstruction] = useState(null)
    const [TermAccessible, setTermAccessible] = useState('FirstTerm')
    const [question, setQuestion] = useState('')
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')
    const [image, setImage] = useState(null)
    const [answer, setAnswer] = useState('')
    const [currentNumber, setcurrentNumber] = useState(0)
    const [level, setLevel] = useState(1)
    const [selectedClass, setSelectedClass] = useState(null)
    const [selectedSubject, setSelectedSubject] = useState()
    // const [RegNo, setRegNo] = useState(null)
    const [processingTeachersSubject, setprocessingTeachersSubject] = useState(false)
    const [addImage, setAddImage] = useState(false)
    const [addInstruction, setAddInstruction] = useState(false)
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [gettingCloudInfo, setGettingCloudInfo] = useState(false)
    const [cloudQuestionIndex, setCloudQuestionIndex] = useState('available')
    const [scanning, setScanning] = useState(false)

    useEffect(() => {
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
            // alert(connectionStatus)
            NetInfo.fetch().then((data) => console.log(data))
    }, [connectionStatus])

    function writeUserData(userId, name, email, imageUrl) {
        // const db = getDatabase();
        // set(ref(db, 'students/' + 'Questions/'+'JSS1/'+'Biology/'+`${currentNumber}`), 
        //   [
        //     question,
        //     optionA,
        //     optionB,
        //     optionC,
        //     optionD,
        //     optionE,
        //     answer
        //   ],
        // );
    }
    function readUserData(params) {
        try {
            const dbRef = ref(getDatabase());
            setProcessingStaffVerification(true)
            get(child(dbRef, 'ListOfStaff/' + `${RegNo}`)).then((snapshot) => {
                setProcessingStaffVerification(false)
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    // alert(data.Subjects_Handled);
                    // setFirstName(data.FirstName)
                    // setSurname(data.Surname)
                    setSubjects_Handled(data.Subjects_Handled)
                    // setImage(data.profile_picture)
                    setLevel(2)
                } else {
                    setProcessingStaffVerification(false)
                    alert("Invalid credentials");
                }
            }).catch((error) => {
                setProcessingStaffVerification(false)
                console.error(error);
            })
        } catch (error) {
            setProcessingStaffVerification(false)
            alert('error.message')
        }


    }
    function ProceedToTypeQuestions(params) {
        try {
            const dbRef = ref(getDatabase());
            NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

            if (connectionStatus == true) {
                setScanning(true)
                get(child(dbRef, 'Examination/' +`${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`))
                    .then((snapshot) => {
                        // setProcessingStaffVerification(false)
                        if (snapshot.exists()) {
                            setScanning(false)
                            const data = snapshot.val()
                            var size = Object.keys(data).length;
                            if (size==60) {
                                Alert.alert("Completed!", "Complete questions have already been set.")
                            }
                            else{setcurrentNumber(size + 1)
                                console.log(data)
                                setLevel(3)}
                            // alert(size)
                            

                        }
                        if (!snapshot.exists()) {
                            const data = snapshot.val()
                            console.log(data)
                            setcurrentNumber(1)
                            setLevel(3)
                            setScanning(false)

                        }
                        // setLevel(3)
                    })
                    .catch((e) => alert(e),setScanning(false))
            } else {
                setScanning(false)
                Alert.alert(
                    "Connection problem",
                    "You're not connected to the intenet",
                    [
                        {
                            text: "Retry",
                            onPress: () => ProceedToTypeQuestions()
                        },

                        { text: "OK", onPress: setLevel(2) }
                    ]
                )
            }
        } catch (error) {
            setScanning(false)
            console.log('Error', error)
        }



    }
    function ValidateQuestioner(params) {
        try {
            const dbRef = ref(getDatabase());
            NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

            if (connectionStatus == true) {
                setScanning(true)
                get(child(dbRef, 'SubjectAllocation/' + `${selectedSubject}/`))
                    .then((snapshot) => {
                        // setProcessingStaffVerification(false)
                        if (snapshot.exists()) {
                            setScanning(false)
                            const data = snapshot.val()
                            console.log(data.RegNoOfSelectedStaff, 'RegNo',RegNo)
                            var size = Object.keys(data).length;
                            // alert(size)
                            // setcurrentNumber(size + 1)
                            // console.log(data)
                            // setLevel(3)
                            data.RegNoOfSelectedStaff.includes(RegNo) ? (ToastAndroid.show("Access granted!", ToastAndroid.SHORT), Scan()) : ToastAndroid.show("Access denied!", ToastAndroid.SHORT)

                        }
                        // if (snapshot.val()) {

                        // }
                        if (!snapshot.exists()) {
                            setScanning(false)
                            const data = snapshot.val()
                            ToastAndroid.show("No allocations for the selected subject!", ToastAndroid.LONG)
                            console.log('no data')
                            // setcurrentNumber(1)
                            // setLevel(3)

                        }
                        // setLevel(3)
                    })
                    .catch((e) => setScanning(false))
            } else {setScanning(false),
                Alert.alert(
                    "Connection problem",
                    "You're not connected to the intenet",
                    [
                        {
                            text: "Retry",
                            onPress: () => ProceedToTypeQuestions()
                        },

                        { text: "OK", onPress: setLevel(2) }
                    ]
                )
            }
        } catch (error) {
            console.log('Error', error)
        }
    }
    function Scan(params) {
        try {
            const dbRef = ref(getDatabase());
            setScanning(true)
            get(child(dbRef, 'TermAccessible/')).then((snapshot) => {

                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setTermAccessible(data.TermAccessible)
                    if (data.TermAccessible == 'closed') {
                        Alert.alert("", "No term is open for activities ")
                    }
                    if (data.TermAccessible != 'closed'){
                        ToastAndroid.show(`${data.TermAccessible} available!`, ToastAndroid.LONG)
                    ProceedToTypeQuestions()
                    }
                    
                } else {
                    setScanning(false)
                    ToastAndroid.show("No data available!", ToastAndroid.LONG)
                }
            }).catch((error) => {
                setScanning(false)
                console.error(error);
            })
        } catch (error) {
            setScanning(false)
            alert(error.message)
        }
    }
    function AddImage(params) {
        Alert.alert('Add image', 'select method',)
    }
    function writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase();
        set(ref(db, 'Examination/' + userId`${selectedClass}/` + 'Questions/' + `${selectedSubject}/`), {
            username: name,
            email: email,
            profile_picture: imageUrl
        });
    }
    function Save() {
        const db = getDatabase();
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
            !question.length ? Alert.alert("", "Enter question") :
                !optionA.length ? Alert.alert("", "Enter Option A") :
                    !optionB.length ? Alert.alert("", "Enter Option B") :
                        !optionC.length ? Alert.alert("", "Enter Option C") :
                            !optionD.length ? Alert.alert("", "Enter Option D") :
                                !answer.length ? Alert.alert("", "pick answer") :
                                    connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

                                        setUploading(true),

                                        set(ref(db, 'Examination/' +`${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNumber),
                                            [
                                                instruction,
                                                question,
                                                answer,
                                                image,

                                                {
                                                    'Options': [
                                                        optionA,
                                                        optionB,
                                                        optionC,
                                                        optionD
                                                    ]
                                                }


                                            ]
                                        )
                                            .then(() => {
                                                ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
                                                setUploading(false)
                                                if (currentNumber < 60) {
                                                    try {
                                                        const dbRef = ref(getDatabase());
                                                        setGettingCloudInfo(true)
                                                        //   setProcessingStudentVerification(true)
                                                        get(child(dbRef, 'Examination/' +`${TermAccessible}/` + `${selectedClass}/`+ 'Questions/' + `${selectedSubject}/`
                                                            // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                                                        )).then((snapshot) => {
                                                            // setProcessingStudentVerification(false)

                                                            if (snapshot.exists()) {
                                                                const data = snapshot.val()
                                                                console.log(data)
                                                                var size = Object.keys(data).length;
                                                                setcurrentNumber(size + 1);
                                                                setGettingCloudInfo(false)
                                                                setCloudQuestionIndex('available')
                                                                setImage(null),
                                                                    setInstruction(null)
                                                                setQuestion('')
                                                                setOptionA('')
                                                                setOptionB('')
                                                                setOptionC('')
                                                                setOptionD('')
                                                                setAnswer('')
                                                                //   setFirstName('')
                                                                //   setSurname('')
                                                                // setMiddleName('')
                                                                // setGender(null),
                                                                // setClass(null),
                                                                // setLevel(1)
                                                            } else {
                                                                //   setProcessingStudentVerification(false)
                                                                Alert.alert("something went wrong", "Can't find previously saved data");
                                                            }
                                                        }).catch((error) => {
                                                            // setProcessingStudentVerification(false)
                                                            console.error(error);
                                                            setGettingCloudInfo(false)
                                                            setCloudQuestionIndex('available')
                                                        })
                                                    } catch (error) {
                                                        //   setProcessingStudentVerification(false)
                                                        alert(error.message)
                                                    }
                                                }
                                                if (currentNumber == 60) {
                                                    try {
                                                        const dbRef = ref(getDatabase());
                                                        //   setProcessingStudentVerification(true)
                                                        get(child(dbRef, 'Examination/' +`${TermAccessible}/` + `${selectedClass}/`+ 'Questions/' + `${selectedSubject}/`
                                                            // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                                                        )).then((snapshot) => {
                                                            // setProcessingStudentVerification(false)

                                                            if (snapshot.exists()) {
                                                                const data = snapshot.val()
                                                                console.log(data)
                                                                var size = Object.keys(data).length;
                                                                Alert.alert("Congratulations!", `You have successfully finished setting ${TermAccessible} examination questions on ${selectedSubject} for ${selectedClass}`, [            
                                                                    // {
                                                                    //   text: "Cancel",
                                                                    //   onPress: () => console.log("Cancel Pressed"),
                                                                    //   style: "cancel"
                                                                    // },
                                                                    // {
                                                                    //   text: "",
                                                                    //   onPress: () => console.log("Cancel Pressed"),
                                                                    //   style: "cancel"
                                                                    // },
                                                                    { text: "OK", onPress: () => setLevel(1) }
                                                                  ])
                                                                // setcurrentNumber(size + 1);
                                                                // setImage(null),
                                                                    // setInstruction(null)
                                                                    // setcurrentNumber(size + 1);
                                                                // setGettingCloudInfo(false)
                                                                // setCloudQuestionIndex('available')
                                                                // setQuestion('')
                                                                // setOptionA('')
                                                                // setOptionB('')
                                                                // setOptionC('')
                                                                // setOptionD('')
                                                                // setAnswer('')
                                                                
                                                                //   setFirstName('')
                                                                //   setSurname('')
                                                                // setMiddleName('')
                                                                // setGender(null),
                                                                // setClass(null),
                                                                // setLevel(1)
                                                            } else {
                                                                //   setProcessingStudentVerification(false)
                                                                alert("Invalid credentials");
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


                                            })
                                            .catch((error) => {
                                                console.log(error)
                                                alert("The write failed...")
                                                setUploading(false)
                                            }));
        //         .then(currentNumber != 60 ? (setcurrentNumber(currentNumber + 1),
        //             setInstruction(null),
        //             setQuestion(null),
        //             setImage(null),
        //             setOptionA(null),
        //             setOptionB(null),
        //             setOptionC(null),
        //             setOptionD(null),
        //             setAnswer(null)) :
        //             currentNumber == 60 ? alert("congratulations", "You have successfully finished setting questions") : null)



        // } catch (error) {
        //     // alert('something went wrong')
        //     console.log(error)
        //     alert(error.message)
        // }


    }

    const _pickImage = async () => {
        let askPermission = await ImagePicker.requestMediaLibraryPermissionsAsync()
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log({ pickerResult });

        _handleImagePicked(pickerResult);
    };

    const _handleImagePicked = async (pickerResult) => {
        try {
            setUploading(true);

            if (!pickerResult.cancelled) {
                // const uploadUrl = await uploadImageAsync(pickerResult.uri);
                setImage(pickerResult.uri);
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Something went wrong", "Upload failed, sorry :(");
        } finally {
            setUploading(false);
        }
    };

    const _takePhoto = async () => {
        let askPermission = await ImagePicker.requestCameraPermissionsAsync()
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            // aspect: [4, 3],
        });

        _handleImagePicked(pickerResult);
    };

   
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor='#f44f19' />
            {level == 1 && //select class
                <ScrollView
                    style={{ height, width, backgroundColor: "#f5f5f5", position: 'absolute' }}>
                    <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, backgroundColor: "#f44f19" }}>
                        <View
                            style={{ width, height: 50, position: 'absolute', textAlign: "center", backgroundColor: "#f44f19", justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 18, fontWeight: "600" }}>Select Class</Text>
                        </View>
                        <TouchableOpacity onPress={() => setStage(1)}>
                            <MaterialCommunityIcons
                                style={{ padding: 5 }}
                                name="arrow-left" color='white' size={20} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height,
                            width,
                            // backgroundColor: "#f5f5f5"
                        }}>
                        <View style={{
                            width: 300,
                            height: 350,
                            elevation: 1,
                            borderRadius: 10,
                            alignItems: "center",

                            backgroundColor: "white"

                        }}>
                            <View style={{
                                height: 50,
                                width: "100%",
                                borderBottomColor: 'lightgrey',
                                borderBottomWidth: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row"
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Classes</Text></View>
                            <View style={{ width: "100%", padding: 10, height: '65%', }}>
                                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', }}>
                                    <View style={{
                                        height: 290, width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center", flexDirection: 'row', flexWrap: 'wrap',
                                    }}>
                                        {ListsOfClasses.map((data, index) => (
                                            <TouchableOpacity
                                                onPress={() => setSelectedClass(data)} style={{
                                                    // minWidth:120,
                                                    // padding: 10,
                                                    minWidth: 100,
                                                    height: 50,
                                                    margin: 10,
                                                    backgroundColor: selectedClass == data ? '#d6491e' : null,
                                                    borderRadius: 10, alignItems: "center",
                                                    justifyContent: "center", borderWidth: 1,
                                                    borderColor: 'lightgrey',

                                                }}><Text style={{ color: selectedClass == data ? 'white' : "black" }}>{data}</Text></TouchableOpacity>

                                        ))}
                                    </View>

                                </ScrollView>


                            </View>
                            <View style={{ width: '100%', padding: 5, alignItems: "center", backgroundColor: "transparent" }}>
                                <TouchableOpacity
                                    onPress={() => selectedClass == null ? (Alert.alert("", "Please select class")) : (setLevel(2), setprocessingTeachersSubject(true))}
                                    style={{
                                        height: 45,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 220, backgroundColor: selectedClass == null ? 'lightgrey' : '#d6491e'
                                    }}><Text style={{ color: selectedClass == null ? 'black' : 'white', }}>Proceed</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{
                        height: 80,
                        width: '100%'
                    }}></View> */}
                </ScrollView>
            }
            {level == 2 && //select subject 
                <View style={{ height, width, }}>

                    <View //Select Subject
                        style={{
                            height: 50,
                            width: "100%",
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                            backgroundColor:"#f44f19",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
                            <TouchableOpacity onPress={() => setLevel(1)}>
                                <MaterialCommunityIcons
                                    style={{ padding: 5 }}
                                    name="arrow-left" color='white' size={20} /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white' }}>Select Subject</Text>
                    </View>
                    <View style={{
                        width: "100%", height: height - 150,
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center", flexDirection: 'row', flexWrap: 'wrap',
                            }}>
                                {ListOfSubjects.sort().map((data, index) => (
                                    <TouchableOpacity
                                        onPress={() => setSelectedSubject(data)}
                                        style={{
                                            // padding:10,minWidth:120,
                                            padding: 10, minWidth: 120,
                                            height: 50,
                                            backgroundColor: selectedSubject == data ? '#d6491e' : null,
                                            borderRadius: 10, alignItems: "center",
                                            justifyContent: "center", borderWidth: 1,
                                            borderColor: 'lightgrey',
                                            margin: 5
                                        }}>
                                        <Text style={{ color: selectedSubject == data ? 'white' : "black", }}>{data}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                        </ScrollView>
                    </View>
                    <View style={{ width: '100%', height: 80, justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => selectedSubject == null ? Alert.alert("", "Please select subject") : ValidateQuestioner()}
                            style={{
                                position: 'absolute',
                                height: 45,
                                marginVertical: 10,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                width: 220, backgroundColor: selectedSubject == null ? "#f5f5f5" : '#d6491e'
                            }}>{scanning==true?<ActivityIndicator color={'white'}/> : <Text style={{ color: selectedSubject == null ? 'black' : 'white', }}>Proceed</Text>}
                            
                        </TouchableOpacity>
                    </View>




                </View>}
            {level == 3 && //Type questions
                <ScrollView

                    style={{
                        height,
                        position: 'absolute',
                        width,
                        // padding:20,
                        marginBottom: 15,
                        backgroundColor: "#f5f5f5"
                    }}>

                    <KeyboardAvoidingView

                        style={{
                            //  height,
                            width,
                            // backgroundColor: "red"
                            // justifyContent: 'center',
                        }}>
                        <View style={{
                            height: height * 0.08,
                            width: "100%",
                            borderBottomColor: "lightgrey",
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            backgroundColor: "white",
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 10,

                        }}>
                            <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center", }}>
                                <Text style={{
                                    height: 30,
                                    fontSize: 20,
                                    fontWeight: '700'
                                }}>{selectedSubject} for {selectedClass}</Text>
                            </View>
                            <View style={{
                                height: "100%",
                                width: "100%",
                                marginLeft: 10,
                                position: "absolute",
                            }}>
                                <TouchableOpacity onPress={() => setLevel(2)}>
                                    <MaterialCommunityIcons
                                        style={{ padding: 5, height: 30, }}
                                        name="arrow-left" color='black' size={20} />
                                </TouchableOpacity>
                            </View>


                        </View>
                        {gettingCloudInfo == true && <ActivityIndicator style={{ marginTop: height * .2 }} size={280} color={'#d6491e'} />}
                        {gettingCloudInfo == false ? cloudQuestionIndex == 'available' ?
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                style={{
                                    // height: height,
                                    width: "100%",
                                    borderBottomColor: "grey",
                                    borderBottomWidth: 1,
                                    padding: 10,

                                    backgroundColor: "#f5f5f5"
                                }}>
                                <View style={{
                                    height: 50, flexDirection: 'row',
                                    alignItems: "center",
                                    //  backgroundColor:"yellow",
                                    borderBottomColor: "lightgrey",
                                    borderBottomWidth: 1,
                                }}><Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    // "#757575",
                                    fontWeight: '700'
                                }}>Question: </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'black',
                                        // "#757575",
                                        fontWeight: '700'
                                    }}>{currentNumber}</Text>
                                    <Text style={{
                                        fontSize: 30,
                                        color: 'black',
                                        // "#757575",
                                        fontWeight: '200'
                                    }}>/</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#757575",
                                        fontWeight: '700'
                                    }}>60</Text>
                                </View>
                                <>{addInstruction == false ? <TouchableOpacity
                                    onPress={() => setAddInstruction(true)}
                                    style={{
                                        // width: "35%",
                                        maxWidth: 450,
                                        height: 50,
                                        marginTop: 10,
                                        flexDirection: "row",
                                        backgroundColor: '#e5e9ee',
                                        borderRadius: 10,
                                        borderColor: "grey",
                                        // borderWidth: 1,
                                        alignItems: "center",
                                        paddingHorizontal: 10,
                                        justifyContent: "center",
                                        // paddingLeft: 5,
                                    }}>
                                    <Text>Add Instruction</Text>
                                </TouchableOpacity> : <View //email
                                    style={{
                                        width: "100%",
                                        maxWidth: 1300,
                                        maxHeight: 150,
                                        marginTop: 10,
                                        padding: 10,
                                        flexDirection: "column",
                                        // backgroundColor:"lightgrey",
                                        borderRadius: 10,
                                        borderColor: "lightgrey",
                                        borderWidth: 1,
                                        // alignItems: "center",
                                        // justifyContent:"center",
                                        paddingvertical: 10,
                                    }}>
                                    <TextInput
                                        onChangeText={(text) => setInstruction(text)}
                                        activeUnderlineColor='black'
                                        underlineColor='lightgrey'
                                        selectionColor='black'
                                        placeholder='Instruction'
                                        keyboardType='default'
                                        mode='flat'
                                        autoCorrect={true}
                                        multiline={true}
                                        value={instruction}
                                        style={{
                                            maxHeight: 80,
                                            width: "95%",
                                            marginTop: "0.5%",
                                            paddingHorizontal: 10,
                                            // backgroundColor: "blue"
                                        }} />
                                    <View style={{ width: "100%", alignItems: 'flex-end' }}>
                                        <TouchableOpacity onPress={() => { setAddInstruction(false), setInstruction(null) }} style={{ marginTop: 10 }}><Text>Cancel</Text></TouchableOpacity>
                                    </View>
                                </View>}

                                </>

                                <KeyboardAvoidingView //Question
                                    style={{
                                        width: "100%",
                                        maxHeight: 100,
                                        maxWidth: 1300,
                                        paddingHorizontal: 10,
                                        marginTop: 20,
                                        flexDirection: "row",
                                        // backgroundColor:"lightgrey",
                                        borderRadius: 10,
                                        borderColor: "lightgrey",
                                        borderWidth: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingHorizontal: 5,

                                    }}>

                                    <TextInput
                                        onChangeText={(text) => setQuestion(text)}
                                        activeUnderlineColor='black'
                                        underlineColor='lightgrey'
                                        selectionColor='black'
                                        placeholder='Question'
                                        keyboardType='default'
                                        mode='flat'
                                        autoCorrect={true}
                                        multiline={true}
                                        value={question}
                                        style={{
                                            // height: "100%",
                                            width: "95%",
                                            marginVertical: 10,
                                            // alignItems: "center",
                                            justifyContent: "center",
                                            paddingHorizontal: 10,
                                            backgroundColor: "transparent"
                                        }} />
                                </KeyboardAvoidingView>
                                <>{addImage == false ? <TouchableOpacity
                                    onPress={() => setAddImage(true)}
                                    style={{
                                        width: "35%",
                                        maxWidth: 450,
                                        height: 50,
                                        marginTop: 20,
                                        flexDirection: "row",
                                        backgroundColor: "lightgrey",
                                        borderRadius: 10,
                                        // borderColor: "lightgrey",
                                        borderWidth: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // paddingLeft: 5,
                                    }}><MaterialCommunityIcons
                                        style={{ padding: 5 }}
                                        name="camera" color='black' size={25} />
                                    <Text>add image</Text>
                                </TouchableOpacity> : <View //Image
                                    style={{
                                        width: "100%",
                                        maxWidth: 1300,
                                        maxHeight: 250,
                                        marginTop: 10,
                                        padding: 10,
                                        flexDirection: "column",
                                        // backgroundColor:"lightgrey",
                                        borderRadius: 10,
                                        borderColor: "lightgrey",
                                        borderWidth: 1,
                                        // alignItems: "center",
                                        // justifyContent:"center",
                                        paddingvertical: 10,
                                    }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{
                                            height: 160,
                                            width: 200,
                                            marginTop: "0.5%",
                                            paddingHorizontal: 10,
                                            borderWidth: 1,
                                            borderColor: 'grey',
                                            alignItems: "center",
                                            justifyContent: "center",
                                            //  backgroundColor: "blue"
                                        }}>{image != null ?
                                            <ImageBackground

                                                source={{ uri: image }}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    // marginTop: "0.5%",
                                                    // paddingHorizontal: 10,
                                                    // borderWidth: 1,
                                                    // borderColor: 'grey',
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    //  backgroundColor: "blue"
                                                }}>

                                                {uploading == true && <ActivityIndicator color={'#d6491e'} />}
                                            </ImageBackground> :
                                            <MaterialCommunityIcons
                                                // style={{ padding: 5, height: 30, }}
                                                name="image-area" color="#e0e0e0" size={150} />}
                                        </View>


                                        <View style={{ height: "100%", }} >
                                            <TouchableOpacity onPress={_takePhoto} style={{
                                                width: 100,
                                                height: 50, alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: "#e0e0e0", borderRadius: 10, margin: 10
                                            }}><Text style={{ color: "black" }}>Take Photo</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={_pickImage} style={{
                                                width: 100,
                                                height: 50, alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: "#e0e0e0", borderRadius: 10, margin: 10
                                            }}><Text style={{ color: "black" }}> Pick Image</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ width: "100%", alignItems: 'flex-end' }}>
                                        <TouchableOpacity onPress={() => { setAddImage(false), setImage(null) }} style={{ marginTop: 10 }}><Text>Cancel</Text></TouchableOpacity>
                                    </View>
                                </View>}

                                </>

                                <Text style={{
                                    fontWeight: '500',
                                    marginTop: 10,
                                }}>Options</Text>

                                <KeyboardAvoidingView style={{
                                    width: "100%",
                                    // paddingVertical:10,
                                    // height:100,
                                    // backgroundColor: "blue",
                                }}>
                                    <View //Option A
                                        style={{
                                            width: "100%",
                                            maxHeight: 100,
                                            maxWidth: 1300,
                                            paddingHorizontal: 10,
                                            marginTop: 10,
                                            flexDirection: "row",
                                            // backgroundColor:"lightgrey",
                                            borderRadius: 10,
                                            borderColor: "lightgrey",
                                            borderWidth: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingLeft: 5,
                                        }}><RadioButton
                                            color='#d6491e'
                                            onPress={() => {
                                                setAnswer('A')
                                            }}
                                            //    value={answer}
                                            status={answer == 'A' ? 'checked' : 'unchecked'}

                                        />

                                        <TextInput
                                            onChangeText={(text) => setOptionA(text)}
                                            activeUnderlineColor='black'
                                            underlineColor='lightgrey'
                                            selectionColor='black'
                                            placeholder='Option A'
                                            keyboardType='default'
                                            mode='flat'
                                            autoCorrect={true}
                                            multiline={true}
                                            value={optionA}
                                            style={{
                                                // height: "100%",
                                                width: "95%",
                                                // alignItems: "center",
                                                justifyContent: "center",
                                                paddingHorizontal: 10,
                                                backgroundColor: "transparent"
                                            }}></TextInput>
                                    </View>

                                    <View //Option B
                                        style={{
                                            width: "100%",
                                            maxHeight: 100,
                                            maxWidth: 1300,
                                            paddingHorizontal: 10,
                                            marginTop: 20,
                                            flexDirection: "row",
                                            // backgroundColor:"lightgrey",
                                            borderRadius: 10,
                                            borderColor: "lightgrey",
                                            borderWidth: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingLeft: 5,
                                        }}><RadioButton
                                            color='#d6491e'
                                            onPress={() => {
                                                setAnswer('B')
                                            }}
                                            //    value={answer}
                                            status={answer == 'B' ? 'checked' : 'unchecked'}

                                        />

                                        <TextInput
                                            onChangeText={(text) => setOptionB(text)}
                                            activeUnderlineColor='black'
                                            underlineColor='lightgrey'
                                            selectionColor='black'
                                            placeholder='Option B'
                                            value={optionB}
                                            keyboardType='default'
                                            mode='flat'
                                            autoCorrect={true}
                                            multiline={true}
                                            style={{
                                                // height: "100%",
                                                width: "95%",
                                                // alignItems: "center",
                                                justifyContent: "center",
                                                paddingHorizontal: 10,
                                                backgroundColor: "transparent"
                                            }}></TextInput>
                                    </View>

                                    <View //Option C
                                        style={{
                                            width: "100%",
                                            maxHeight: 100,
                                            maxWidth: 1300,
                                            paddingHorizontal: 10,
                                            marginTop: 20,
                                            flexDirection: "row",
                                            // backgroundColor:"lightgrey",
                                            borderRadius: 10,
                                            borderColor: "lightgrey",
                                            borderWidth: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingLeft: 5,
                                        }}><RadioButton
                                            color='#d6491e'
                                            onPress={() => {
                                                setAnswer('C')
                                            }}
                                            //    value={answer}
                                            status={answer == 'C' ? 'checked' : 'unchecked'}

                                        />

                                        <TextInput
                                            onChangeText={(text) => setOptionC(text)}
                                            activeUnderlineColor='black'
                                            underlineColor='lightgrey'
                                            selectionColor='black'
                                            placeholder='Option C'
                                            value={optionC}
                                            keyboardType='default'
                                            mode='flat'
                                            autoCorrect={true}
                                            multiline={true}
                                            style={{
                                                // height: "100%",
                                                width: "95%",
                                                // alignItems: "center",
                                                justifyContent: "center",
                                                paddingHorizontal: 10,
                                                backgroundColor: "transparent"
                                            }}></TextInput>
                                    </View>

                                    <View  //Option D
                                        style={{
                                            width: "100%",
                                            maxHeight: 100,
                                            maxWidth: 1300,
                                            paddingHorizontal: 10,
                                            marginTop: 20,
                                            flexDirection: "row",
                                            // backgroundColor:"lightgrey",
                                            borderRadius: 10,
                                            borderColor: "lightgrey",
                                            borderWidth: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingLeft: 5,
                                        }}><RadioButton
                                            color='#d6491e'
                                            onPress={() => {
                                                setAnswer('D')
                                            }}
                                            //    value={answer}
                                            status={answer == 'D' ? 'checked' : 'unchecked'}

                                        />

                                        <TextInput
                                            onChangeText={(text) => setOptionD(text)}
                                            activeUnderlineColor='black'
                                            underlineColor='lightgrey'
                                            selectionColor='black'
                                            placeholder='Option D'
                                            value={optionD}
                                            keyboardType='default'
                                            mode='flat'
                                            autoCorrect={true}
                                            multiline={true}
                                            style={{
                                                // height: "100%",
                                                width: "95%",
                                                // alignItems: "center",
                                                justifyContent: "center",
                                                paddingHorizontal: 10,
                                                backgroundColor: "transparent"
                                            }}></TextInput>
                                    </View>

                                </KeyboardAvoidingView>

                                <TouchableOpacity
                                    onPress={Save}
                                    style={{
                                        height: 50,
                                        maxWidth: 450,
                                        backgroundColor: "#8C0101",
                                        marginVertical: 20,
                                        borderRadius: 10,
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>{uploading == true ? <ActivityIndicator color={'white'} /> : currentNumber == 60 ? <Text style={{
                                        // fontSize: 20,
                                        color:'white',
                                        fontWeight: '500'
                                    }}>Finish</Text> : <Text style={{
                                        // fontSize: 20,
                                        color: 'white',
                                        fontWeight: '500'
                                    }}>save & continue</Text>}

                                </TouchableOpacity>
                                <View style={{
                                    width: "100%",
                                    height: 220,
                                    // backgroundColor:"blue",
                                    // marginVertical: 20,
                                    justifyContent: "flex-start"

                                }}>
                                </View>



                            </ScrollView>
                            : null : null}
                    </KeyboardAvoidingView>


                </ScrollView>
            }
        </>
    )
}