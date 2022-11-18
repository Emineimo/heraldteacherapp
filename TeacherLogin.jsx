// import * as ImagePicker from "expo-image-picker";
// import { getApps, initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import React from "react";
// import {
//   ActivityIndicator,
//   Button,
//   Image,
//   Share,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   LogBox,
// } from "react-native";
// import * as Clipboard from "expo-clipboard";
// import uuid from "uuid";

// const firebaseConfig = {
//   apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",
//   authDomain: "herald-result-app.firebaseapp.com",
//   databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",
//   projectId: "herald-result-app",
//   storageBucket: "herald-result-app.appspot.com",
//   messagingSenderId: "902637284148",
//   appId: "1:902637284148:web:8d451113d7a0a481e01361",
//   measurementId: "G-9KYW17K3RS"
// };

// // Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

// // Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
// LogBox.ignoreLogs([`Setting a timer for a long period`]);

// export default class App extends React.Component {
//   state = {
//     image: null,
//     uploading: false,
//   };

//   async componentDidMount() {
//     if (Platform.OS !== "web") {
//       const {
//         status,
//       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         alert("Sorry, we need camera roll permissions to make this work!");
//       }
//     }
//   }

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         {!!image && (
//           <Text
//             style={{
//               fontSize: 20,
//               marginBottom: 20,
//               textAlign: "center",
//               marginHorizontal: 15,
//             }}
//           >
//             Example: Upload ImagePicker result
//           </Text>
//         )}

//         <Button
//           onPress={this._pickImage}
//           title="Pick an image from camera roll"
//         />

//         <Button onPress={this._takePhoto} title="Take a photo" />

//         {this._maybeRenderImage()}
//         {this._maybeRenderUploadingOverlay()}

//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }

//   _maybeRenderUploadingOverlay = () => {
//     if (this.state.uploading) {
//       return (
//         <View
//           style={[
//             StyleSheet.absoluteFill,
//             {
//               backgroundColor: "rgba(0,0,0,0.4)",
//               alignItems: "center",
//               justifyContent: "center",
//             },
//           ]}
//         >
//           <ActivityIndicator color="#fff" animating size="large" />
//         </View>
//       );
//     }
//   };

//   _maybeRenderImage = () => {
//     let { image } = this.state;
//     if (!image) {
//       return;
//     }

//     return (
//       <View
//         style={{
//           marginTop: 30,
//           width: 250,
//           borderRadius: 3,
//           elevation: 2,
//         }}
//       >
//         <View
//           style={{
//             borderTopRightRadius: 3,
//             borderTopLeftRadius: 3,
//             shadowColor: "rgba(0,0,0,1)",
//             shadowOpacity: 0.2,
//             shadowOffset: { width: 4, height: 4 },
//             shadowRadius: 5,
//             overflow: "hidden",
//           }}
//         >
//           <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
//         </View>
//         <Text
//           onPress={this._copyToClipboard}
//           onLongPress={this._share}
//           style={{ paddingVertical: 10, paddingHorizontal: 10 }}
//         >
//           {image}
//         </Text>
//       </View>
//     );
//   };

//   _share = () => {
//     Share.share({
//       message: this.state.image,
//       title: "Check out this photo",
//       url: this.state.image,
//     });
//   };

//   _copyToClipboard = () => {
//     Clipboard.setString(this.state.image);
//     alert("Copied image URL to clipboard");
//   };

//   _takePhoto = async () => {
//     let pickerResult = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     this._handleImagePicked(pickerResult);
//   };

//   _pickImage = async () => {
//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     console.log({ pickerResult });

//     this._handleImagePicked(pickerResult);
//   };

//   _handleImagePicked = async (pickerResult) => {
//     try {
//       this.setState({ uploading: true });

//       if (!pickerResult.cancelled) {
//         const uploadUrl = await uploadImageAsync(pickerResult.uri);
//         this.setState({ image: uploadUrl });
//       }
//     } catch (e) {
//       console.log(e);
//       alert("Upload failed, sorry :(");
//     } finally {
//       this.setState({ uploading: false });
//     }
//   };
// }

// async function uploadImageAsync(uri) {
//   // Why are we using XMLHttpRequest? See:
//   // https://github.com/expo/expo/issues/2402#issuecomment-443726662
//   const blob = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function (e) {
//       console.log(e);
//       reject(new TypeError("Network request failed"));
//     };
//     xhr.responseType = "blob";
//     xhr.open("GET", uri, true);
//     xhr.send(null);
//   });

//   const fileRef = ref(getStorage(), uuid.v4());
//   const result = await uploadBytes(fileRef, blob);

//   // We're done with the blob, close and release it
//   blob.close();

//   return await getDownloadURL(fileRef);
// }





import { View, Text, useWindowDimensions, ToastAndroid, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { RadioButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app"
// import { getApps, initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getDatabase, ref, get, child, set } from "firebase/database";
import { FirebaseApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
//  import questions from './Component/questions';
import questions from '../Component/Assets/questions';
import ListOfSubjects from '../Component/ListOfSubjects';
import ListOfInstructions from '../Component/ListOfInstructions';
// import ExaminationPage from './ExaminationPage';

export default function TeacherLogin({
    setStep,
    setStage,
    setFirstName,
    setSurname,
    setImage,
    setRegNo }) {
    const { height, width } = useWindowDimensions()
    const firebaseConfig = {


        apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


        authDomain: "herald-result-app.firebaseapp.com",


        databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


        projectId: "herald-result-app",


        storageBucket: "herald-result-app.appspot.com",


        messagingSenderId: "902637284148",


        appId: "1:902637284148:web:8d451113d7a0a481e01361",


        measurementId: "G-9KYW17K3RS"


    };
    // const [Surname, setSurname] = useState('')
    // const [FirstName, setFirstName] = useState('')
    const [MiddleName, setMiddleName] = useState(null)
    const [RegistrationNumber, setRegistrationNumber] = useState('')
    const [secureText, setSecureText] = useState(true)
    const [Class, setClass] = useState('')
    const [minute, setMinute] = useState(0)
    const [seconds, setSeconds] = useState(9)
    // const [RegNo, setRegNo] = useState(null)
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [myanswer, setmyanswer] = useState([])
    const [answer, setAnswer] = useState([])
    const [currentNo, setCurrentNo] = useState(1)
    const [checked, setchecked] = useState('first')
    const [score, setScore] = useState(0);
    // const [stage, setStage] = useState(1)@
    const [scenerio, setScenerio] = useState(null)
    const [Password, setPassword] = useState(null)
    const [Username, setUsername] = useState(null)
    const [subject, setSubject] = useState(null)
    const [TermAccessible, setTermAccessible] = useState(null)
    const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
    const [ListOfExaminationSubjectAvailable, setListOfExaminationSubjectAvailable] = useState(false)
    const [gettingQuestions, setGettingQuestions] = useState(false)
    const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)
    const [Questions, setQuestions] = useState(null)
    const [StudentAnswers, setStudentAnswers] = useState([])
    const [processingLogin, setProcessingLogin] = useState(false)
    const [start, setStart] = useState(false)

    // For Timer
    useEffect(() => {
        if (start == true) {
            if (minute > -1) {
                const timer = setInterval(() => {
                    setSeconds(seconds - 1)
                }, 1000);

                if (seconds == 0) {
                    setMinute(minute - 1);
                    setSeconds(59)
                }


                return () => {
                    clearInterval(timer)
                }
            }
        }

    }, [seconds])
    useEffect(() => {
        if (minute == -1) {
            alert("Time Up")
        }

        // return () => {
        //   second
        // }
    }, [seconds])

    //For list of subjects available
    useEffect(() => {
        ListOfExaminationSubject.length ? setListOfExaminationSubjectAvailable(true) :
            setListOfExaminationSubjectAvailable(false)
    }, [ListOfExaminationSubject])

    useEffect(() => {
        StudentAnswers[currentNo - 1] === questions[currentNo - 1].Answer ?
            myanswer[currentNo - 1] = 1 :
            myanswer[currentNo - 1] = 0;
    }, [checked])

    useEffect(() => {
        if (StudentAnswers[currentNo - 1] == 'A') {
            setchecked(0)
        } else {
            if (StudentAnswers[currentNo - 1] == 'B') {
                setchecked(1)
            } else {
                if (StudentAnswers[currentNo - 1] == 'C') {
                    setchecked(2)
                }
                else {
                    if (StudentAnswers[currentNo - 1] == 'D') {
                        setchecked(3)
                    }
                    else { setchecked('z') }
                }
            }
        }
    }, [currentNo])

    useEffect(() => {
        if (Password != null) {
            if (Password.length > 0) {
                if (Password.startsWith(0)) {
                    const newPassword = Password.slice(1)
                    setPassword(newPassword)
                    //  alert(newPassword)
                }
            }
        }
    }, [Password])

    useEffect(() => {
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

    }, [connectionStatus])

    const SaveUp = async (value) => {
        try {
            const RegNo = JSON.stringify(RegistrationNumber)
            const LoginStatus = JSON.stringify(true)
            const firstName = JSON.stringify(FirstName)
            const surname = JSON.stringify(Surname)
            const value = JSON.stringify(RegistrationNumber)
            await AsyncStorage.setItem('@storage_Key', value)
            const alue = await AsyncStorage.getItem('@storage_Key')
            await AsyncStorage.setItem('@LoginStatus', LoginStatus)
            await AsyncStorage.setItem('@myFirstName', FirstName)
            await AsyncStorage.setItem('@mySurname', Surname)
            await AsyncStorage.setItem('@myRegNo', RegNo)
            const firsName = await AsyncStorage.getItem('@myFirstName')
                // .then(
                //     await AsyncStorage.setItem('@myFirstName', firstName).then(
                //         await AsyncStorage.setItem('@mySurname', surname)
                .then(
                    console.log('alue', alue, FirstName),

                    setStep(8),
                    setStage(1),
                    ToastAndroid.show("Login successful", ToastAndroid.LONG)
                )
            // )
            // )
            // .then(getData())
        } catch (e) {
            alert('saving error')
            console.log(e)
        }
    }


    function Login(params) {
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

        Password.length < 1 ? Alert.alert("", "Invalid password") :
            connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") :
                ProceedToLogin()


    }
    function ProceedToLogin(params) {
        setProcessingLogin(true)
        try {
            const dbRef = ref(getDatabase());
            //   setProcessingStudentVerification(true)
            get(child(dbRef, 'ListOfStaff/' + `${Password}`)).then(async (snapshot) => {
                // setProcessingStudentVerification(false)
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    data.Surname === Username ? (
                        // setStep(8),
                        setStage(1),
                        ToastAndroid.show("Login successful", ToastAndroid.LONG),
                        setProcessingLogin(false),
                        setFirstName(data.FirstName),
                        setSurname(data.Surname),
                        setMiddleName(data.MiddleName),
                        setImage(data.profile_picture),
                        setRegNo(data.RegNo),
                        setRegistrationNumber(JSON.stringify(data.RegNo))
                        // console.log('FirstName', JSON.stringify(data.FirstName))

                        // SaveUp()
                        // console.log("FirstName",FirstName)
                        // get(child(dbRef, 'Examination/' + `${data.Class}`)).then((snapshot) => {
                        //   if (snapshot.exists()) {
                        //     // alert(`${snapshot.val().OpenedSubject.OpenedSubject}`),
                        //     //  setListOfExaminationSubject(
                        //     //   snapshot.val().OpenedSubject) 
                        //     ListOfExaminationSubject.push(snapshot.val().OpenedSubject.OpenedSubject),
                        //       setListOfExaminationSubjectAvailable(true)
                        //     // console.log(ListOfExaminationSubject)
                        //   }
                        //   else { alert("Examination has not been fixed for your class yet!"), setListOfExaminationSubject(null) }
                        // }),
                        // // alert(data.Class),
                        // setClass(data.Class),
                        // setSurname(data.Surname),
                        // setFirstName(data.FirstName),
                        // setMiddleName(data.MiddleName),
                        // setImage(data.profile_picture),
                        // setRegistrationNumber(data.RegNumber),
                        // console.log(data.profile_picture)
                        // setStage(2)
                    ) : (Alert.alert("", "Invalid credentials",), setProcessingLogin(false));

                    //   setFirstName(data.FirstName)
                    //   setSurname(data.Surname)
                    //   setStep(2)
                } else {
                    setProcessingLogin(false)
                    //   setProcessingStudentVerification(false)
                    alert("Invalid credentials");
                }
            }).catch((error) => {
                setProcessingLogin(false)
                // setProcessingStudentVerification(false)
                console.error(error);
            })
            // get(child(dbRef, 'OpenedSubject/')).then((snapshot) => {
            //   // setProcessingStudentVerification(false)
            //   if (snapshot.exists()) {
            //     const data = snapshot.val()
            //     setListOfSubjects(data);

            //     //   setFirstName(data.FirstName)
            //     //   setSurname(data.Surname)
            //     //   setStep(2)
            //   } else {
            //     //   setProcessingStudentVerification(false)
            //     alert("Invalid credentials");
            //   }
            // }).catch((error) => {
            //   // setProcessingStudentVerification(false)
            //   console.error(error);
            // })
        } catch (error) {
            //   setProcessingStudentVerification(false)
            alert(error.message)
        }
    }
    function Register(userId, name, email, imageUrl) {
        try {
            const db = getDatabase();
            // update(ref(db, 'Students/' + `${RegNo}/` + 'FirstTerm/'), {
            //   score
            // });
            set(ref(db, 'Examination/' + 'Jss1/'     // `${RegNo}`
            ), {
                Questions: [],
                OpenedSubject: ["Biology", "Physics"]
            });
        } catch (error) {
            alert(error)
        }

    }
    function proceedToGetQuestions(params) {
        try {
            const dbRef = ref(getDatabase());
            setGettingQuestions(true)
            get(child(dbRef, 'Examination/' + `${Class}/` + 'Questions/' + `${subject}/`)).then((snapshot) => {

                if (snapshot.exists()) {
                    setGettingQuestions(false)
                    setStage(3)
                    const data = snapshot.val()
                    setQuestions(data);


                } else {
                    Alert.alert("", "No examination ready for your class"),
                        setGettingQuestions(false)

                }
            })
        } catch (error) {
            alert(error.message);
            setGettingQuestions(false)
        }
    }
    //checks if any subject has been selected
    function GetQuestions(params) {
        Class == null ? Alert.alert("", "Student class not retrieved!") :
            subject == null ? Alert.alert("", "Please select subject") : ValidateCandidate()

    }

    //checks if student has already sat for the exam
    function ValidateCandidate(params) {
        try {
            const dbRef = ref(getDatabase());
            //   setProcessingStudentVerification(true)

            get(child(dbRef, 'TermAccessible/')).then((snapshot) => {
                // setProcessingStudentVerification(false)
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setProcessingLogin(false);
                    setTermAccessible(data.TermAccessible)
                } else { proceedToGetQuestions() }
            }).then(get(child(dbRef, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + `${subject}/`)).then((snapshot) => {
                // setProcessingStudentVerification(false)
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setProcessingLogin(false);
                    Alert.alert("Oops!", `You have already sat for ${subject} examination`)
                } else { proceedToGetQuestions() }
            })
            )
        } catch (error) {
            alert(error.message);
            setGettingQuestions(false)
        }
    }

    function finish() {
        const br = []
        myanswer.filter((data, i, a) => {
            if (data > 0) {
                br.push(data)
            }
        })

        setScore(br.length)

    }
    return (
        <View
            style={{
                height: '100%',
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>

            {/* {stage == 1 && //Loginpage */}
            <ScrollView style={{
                height: '100%',
                width: "100%",
                backgroundColor: "lightgrey",
            }}>
                <StatusBar backgroundColor={'#db843f'} barStyle={'light-content'} animated={true} />
                <View style={{
                    // height,
                    width,
                    backgroundColor: "#db843f",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <View
                        style={{
                            height: height / 2,
                            width,
                            backgroundColor: "white",
                            borderBottomEndRadius: 200,

                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                        <Image
                            source={require('C:/Users/EMINEIMO/HeraldCBE/HeraldCBTEmineimo/Component/Assets/FinalLogo.png')}
                            style={{
                                height: 300,
                                width: 300,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} />

                    </View>
                    <View
                        style={{
                            // height: height / 1.2,
                            width,
                            backgroundColor: "white",
                            // borderTopLeftRadius: 150,
                            // backgroundColor: "#db843f",
                        }}>
                        <View
                            style={{
                                height: height / 1.2,
                                width,
                                // backgroundColor: "white",
                                borderTopLeftRadius: 100,
                                backgroundColor: "#db843f",
                            }}>
                            <View style={{
                                padding: 10,
                                alignItems: "center",
                                // backgroundColor: "#d6491e",
                                // width: "100%",

                            }}>
                                <View //Username
                                    style={{
                                        width: "90%",
                                        height: 50,
                                        marginVertical: 20,
                                        flexDirection: "row",
                                        // backgroundColor:"lightgrey",
                                        borderRadius: 10,
                                        borderColor: "lightgrey",
                                        borderWidth: 1,
                                        alignItems: "center",
                                        // justifyContent:"center",
                                        paddingLeft: 5,
                                    }}>

                                    <TextInput
                                        onChangeText={(text) => setUsername(text)}
                                        activeUnderlineColor='black'
                                        underlineColor='lightgrey'
                                        selectionColor='black'
                                        placeholder='Username'
                                        keyboardType='default'
                                        mode='flat'

                                        // autoCapitalize="words"
                                        style={{
                                            height: "100%",
                                            width: "95%",
                                            marginTop: "0.5%",
                                            paddingHorizontal: 10,
                                            backgroundColor: "transparent"
                                        }}></TextInput>
                                </View>
                                <View //Password
                                    style={{
                                        width: "90%",
                                        height: 50,
                                        marginVertical: 20,
                                        flexDirection: "row",
                                        // backgroundColor:"lightgrey",
                                        borderRadius: 10,
                                        borderColor: "lightgrey",
                                        borderWidth: 1,
                                        alignItems: "center",
                                        // justifyContent:"center",
                                        paddingLeft: 5,
                                    }}><MaterialCommunityIcons
                                        style={{ padding: 5 }}
                                        name="key" color='black' size={18} />

                                    <TextInput
                                        onChangeText={(text) => setPassword(text)}
                                        activeUnderlineColor='black'
                                        underlineColor='lightgrey'
                                        selectionColor='black'
                                        placeholder='Password'
                                        keyboardType='numbers-and-punctuation'
                                        mode='flat'
                                        secureTextEntry={secureText}
                                        // autoCapitalize="words"
                                        style={{
                                            height: "100%",
                                            width: "73%",
                                            marginTop: "0.5%",
                                            paddingHorizontal: 10,
                                            // backgroundColor: "black"
                                        }}></TextInput>
                                    <TouchableOpacity
                                        onPress={() => secureText == true ? setSecureText(false) : setSecureText(true)}
                                        style={{ alignItems: 'center', justifyContent: 'center', }}>
                                        {secureText != true ?
                                            <MaterialCommunityIcons
                                                style={{ padding: 5 }}
                                                name="eye" color='black' size={20} /> :
                                            <MaterialCommunityIcons
                                                style={{ padding: 5 }}
                                                name="eye-off" color='black' size={20} />}</TouchableOpacity>

                                </View>
                                <TouchableOpacity
                                    onPress={() => Password == null ? Alert.alert("","Password not provided") : Login()}
                                    style={{
                                        height: 50,
                                        width: 250,
                                        borderRadius: 10,
                                        backgroundColor: '#00751c',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    {processingLogin == false ? <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Login</Text> : <ActivityIndicator color={'white'} />}
                                </TouchableOpacity>
                                {/* <TouchableOpacity
                  onPress={Register}
                  style={{
                    height: 50,
                    width: 250,
                    borderRadius: 10,
                    backgroundColor: 'lightgrey',
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {processingLogin == false ? <Text>Log in</Text> : <ActivityIndicator color={'black'} />}
                </TouchableOpacity> */}

                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

        </View>

    )
}



// }
// {stage == 2 && //Select subject page
//     <ScrollView
//         style={{
//             height,
//             width,
//         }}>
//         <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
//         <View style={{
//             height,
//             width,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#eeeeee"
//         }}>
//             <View
//                 style={{
//                     maxWidth: 300,
//                     minWidth: 280,
//                     paddingVertical: 10,
//                     // height: height * .8,
//                     alignItems: "center",
//                     // justifyContent: "center",
//                     borderRadius: 10,
//                     elevation: 5,
//                     backgroundColor: "white"
//                 }}>
//                 <View
//                     style={{
//                         alignItems: "center",
//                         paddingBottom: 10,
//                         borderBottomWidth: 1, borderBottomColor: 'lightgrey',
//                     }}>
//                     <View style={{
//                         height: 120, width: 120, alignItems: "center",
//                         justifyContent: "center", borderRadius: 100, borderWidth: 1.5, borderColor: 'lightgrey', marginTop: 20,
//                     }}>
//                         <Image source={{ uri: image }}
//                             style={{
//                                 height: "100%",
//                                 width: "100%"
//                             }} />
//                     </View>

//                     <View style={{
//                         alignItems: 'center',
//                         justifyContent: 'center', width: '100%', marginTop: 10,
//                     }}>{Password.length == 1 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>00{Password}</Text> :
//                         Password.length == 2 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>0{Password}</Text> :
//                             Password.length > 2 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>{Password}</Text> :
//                                 <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>00{Password}</Text>}</View>
//                     <View style={{
//                         flexDirection: 'row', alignItems: 'center',
//                         justifyContent: 'center', width: 300,
//                     }}><Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: "center" }}>{Surname}, {FirstName} {MiddleName}</Text></View>
//                     <View style={{
//                         alignItems: 'center',
//                         justifyContent: 'center', width: 300,
//                     }}>
//                         <Text style={{ fontSize: 14, color: 'grey', fontWeight: '400', textAlign: "center" }}>of</Text>
//                         <Text style={{ fontSize: 16, fontWeight: '600', textAlign: "center" }}>{Class} Class</Text>
//                     </View>

//                 </View>

//                 <View
//                     style={{
//                         height: '40%',
//                         width: '100%',
//                         alignItems: "center",
//                         justifyContent: "center",
//                         paddingHorizontal: 20,
//                         // backgroundColor: "#e0e0e0",
//                         marginBottom: 10,

//                     }}>
//                     <View //Select Subject
//                         style={{
//                             height: 30,
//                             width: "100%",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             borderBottomWidth: 1,
//                             marginTop: 10,
//                             // backgroundColor:"#eeeeee",
//                             borderBottomColor: 'grey'
//                         }}>
//                         <Text>Select Subject</Text>
//                     </View>
//                     <ScrollView style={{
//                         width: "100%",
//                         // backgroundColor: "yellow"
//                     }}>

//                         {ListOfExaminationSubjectAvailable === true ?
//                             ListOfExaminationSubject.map((data, index) => (
//                                 <TouchableOpacity
//                                     onPress={() => (subject == null ? setSubject(data) : setSubject(null))}
//                                     style={{
//                                         height: 50,
//                                         minWidth: 180,
//                                         padding: 10,
//                                         margin: 10,
//                                         borderRadius: 10,
//                                         borderWidth: 1,
//                                         borderColor: "#c8e6c9",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         // minWidth: 120,
//                                         backgroundColor: subject == data ? "#f5f5f5" : null
//                                     }}>
//                                     <Text style={{ color: subject == data ? "black" : "black" }}>{data}</Text>
//                                 </TouchableOpacity>
//                             ))
//                             : <Text>No subjects available for Examination</Text>}

//                     </ScrollView>

//                 </View>
//                 <View style={{
//                     // height: '25%',
//                     width: '100%',
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}>
//                     <TouchableOpacity
//                         onPress={GetQuestions}
//                         style={{
//                             height: 50,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: 200,
//                             borderRadius: 10,
//                             backgroundColor: subject == null ? "lightgrey" : "#5d4037"
//                         }}>{gettingQuestions == true ? <ActivityIndicator color={'#d6491e'} /> : <Text
//                             style={{ color: subject == null ? "black" : "white" }}>Next</Text>}</TouchableOpacity>
//                 </View>
//                 <View style={{
//                     // height: '25%',
//                     width: '100%',
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}>
//                     <TouchableOpacity
//                         onPress={() => {
//                             setClass(null),
//                                 setSurname(null),
//                                 setFirstName(null),
//                                 setMiddleName(null),
//                                 setImage(""),
//                                 setRegistrationNumber(null),
//                                 setUsername(null),
//                                 setPassword(null),
//                                 setStage(1)
//                         }}
//                         style={{
//                             height: 50,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: 200,
//                             borderRadius: 10,
//                             // backgroundColor: subject == null ? "lightgrey" : "#5d4037"
//                         }}><Text
//                             style={{ color: subject == null ? "black" : "white" }}>Log Out</Text></TouchableOpacity>
//                 </View>


//             </View>
//         </View>
//     </ScrollView>}
// {stage == 3 && //Instructions page
//     <ScrollView style={{
//         height,
//         width,
//         backgroundColor: "#f5f5f5",
//     }}>
//         <View style={{
//             height,
//             width, alignItems: "center", justifyContent: "center",
//         }}>
//             <View //Instructions
//                 style={{
//                     width: width * 0.8,
//                     backgroundColor: "white",
//                     alignItems: 'center',
//                     paddingBottom: 20,
//                     borderRadius: 10,
//                     elevation: 3

//                 }}>
//                 <View style={{
//                     width: '100%',
//                     height: 50,
//                     borderBottomColor: 'lightgrey',
//                     borderBottomWidth: 1,
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}>
//                     <Text style={{ fontWeight: 'bold' }}>Instructions</Text>
//                 </View>
//                 <View style={{ width: '100%', paddingHorizontal: 20, }}>
//                     {ListOfInstructions.map((data, index) => (
//                         <View style={{ flexDirection: 'row', width: "100%", }}>
//                             <RadioButton
//                                 color='#d6491e'
//                                 disabled
//                                 size={10}
//                             // onPress={() => {
//                             //   setGender('Male')
//                             // }}
//                             // value={Gender}
//                             // status={Gender == "Male" ? 'checked' : 'unchecked'}

//                             />
//                             <Text style={{
//                                 width: "80%",
//                                 padding: 10,
//                                 alignItems: "center",
//                                 justifyContent: "flex-start",
//                             }}>{data}</Text>
//                         </View>
//                     ))}
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => TermAccessible == "closed" ?
//                         Alert.alert("", 'No term is opened for examinations') :
//                         (setStage(4), setStart(true))}
//                     style={{
//                         height: 50,
//                         width: 200,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: "#d6491e",
//                         borderRadius: 10,
//                     }}>
//                     <Text style={{ color: "white" }}>Start</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     </ScrollView>}
// {stage == 4 && //Examination Page
//     <ExaminationPage
//         TermAccessible={TermAccessible}
//         setStage={setStage}
//         setScore={setScore}
//         setScenerio={setScenerio}
//         Questions={Questions}
//         subject={subject}
//         Password={Password} />}

// {stage == 5 && //summary and score
//     <ScrollView
//         style={{
//             height,
//             width,
//             backgroundColor: "#f5f5f5",
//         }}>
//         <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
//         <View style={{
//             // height: 50,
//             width: "100%",
//             backgroundColor: "#d6491e",
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: "center",

//         }}>
//             <Text style={{ fontWeight: '700', color: 'white', fontSize: 20.5, textAlign: 'center', paddingHorizontal: 10 }}>Biology</Text>

//         </View>
//         <View style={{
//             height: height * 0.8, width,
//             alignItems: "center",
//             justifyContent: "center"
//         }}>
//             <View style={{
//                 width: width * 0.80,
//                 height: height * 0.60,
//                 elevation: 3,
//                 alignItems: "center",
//                 backgroundColor: "white",
//                 borderRadius: 10,
//             }}>
//                 <Image
//                     source={require('C:/Users/EMINEIMO/HeraldCBE/HeraldCBTEmineimo/Component/Assets/Done-rafiki.png')}
//                     style={{
//                         height: 200,
//                         width: 200,
//                     }} />
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>{scenerio}!</Text>
//                 <Text style={{ fontSize: 14, width: '70%', color: 'grey', textAlign: 'center' }}>You have successfully completed the examination</Text>
//                 <Text style={{ fontSize: 14, width: '70%', color: 'grey', textAlign: 'center' }}>You scored: {score}/{questions.length}</Text>
//                 <TouchableOpacity
//                     onPress={() => setStage(2)}
//                     style={{
//                         height: 45,
//                         width: 200,
//                         backgroundColor: "#d6491e",
//                         marginTop: 60,
//                         alignItems: 'center',
//                         justifyContent: "center",
//                         borderRadius: 10,
//                     }}>
//                     <Text style={{ color: "white" }}>Done</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     </ScrollView>}
