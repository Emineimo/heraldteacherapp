// // // import { View, Text, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// // // import React, { useState, useEffect } from 'react'
// // // // import { RadioButton } from 'react-native-paper';
// // // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // // import { RadioButton } from 'react-native-paper';
// // // import { initializeApp } from "firebase/app"
// // // // import { getApps, initializeApp } from "firebase/app";
// // // // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
// // // import { getDatabase, ref, get, child, set } from "firebase/database";
// // // import { FirebaseApp } from 'firebase/app';
// // // // import { getDatabase } from "firebase/database";
// // // //  import questions from './Component/questions';
// // // import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// // // import questions from '../Component/Assets/questions';
// // // import ListOfSubjects from '../Component/ListOfSubjects';
// // // import ListOfInstructions from '../Component/ListOfInstructions';


// // // export default function Preview({ setLevel, setScenerio, setScore }) {
// // //   const { height, width } = useWindowDimensions()
// // //   // const database = getDatabase();
// // //   // const database = getDatabase(app);
// // //   // const database = getDatabase();
// // //   // const app =FirebaseApp.initializeApp(firebaseConfig);
// // //   const firebaseConfig = {


// // //     apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


// // //     authDomain: "herald-result-app.firebaseapp.com",


// // //     databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


// // //     projectId: "herald-result-app",


// // //     storageBucket: "herald-result-app.appspot.com",


// // //     messagingSenderId: "902637284148",


// // //     appId: "1:902637284148:web:8d451113d7a0a481e01361",


// // //     measurementId: "G-9KYW17K3RS"


// // //   };




// // //   // function writeUserData(userId, name, email, imageUrl) {
// // //   //   const db = getDatabase();
// // //   //   set(ref(db, 'users/' + 'js2'), {
// // //   //     username: 'name',
// // //   //     email: 'email',
// // //   //     profile_picture : 'imageUrl'
// // //   //   });
// // //   // }
// // //   const [Surname, setSurname] = useState('')
// // //   const [FirstName, setFirstName] = useState('')
// // //   const [RegistrationNumber, setRegistrationNumber] = useState('')
// // //   const [instruction, setInstruction] = useState(null)
// // //   const [question, setQuestion] = useState('')
// // //   const [optionA, setOptionA] = useState('')
// // //   const [optionB, setOptionB] = useState('')
// // //   const [optionC, setOptionC] = useState('')
// // //   const [optionD, setOptionD] = useState('')
// // //   const [Answer, setAnswer] = useState('')
// // //   const [image, setImage] = useState(null)
// // //   // const [answer, setAnswer] = useState('')
// // //   const [Class, setClass] = useState('')
// // //   const [minute, setMinute] = useState(0)
// // //   const [seconds, setSeconds] = useState(9)
// // //   const [myanswer, setmyanswer] = useState([])
// // //   const [currentNo, setCurrentNo] = useState(1)
// // //   const [checked, setchecked] = useState('first')
// // //   //   const [score, setScore] = useState(0);
// // //   //   const [Level, setLevel] = useState(3)
// // //   const [Edit, setEdit] = useState(false)
// // //   const [Password, setPassword] = useState(null)
// // //   const [Username, setUsername] = useState(null)
// // //   const [subject, setSubject] = useState(null)
// // //   const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
// // //   const [gettingQuestions, setGettingQuestions] = useState(false)
// // //   const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)

// // //   const [StudentAnswers, setStudentAnswers] = useState([])

// // //   const [processingLogin, setProcessingLogin] = useState(false)
// // //   const [start, setStart] = useState(true)


// // //   function ValidateCandidate(params) {
// // //     try {
// // //       const dbRef = ref(getDatabase());
// // //       //   setProcessingStudentVerification(true)

// // //       get(child(dbRef, 'TermAccessible/')).then((snapshot) => {
// // //         // setProcessingStudentVerification(false)
// // //         if (snapshot.exists()) {
// // //           const data = snapshot.val()
// // //           setProcessingLogin(false);
// // //           setTermAccessible(data.TermAccessible)
// // //         } else { proceedToGetQuestions() }
// // //       }).then(get(child(dbRef, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + `${subject}/`)).then((snapshot) => {
// // //         // setProcessingStudentVerification(false)
// // //         if (snapshot.exists()) {
// // //           const data = snapshot.val()
// // //           setProcessingLogin(false);
// // //           Alert.alert("Oops!", `You have already sat for ${subject} examination`)
// // //         } else { proceedToGetQuestions() }
// // //       })
// // //       )
// // //     } catch (error) {
// // //       alert(error.message);
// // //       setGettingQuestions(false)
// // //     }
// // //   }

// // //   // For Timer

// // //   //   useEffect(() => {
// // //   //     if (start == true) {
// // //   //       if (minute > -1) {
// // //   //         const timer = setInterval(() => {
// // //   //           setSeconds(seconds - 1)
// // //   //         }, 1000);

// // //   //         if (seconds == 0) {
// // //   //           setMinute(minute - 1);
// // //   //           setSeconds(59)
// // //   //         }


// // //   //         return () => {
// // //   //           clearInterval(timer)
// // //   //         }
// // //   //       }
// // //   //     }

// // //   //   }, [seconds])
// // //   //   useEffect(() => {
// // //   //     if (minute == -1) {
// // //   //       setLevel(5),
// // //   //       finish(),
// // //   //       setScenerio("Time Up")
// // //   //     }

// // //   //     // return () => {
// // //   //     //   second
// // //   //     // }
// // //   //   }, [seconds])

// // //   useEffect(() => {
// // //     StudentAnswers[currentNo - 1] === questions[currentNo - 1].Answer ?
// // //       myanswer[currentNo - 1] = 1 :
// // //       myanswer[currentNo - 1] = 0;
// // //   }, [checked])

// // //   useEffect(() => {
// // //     setAnswer(questions[currentNo - 1].Answer)
// // //   }, [])


// // //   useEffect(() => {
// // //     if (StudentAnswers[currentNo - 1] == 'A') {
// // //       setchecked(0)
// // //     } else {
// // //       if (StudentAnswers[currentNo - 1] == 'B') {
// // //         setchecked(1)
// // //       } else {
// // //         if (StudentAnswers[currentNo - 1] == 'C') {
// // //           setchecked(2)
// // //         }
// // //         else {
// // //           if (StudentAnswers[currentNo - 1] == 'D') {
// // //             setchecked(3)
// // //           }
// // //           else { setchecked('z') }
// // //         }
// // //       }
// // //     }
// // //   }, [currentNo])

// // //   function finish() {
// // //     const br = []
// // //     myanswer.filter((data, i, a) => {
// // //       if (data > 0) {
// // //         br.push(data)
// // //       }
// // //     })

// // //     setScore(br.length)

// // //   }
// // //   function UploadEdit() {
// // //     const db = getDatabase();
// // //     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
// // //       !questions.length ? Alert.alert("", "Enter question") :
// // //         !optionA.length ? Alert.alert("", "Enter Option A") :
// // //           !optionB.length ? Alert.alert("", "Enter Option B") :
// // //             !optionC.length ? Alert.alert("", "Enter Option C") :
// // //               !optionD.length ? Alert.alert("", "Enter Option D") :
// // //                 !answer.length ? Alert.alert("", "pick answer") :
// // //                   connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

// // //                     setUploading(true),

// // //                     set(ref(db, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNumber),
// // //                       [
// // //                         instruction,
// // //                         question,
// // //                         answer,
// // //                         image,

// // //                         {
// // //                           'Options': [
// // //                             optionA,
// // //                             optionB,
// // //                             optionC,
// // //                             optionD
// // //                           ]
// // //                         }


// // //                       ]
// // //                     )
// // //                       .then(() => {
// // //                         ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
// // //                         // setUploading(false)
// // //                         if (currentNumber < 49) {
// // //                           try {
// // //                             const dbRef = ref(getDatabase());
// // //                             // setGettingCloudInfo(true)
// // //                             //   setProcessingStudentVerification(true)
// // //                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// // //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// // //                             )).then((snapshot) => {
// // //                               // setProcessingStudentVerification(false)

// // //                               if (snapshot.exists()) {
// // //                                 const data = snapshot.val()
// // //                                 console.log(data)
// // //                                 var size = Object.keys(data).length;
// // //                                 setcurrentNumber(size + 1);
// // //                                 // setGettingCloudInfo(false)
// // //                                 // setCloudQuestionIndex('available')
// // //                                 // setImage(null),
// // //                                 //     setInstruction(null)
// // //                                 // setQuestion('')
// // //                                 // setOptionA('')
// // //                                 // setOptionB('')
// // //                                 // setOptionC('')
// // //                                 // setOptionD('')
// // //                                 // setAnswer('')
// // //                                 //   setFirstName('')
// // //                                 //   setSurname('')
// // //                                 // setMiddleName('')
// // //                                 // setGender(null),
// // //                                 // setClass(null),
// // //                                 // setLevel(1)
// // //                               } else {
// // //                                 //   setProcessingStudentVerification(false)
// // //                                 Alert.alert("something went wrong", "Can't find previously saved data");
// // //                               }
// // //                             }).catch((error) => {
// // //                               // setProcessingStudentVerification(false)
// // //                               console.error(error);
// // //                               // setGettingCloudInfo(false)
// // //                               // setCloudQuestionIndex('available')
// // //                             })
// // //                           } catch (error) {
// // //                             //   setProcessingStudentVerification(false)
// // //                             alert(error.message)
// // //                           }
// // //                         }
// // //                         if (currentNumber == 50) {
// // //                           try {
// // //                             const dbRef = ref(getDatabase());
// // //                             //   setProcessingStudentVerification(true)
// // //                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// // //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// // //                             )).then((snapshot) => {
// // //                               // setProcessingStudentVerification(false)

// // //                               if (snapshot.exists()) {
// // //                                 const data = snapshot.val()
// // //                                 console.log(data)
// // //                                 var size = Object.keys(data).length;
// // //                                 setcurrentNumber(size + 1);
// // //                                 setImage(null),
// // //                                   setInstruction(null)
// // //                                 //   setFirstName('')
// // //                                 //   setSurname('')
// // //                                 // setMiddleName('')
// // //                                 // setGender(null),
// // //                                 // setClass(null),
// // //                                 // setLevel(1)
// // //                               } else {
// // //                                 //   setProcessingStudentVerification(false)
// // //                                 alert("Invalid credentials");
// // //                               }
// // //                             }).catch((error) => {
// // //                               // setProcessingStudentVerification(false)
// // //                               console.error(error);
// // //                             })
// // //                           } catch (error) {
// // //                             //   setProcessingStudentVerification(false)
// // //                             alert(error.message)
// // //                           }
// // //                         }


// // //                       })
// // //                       .catch((error) => {
// // //                         console.log(error)
// // //                         alert("The write failed...")
// // //                         setUploading(false)
// // //                       }));
// // //     //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
// // //     //             setInstruction(null),
// // //     //             setQuestion(null),
// // //     //             setImage(null),
// // //     //             setOptionA(null),
// // //     //             setOptionB(null),
// // //     //             setOptionC(null),
// // //     //             setOptionD(null),
// // //     //             setAnswer(null)) :
// // //     //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



// // //     // } catch (error) {
// // //     //     // alert('something went wrong')
// // //     //     console.log(error)
// // //     //     alert(error.message)
// // //     // }


// // //   }

// // //   function BeginEdit(params) {
// // //     setQuestion(questions[currentNo - 1].question),
// // //     setAnswer(questions[currentNo - 1].Answer)
// // //   }



// // //   return (
// // //     <View style={{
// // //       height,
// // //       width,
// // //     }}>
// // //       <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
// // //       <View style={{
// // //         // height: 50,
// // //         width: "100%",
// // //         backgroundColor: "#d6491e",
// // //         flexDirection: 'row',
// // //         alignItems: 'center',
// // //         justifyContent: "center",

// // //       }}>
// // //         <Text style={{ fontWeight: '700', color: 'white', fontSize: 20.5, textAlign: 'center', paddingHorizontal: 10 }}>Biology</Text>

// // //       </View>
// // //       <View style={{
// // //         width: '100%',
// // //         flexDirection: 'row',
// // //         borderBottomColor: 'lightgrey',
// // //         alignItems: "center",
// // //         justifyContent: "space-between",
// // //         borderBottomWidth: 1,
// // //         paddingHorizontal: 20,
// // //         paddingVertical: 5,
// // //       }}>
// // //         <View //Question 1/50
// // //           style={{
// // //             // width: '50%',
// // //             // height: 40,
// // //             alignItems: 'center',


// // //             flexDirection: 'row'
// // //           }}>
// // //           <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
// // //           <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
// // //           <Text style={{ fontWeight: '500', fontSize: 18 }}>/{questions.length}</Text>
// // //         </View>
// // //         {/* Timer */}
// // //         <TouchableOpacity
// // //           onPress={() => { Edit == true ? UploadEdit() : setEdit(true), setAnswer(questions.answer) }}
// // //           style={{
// // //             height: 40,
// // //             width: 70,
// // //             alignItems: "center",
// // //             justifyContent: 'center',
// // //             borderColor: Edit == true ? 'blue' : 'green',
// // //             borderWidth: 2.5,
// // //             padding: 5,
// // //             backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
// // //             flexDirection: 'row',
// // //             borderRadius: 5,


// // //           }}>{Edit == true ? <Text style={{ color: "black" }}>Done</Text> : <Text style={{ color: "black" }}>Edit</Text>}
// // //         </TouchableOpacity>

// // //       </View>
// // //       <View style={{
// // //         height: "100%",
// // //         width: "100%",
// // //         // backgroundColor:"#ebeb",
// // //         flexDirection: 'row',
// // //         padding: 10,
// // //       }}>
// // //         <View style={{
// // //           width: width * 0.6,
// // //           // height: 200,
// // //           // backgroundColor:'#aabe',
// // //           padding: 5
// // //         }}>
// // //           {Edit == true ?
// // //             <TextInput
// // //               // underlineColorAndroid={'#d6491e'}
// // //               multiline
// // //               autoCorrect
// // //               cursorColor={'#d6491e'}
// // //               style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
// // //               defaultValue={questions[currentNo - 1].question}
// // //             /> :
// // //             <Text style={{
// // //               width: '100%',
// // //               fontSize: 18,
// // //               fontWeight: '400'
// // //             }}>
// // //               {questions[currentNo - 1].question}
// // //             </Text>}

// // //           {Edit == true ? <>
// // //             {questions[currentNo - 1].Options.map((data, index) => (
// // //               <View //Option A
// // //                 style={{
// // //                   width: "100%",
// // //                   maxHeight: 100,
// // //                   maxWidth: 1300,
// // //                   paddingHorizontal: 10,
// // //                   marginTop: 10,
// // //                   flexDirection: "row",
// // //                   // backgroundColor:"lightgrey",
// // //                   borderRadius: 10,
// // //                   borderColor: "lightgrey",
// // //                   borderWidth: 1,
// // //                   alignItems: "center",
// // //                   justifyContent: "center",
// // //                   paddingLeft: 5,
// // //                 }}><RadioButton
// // //                 color='#d6491e'
// // //                 onPress={() => {
// // //                   setchecked(index),
// // //                     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// // //                       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// // //                         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// // //                           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// // //                 }}
// // //                 value={index}
// // //                 status={checked === index ? 'checked' : 'unchecked'}

// // //               ></RadioButton>


// // // {/* <View
// // //                 multiline
// // //                 autoCorrect
// // //                 cursorColor={'#d6491e'}
// // //                 style={{
// // //                   borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// // //                   alignItems: 'center'
// // //                 }}
// // //                 value={index}
// // //                 // onPress={() => {
// // //                 //   setchecked(index),
// // //                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// // //                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// // //                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// // //                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// // //                 // }}
// // //               >
// // //                 <RadioButton
// // //                   color='#d6491e'
// // //                   onPress={() => {
// // //                     setchecked(index),
// // //                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// // //                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// // //                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// // //                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// // //                   }}
// // //                   value={index}
// // //                   status={checked === index ? 'checked' : 'unchecked'}

// // //                 ></RadioButton><TextInput
// // //                   defaultValue={data}
// // //                 />

// // //               </View> */}







// // //                 <TextInput
// // //                   onChangeText={(text) => setOptionA(text)}
// // //                   activeUnderlineColor='black'
// // //                   underlineColor='lightgrey'
// // //                   selectionColor='black'
// // //                   placeholder='Option A'
// // //                   keyboardType='default'
// // //                   mode='flat'
// // //                   autoCorrect={true}
// // //                   multiline={true}
// // //                   defaultValue={data}
// // //                   style={{
// // //                     // height: "100%",
// // //                     width: "95%",
// // //                     // alignItems: "center",
// // //                     justifyContent: "center",
// // //                     paddingHorizontal: 10,
// // //                     backgroundColor: "transparent"
// // //                   }}></TextInput>
// // //               </View>


// // //             ))}</> :
// // //             <>{questions[currentNo - 1].Options.map((data, index) => (
// // //               <View
// // //                 value={index}
// // //                 // onPress={() => {
// // //                 //   setchecked(index),
// // //                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// // //                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// // //                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// // //                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// // //                 // }}
// // //                 style={{
// // //                   flexDirection: "row",
// // //                   alignItems: 'center'
// // //                 }}>
// // //                 <RadioButton
// // //                   onPress={() => {
// // //                     setchecked(index),
// // //                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// // //                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// // //                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// // //                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// // //                   }}
// // //                   value={index}
// // //                   status={checked === index ? 'checked' : 'unchecked'}

// // //                 ></RadioButton>
// // //                 <Text>{data}</Text>

// // //               </View>

// // //             ))}</>}

// // //           <View style={{
// // //             width: "80%",
// // //             // backgroundColor:"red",
// // //             // height:50,
// // //             marginTop: 50,
// // //             flexDirection: 'row',
// // //             alignItems: "center",
// // //             justifyContent: 'space-evenly',


// // //           }}>{currentNo > 1 ?
// // //             <TouchableOpacity
// // //               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
// // //               style={{
// // //                 width: 100,
// // //                 height: 50,
// // //                 borderRadius: 10,
// // //                 borderLeftWidth: 1,
// // //                 borderLeftColor: 'black',
// // //                 backgroundColor: "#d7ccc8",
// // //                 alignItems: "center",
// // //                 justifyContent: "center"
// // //               }}>
// // //               <Text>Back</Text>
// // //             </TouchableOpacity> : null}
// // //             {currentNo < questions.length ? <TouchableOpacity
// // //               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
// // //               style={{
// // //                 width: 100,
// // //                 height: 50,
// // //                 borderRadius: 10,
// // //                 backgroundColor: "#d7ccc8",
// // //                 alignItems: "center",
// // //                 justifyContent: "center"
// // //               }} >
// // //               <Text>Next</Text>
// // //             </TouchableOpacity> : null}


// // //           </View>
// // //         </View>
// // //         {/* buttons view */}
// // //         <View style={{
// // //           width: width * 0.38,
// // //           alignItems: "center",
// // //           paddingHorizontal: 5,
// // //           borderLeftWidth: 1,
// // //           borderLeftColor: 'lightgrey'
// // //           // backgroundColor:"#ebeb"
// // //         }}>
// // //           <ScrollView
// // //             style={{
// // //               // height:400,
// // //               width: width * 0.38,
// // //               backgroundColor: "#ebeb",
// // //               // flexDirection: "row",
// // //               // flexWrap: 'wrap',
// // //               // padding: 10,
// // //             }}>
// // //             <View style={{
// // //               // height:400,
// // //               // width: "95%",
// // //               // backgroundColor:"#ebeb",
// // //               flexDirection: "row",
// // //               flexWrap: 'wrap',
// // //               padding: 10,
// // //               paddingBottom: 100
// // //             }}>

// // //               {questions.map((data, index) => (
// // //                 <TouchableOpacity
// // //                   key={index}
// // //                   ref={data}
// // //                   onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index + 1) }}
// // //                   style={{
// // //                     height: 28,
// // //                     width: 28,
// // //                     alignItems: "center",
// // //                     justifyContent: "center",
// // //                     borderWidth: 2,
// // //                     borderColor: index + 1 == currentNo ? 'green' : 'grey',
// // //                     backgroundColor: StudentAnswers[index] == null ? "lightgrey" : StudentAnswers[index] > 0 ? "lightgrey" : '#d6491e',
// // //                     borderRadius: 5,
// // //                     marginHorizontal: 10,
// // //                     marginVertical: 5
// // //                   }}>
// // //                   <Text style={{
// // //                     color: StudentAnswers[index] == null ? "black" : StudentAnswers[index] > 0 ? "black" : 'white',
// // //                     fontWeight: '500'
// // //                   }}>{index + 1}
// // //                   </Text>
// // //                 </TouchableOpacity>)
// // //               )}
// // //             </View>
// // //           </ScrollView>



// // //           <Text>{StudentAnswers.map((data, index) =>
// // //             <Text>{data}</Text>)}</Text>
// // //           {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
// // //           <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
// // //         </View>


// // //       </View>
// // //     </View>
// // //   )
// // // }


























// // import { View, Text,Button,Platform, ToastAndroid, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// // import React, { useState, useEffect } from 'react'
// // // import { RadioButton } from 'react-native-paper';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { RadioButton } from 'react-native-paper';
// // import { initializeApp } from "firebase/app"
// // // import { getApps, initializeApp } from "firebase/app";
// // // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
// // import { getDatabase, ref, get, update, child, set } from "firebase/database";
// // import { FirebaseApp } from 'firebase/app';
// // import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// // // import { getDatabase } from "firebase/database";
// // //  import questions from './Component/questions';
// // import questions from '../Component/Assets/questions';
// // import * as Print from 'expo-print';
// // import { shareAsync } from 'expo-sharing';
// // import ListOfSubjects from '../Component/ListOfSubjects';
// // import ListOfInstructions from '../Component/ListOfInstructions';


// // export default function Preview({
// //   setLevel, Password,
// //   setScenerio, setScore,
// //   // Questions, 
// //   selectedClass,
// //   selectedSubject,
// //   TermAccessible }) {
// //   const { height, width } = useWindowDimensions()
// //   // const [Class, setClass] = useState('')

// //   const firebaseConfig = {


// //     apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


// //     authDomain: "herald-result-app.firebaseapp.com",


// //     databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


// //     projectId: "herald-result-app",


// //     storageBucket: "herald-result-app.appspot.com",


// //     messagingSenderId: "902637284148",


// //     appId: "1:902637284148:web:8d451113d7a0a481e01361",


// //     measurementId: "G-9KYW17K3RS"


// //   };


// //   const [Surname, setSurname] = useState('')
// //   const [FirstName, setFirstName] = useState('')
// //   const [RegistrationNumber, setRegistrationNumber] = useState('')
// //   const [Questions, setQuestions] = useState(null)
// //   // const [image, setImage] = useState('')
// //   const [Class, setClass] = useState('SS1')
// //   const [subject, setSubject] = useState('Biology')
// //   const [minute, setMinute] = useState(0)
// //   const [seconds, setSeconds] = useState(9)
// //   const [myanswer, setmyanswer] = useState([])
// //   const [scanning, setScanning] = useState(false)
// //   const [currentNo, setCurrentNo] = useState(1)
// //   const [checked, setchecked] = useState('first')
// //   const [Edit, setEdit] = useState(false)
// //   const [question, setQuestion] = useState('')
// //   const [optionA, setOptionA] = useState('')
// //   const [optionB, setOptionB] = useState('')
// //   const [optionC, setOptionC] = useState('')
// //   const [optionD, setOptionD] = useState('')
// //   const [image, setImage] = useState(null)
// //   const [instruction, setInstruction] = useState(null)
// //   const [uploading, setUploading] = useState(false)
// //   const [answer, setAnswer] = useState('')
// //   const [connectionStatus, setConnectionStatus] = useState(false)
// //   //   const [score, setScore] = useState(0);
// //   //   const [Level, setLevel] = useState(3)
// //   const [Username, setUsername] = useState(null)
// //   const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
// //   const [gettingQuestions, setGettingQuestions] = useState(false)
// //   const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)
// //   const [StudentAnswers, setStudentAnswers] = useState([])
// //   const [Length, setLength] = useState(0)
// //   const [processingLogin, setProcessingLogin] = useState(false)
// //   const [start, setStart] = useState(true)

// //   // For Timer
// //   // console.log(Questions[currentNo][2])
// //   useEffect(() => {
// //     if (start == true) {
// //       if (minute > -1) {
// //         const timer = setInterval(() => {
// //           setSeconds(seconds - 1)
// //         }, 1000);

// //         if (seconds == 0) {
// //           setMinute(minute - 1);
// //           setSeconds(59)
// //         }


// //         return () => {
// //           clearInterval(timer)
// //         }
// //       }
// //     }

// //   }, [seconds])
// //   useEffect(() => {
// //     if (Questions != null) {
// //       if (Questions[currentNo][2] == 'A') {
// //         setchecked(0)
// //       } else {
// //         if (Questions[currentNo][2] == 'B') {
// //           setchecked(1)
// //         } else {
// //           if (Questions[currentNo][2] == 'C') {
// //             setchecked(2)
// //           }
// //           else {
// //             if (Questions[currentNo][2] == 'D') {
// //               setchecked(3)
// //             }
// //             else { setchecked('z') }
// //           }
// //         }
// //       }
// //     }

// //   }, [currentNo])

// //   useEffect(() => {
// //     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
// //       // alert(connectionStatus)
// //       NetInfo.fetch().then((data) => console.log(data))
// //   }, [connectionStatus])

// //   useEffect(() => {
// //     if (Questions != null) {
// //       if (Questions[currentNo][2] == 'A') {
// //         setchecked(0)
// //       } else {
// //         if (Questions[currentNo][2] == 'B') {
// //           setchecked(1)
// //         } else {
// //           if (Questions[currentNo][2] == 'C') {
// //             setchecked(2)
// //           }
// //           else {
// //             if (Questions[currentNo][2] == 'D') {
// //               setchecked(3)
// //             }
// //             else { setchecked('z') }
// //           }
// //         }
// //       }
// //     }

// //   }, [])


// //   function Editor(params) {
// //     if (Questions[currentNo][2] == 'A') {
// //       setchecked(0)
// //     } else {
// //       if (Questions[currentNo][2] == 'B') {
// //         setchecked(1)
// //       } else {
// //         if (Questions[currentNo][2] == 'C') {
// //           setchecked(2)
// //         }
// //         else {
// //           if (Questions[currentNo][2] == 'D') {
// //             setchecked(3)
// //           }
// //           else { setchecked('z') }
// //         }
// //       }
// //     }
// //     setEdit(true)
// //     setQuestion(Questions[currentNo][1])
// //     setOptionA(Questions[currentNo][4].Options[0])
// //     setOptionB(Questions[currentNo][4].Options[1])
// //     setOptionC(Questions[currentNo][4].Options[2])
// //     setOptionD(Questions[currentNo][4].Options[3])
// //     setImage(null)
// //     setAnswer(Questions[currentNo][2])
// //   }
// //   function UploadEdit(params) {
// //     Alert.alert(
// //       "Confirmation",
// //       `You're about to make changes to question ${currentNo}`,
// //       [
// //         {
// //           text: "cancel",
// //           // onPress: () => ProceedToTypeQuestions()
// //         },
// //         {
// //           text: "",
// //           // onPress: () => ProceedToTypeQuestions()
// //         },

// //         { text: "Confirm", onPress: () => UploadConfirmed() }
// //       ]
// //     )
// //   }

// //   function UploadConfirmed() {
// //     const db = getDatabase();
// //     // alert('Length')
// //     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
// //       !questions.length ? Alert.alert("", "Enter question") :
// //         !optionA.length ? Alert.alert("", "Enter Option A") :
// //           !optionB.length ? Alert.alert("", "Enter Option B") :
// //             !optionC.length ? Alert.alert("", "Enter Option C") :
// //               !optionD.length ? Alert.alert("", "Enter Option D") :
// //                 !answer.length ? Alert.alert("", "pick answer") :
// //                   connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

// //                     setUploading(true),

// //                     set(ref(db, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNo),
// //                       [
// //                         instruction,
// //                         question,
// //                         answer,
// //                         image,

// //                         {
// //                           'Options': [
// //                             optionA,
// //                             optionB,
// //                             optionC,
// //                             optionD
// //                           ]
// //                         }


// //                       ]
// //                     )
// //                       .then(() => {
// //                         setQuestions(null)
// //                         if (currentNo < Length) {
// //                           try {

// //                             const dbRef = ref(getDatabase());
// //                             // setGettingCloudInfo(true)
// //                             //   setProcessingStudentVerification(true)
// //                             get(child(dbRef, 'Examination/'  +`${TermAccessible}/` + `${selectedClass}/`+ 'Questions/' + `${selectedSubject}/`
// //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                             )).then((snapshot) => {
// //                               // setProcessingStudentVerification(false)
// //                               setQuestions(null)
// //                               if (snapshot.exists()) {
// //                                 const data = snapshot.val()
// //                                 setQuestions(data)
// //                                 ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
// //                                 setEdit(false)
// //                                 setCurrentNo(currentNo + 1)
// //                                 // setAnswer(Questions[currentNo][2])
// //                                 var size = Object.keys(data).length;
// //                                 setLength(size)
// //                                 console.log(Length)
// //                                 // setcurrentNo(size + 1);
// //                                 // setGettingCloudInfo(false)
// //                                 // setCloudQuestionIndex('available')
// //                                 // setImage(null),
// //                                 //     setInstruction(null)
// //                                 // setQuestion('')
// //                                 // setOptionA('')
// //                                 // setOptionB('')
// //                                 // setOptionC('')
// //                                 // setOptionD('')
// //                                 // setAnswer('')
// //                                 //   setFirstName('')
// //                                 //   setSurname('')
// //                                 // setMiddleName('')
// //                                 // setGender(null),
// //                                 // setClass(null),
// //                                 // setLevel(1)
// //                               } else {
// //                                 //   setProcessingStudentVerification(false)
// //                                 Alert.alert("something went wrong", "Can't find previously saved data");
// //                               }
// //                             }).catch((error) => {
// //                               // setProcessingStudentVerification(false)
// //                               console.error(error);
// //                               // setGettingCloudInfo(false)
// //                               // setCloudQuestionIndex('available')
// //                             })
// //                           } catch (error) {
// //                             //   setProcessingStudentVerification(false)
// //                             alert(error.message)
// //                           }
// //                         }
// //                         if (currentNo == Length) {
// //                           try {
// //                             const dbRef = ref(getDatabase());
// //                             // setGettingCloudInfo(true)
// //                             //   setProcessingStudentVerification(true)
// //                             get(child(dbRef, 'Examination/'  +`${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                             )).then((snapshot) => {
// //                               // setProcessingStudentVerification(false)

// //                               if (snapshot.exists()) {
// //                                 setQuestions(null)
// //                                 const data = snapshot.val()
// //                                 setQuestions(data)
// //                                 ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
// //                                 setEdit(false)
// //                                 // console.log("data",data)
// //                                 var size = Object.keys(data).length;
// //                                 // setcurrentNo(size + 1);
// //                                 // setGettingCloudInfo(false)
// //                                 // setCloudQuestionIndex('available')
// //                                 // setImage(null),
// //                                 //     setInstruction(null)
// //                                 // setQuestion('')
// //                                 // setOptionA('')
// //                                 // setOptionB('')
// //                                 // setOptionC('')
// //                                 // setOptionD('')
// //                                 // setAnswer('')
// //                                 //   setFirstName('')
// //                                 //   setSurname('')
// //                                 // setMiddleName('')
// //                                 // setGender(null),
// //                                 // setClass(null),
// //                                 // setLevel(1)
// //                               } else {
// //                                 //   setProcessingStudentVerification(false)
// //                                 Alert.alert("something went wrong", "Can't find previously saved data");
// //                               }
// //                             }).catch((error) => {
// //                               // setProcessingStudentVerification(false)
// //                               console.error(error);
// //                               // setGettingCloudInfo(false)
// //                               // setCloudQuestionIndex('available')
// //                             })
// //                           } catch (error) {
// //                             //   setProcessingStudentVerification(false)
// //                             alert(error.message)
// //                           }
// //                         }


// //                       })
// //                       .catch((error) => {
// //                         console.log(error)
// //                         alert("The write failed...")
// //                         setUploading(false)
// //                       }));
// //     //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
// //     //             setInstruction(null),
// //     //             setQuestion(null),
// //     //             setImage(null),
// //     //             setOptionA(null),
// //     //             setOptionB(null),
// //     //             setOptionC(null),
// //     //             setOptionD(null),
// //     //             setAnswer(null)) :
// //     //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



// //     // } catch (error) {
// //     //     // alert('something went wrong')
// //     //     console.log(error)
// //     //     alert(error.message)
// //     // }


// //   }

// //   // useEffect(() => {
// //   //   if (minute == -1) {
// //   //     setLevel(5),
// //   //     finish(),
// //   //     setScenerio("Time Up")
// //   //   }

// //   //   // return () => {
// //   //   //   second
// //   //   // }
// //   // }, [seconds])


// //   // Marking system
// //   // useEffect(() => {
// //   //   StudentAnswers[currentNo - 1] === Questions[currentNo][2] ?
// //   //     myanswer[currentNo - 1] = 1 :
// //   //     myanswer[currentNo - 1] = 0;
// //   // }, [checked])

// //   // useEffect(() => {
// //   //   if (StudentAnswers[currentNo - 1] == 'A') {
// //   //     setchecked(0)
// //   //   } else {
// //   //     if (StudentAnswers[currentNo - 1] == 'B') {
// //   //       setchecked(1)
// //   //     } else {
// //   //       if (StudentAnswers[currentNo - 1] == 'C') {
// //   //         setchecked(2)
// //   //       }
// //   //       else {
// //   //         if (StudentAnswers[currentNo - 1] == 'D') {
// //   //           setchecked(3)
// //   //         }
// //   //         else { setchecked('z') }
// //   //       }
// //   //     }
// //   //   }
// //   // }, [currentNo])

// //   useEffect(() => {
// //     proceedToGetQuestions()
// //   }, [])


// //   // function finish() {

// //   // console.log(Questions[currentNo][4].Options[1])
// //   // }
// //   function finish() {

// //     try {
// //       const br = []
// //       myanswer.filter((data, i, a) => {
// //         if (data > 0) {
// //           br.push(data)
// //         }
// //       })
// //       let score = br.length
// //       setScore(br.length), setLevel(5)
// //       const db = getDatabase();
// //       update(ref(db, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + selectedSubject), {
// //         selectedSubject: score
// //         // Subjects_Handled: []

// //       }).then(ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT));
// //     } catch (error) {
// //       alert(error)
// //     }
// //   }

// //   function proceedToGetQuestions(params) {
// //     try {
// //       const dbRef = ref(getDatabase());
// //       setGettingQuestions(true)
// //       get(child(dbRef, 'Examination/'  +`${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`)).then((snapshot) => {

// //         if (snapshot.exists()) {
// //           setGettingQuestions(false)
// //           // setLevel(3)
// //           const data = snapshot.val()
// //           var size = Object.keys(data).length
// //           setQuestions(data);
// //           setLength(size)
// //           // console.log('data', data)

// //         } else {
// //           Alert.alert("", "No examination ready for your class"),
// //             setGettingQuestions(false)

// //         }
// //       })
// //     } catch (error) {
// //       alert(error.message);
// //       setGettingQuestions(false)
// //     }
// //   }

// //   const html = `
// //   <html>
// //     <head>
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
// //     </head>
// //     <body style="text-align: center;">
// //       <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
// //         Herald International Secoondary School
// //       </h1>
// //       <img
// //         src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
// //         style="width: 90vw;" />
        
// //           <h2 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">${ListOfSubjects[2]}</h2>
        
// //     </body>
// //   </html>
// //   `

// //   const [selectedPrinter, setSelectedPrinter] = React.useState();

// //   const print = async () => {
// //     // On iOS/android prints the given html. On web prints the HTML from the current page.
// //     await Print.printAsync({
// //       html,
// //       printerUrl: selectedPrinter?.url, // iOS only
// //     });
// //   };

// //   const printToFile = async () => {
// //     // On iOS/android prints the given html. On web prints the HTML from the current page.
// //     const { uri } = await Print.printToFileAsync({ html });
// //     console.log('File has been saved to:', uri);
// //     await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
// //   };

// //   const selectPrinter = async () => {
// //     const printer = await Print.selectPrinterAsync(); // iOS only
// //     setSelectedPrinter(printer);
// //   };

// //   return (
// //     <ScrollView style={{
// //       height,
// //       width,
// //     }}>
// //       <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
// //       <View //Select Subject
// //             style={{
// //               height: 50,
// //               width: "100%",
// //               borderBottomColor: 'lightgrey',
// //               borderBottomWidth: 1,
// //               justifyContent: "center",
// //               alignItems: "center"
// //             }}>
// //             <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
// //               <TouchableOpacity onPress={() => setLevel(2)}>
// //                 <MaterialCommunityIcons
// //                   style={{ padding: 5 }}
// //                   name="arrow-left" color='black' size={20} /></TouchableOpacity>
// //             </View>
// //             <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{selectedSubject} for {selectedClass}</Text>
// //           </View>
// //       {Questions != null ?
// //         <>
          
// //           <View style={{
// //             width: '100%',
// //             flexDirection: 'row',
// //             borderBottomColor: 'lightgrey',
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             borderBottomWidth: 1,
// //             paddingHorizontal: 20,
// //             paddingVertical: 5,
// //             // 
// //           }}>
// //             <View //Question 1/50
// //               style={{
// //                 // width: '50%',
// //                 // height: 40,
// //                 alignItems: 'center',
// //                 // backgroundColor:"red",

// //                 flexDirection: 'row'
// //               }}>
// //               <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
// //               <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
// //               <Text style={{ fontWeight: '500', fontSize: 18 }}>/{Length}</Text>
// //             </View>
// //             <View style={{height:'100%',width:'100%'}}>
// //       <Button title="Print" onPress={print} />
      
// //       <Button title="Print to PDF file" onPress={printToFile} />
// //       {/* {Platform.OS === 'ios' && (
// //         <>
// //           <View style={{width:'100%'}}/>
// //           <Button title="Select printer" onPress={selectPrinter} />
// //           <View style={{width:'100%'}} />
// //           {selectedPrinter ? (
// //             <Text style={{width:'100%'}}>{`Selected printer: ${selectedPrinter.name}`}</Text>
// //           ) : undefined}
// //         </>
// //       )} */}
// //     </View>
// //             {/* Timer */}
// //             <TouchableOpacity
// //               onPress={() => { Edit == true ? UploadEdit() : Editor() }}
// //               style={{
// //                 height: 40,
// //                 width: 70,
// //                 alignItems: "center",
// //                 justifyContent: 'center',
// //                 borderColor: Edit == true ? 'blue' : 'green',
// //                 borderWidth: 2.5,
// //                 padding: 5,
// //                 backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
// //                 flexDirection: 'row',
// //                 borderRadius: 5,


// //               }}>
// //               {Edit == true ?
// //                 <Text
// //                   style={{ color: "black" }}>Done</Text>
// //                 :
// //                 <Text style={{ color: "black" }}>Edit</Text>
// //               }
// //             </TouchableOpacity>

// //           </View>
// //           <View
// //             style={{
// //               height: "100%",
// //               width: "100%",
// //               // backgroundColor:"#ebeb",
// //               flexDirection: 'row',
// //               padding: 10,
// //             }}>
// //             <View //Show questions
// //               style={{
// //                 width: width * 0.6,
// //                 // height: 200,
// //                 // backgroundColor:'#aabe',
// //                 padding: 5
// //               }}>
// //               {Edit == true ?
// //                 <TextInput
// //                   onChangeText={(text) => setQuestion(text)}
// //                   // underlineColorAndroid={'#d6491e'}
// //                   multiline
// //                   autoCorrect
// //                   cursorColor={'#d6491e'}
// //                   style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
// //                   defaultValue={Questions[currentNo][1]}
// //                 /> :
// //                 <Text style={{
// //                   width: '100%',
// //                   fontSize: 18,
// //                   fontWeight: '400'
// //                 }}>
// //                   {Questions[currentNo][1]}
// //                 </Text>
// //               }

// //               {Edit == true ?
// //                 <>

// //                   <View //Option A
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: 100,
// //                       maxWidth: 1300,
// //                       paddingHorizontal: 10,
// //                       marginTop: 10,
// //                       flexDirection: "row",
// //                       // backgroundColor:"lightgrey",
// //                       borderRadius: 10,
// //                       borderColor: "lightgrey",
// //                       borderWidth: 1,
// //                       alignItems: "center",
// //                       // justifyContent: "center",
// //                       paddingLeft: 5,
// //                     }}>

// //                     <View
// //                       multiline
// //                       autoCorrect
// //                       cursorColor={'#d6491e'}
// //                       style={{
// //                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                         alignItems: 'center'
// //                       }}
// //                       value={1}
// //                     // onPress={() => {
// //                     //   setchecked(Questions[currentNo][2]),
// //                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                     // }}
// //                     >
// //                       <RadioButton
// //                         color='#d6491e'
// //                         onPress={() => {
// //                           setchecked(0),
// //                             setAnswer('A')
// //                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                         }}
// //                         value={1}
// //                         status={
// //                           checked === 0 ? 'checked' :
// //                             answer === 'A' ? 'checked' : 'unchecked'}

// //                       />
// //                       <TextInput
// //                         onChangeText={(text) => setOptionA(text)}
// //                         style={{ width: '80%' }}
// //                         defaultValue={Questions[currentNo][4].Options[0]}
// //                       />

// //                     </View>



// //                   </View>
// //                   <View //Option B
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: 100,
// //                       maxWidth: 1300,
// //                       paddingHorizontal: 10,
// //                       marginTop: 10,
// //                       flexDirection: "row",
// //                       // backgroundColor:"lightgrey",
// //                       borderRadius: 10,
// //                       borderColor: "lightgrey",
// //                       borderWidth: 1,
// //                       alignItems: "center",
// //                       // justifyContent: "center",
// //                       paddingLeft: 5,
// //                     }}>

// //                     <View
// //                       multiline
// //                       autoCorrect
// //                       cursorColor={'#d6491e'}
// //                       style={{
// //                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                         alignItems: 'center'
// //                       }}
// //                       value={2}
// //                     // onPress={() => {
// //                     //   setchecked(1),
// //                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                     // }}
// //                     >
// //                       <RadioButton
// //                         color='#d6491e'
// //                         onPress={() => {
// //                           setchecked(1),
// //                             setAnswer('B')
// //                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                         }}
// //                         value={2}
// //                         status={checked === 1 ? 'checked'
// //                           :
// //                           answer === 'B' ? 'checked' : 'unchecked'}

// //                       />
// //                       <TextInput
// //                         onChangeText={(text) => setOptionB(text)}
// //                         style={{ width: '80%' }}
// //                         defaultValue={Questions[currentNo][4].Options[1]}
// //                       />

// //                     </View>



// //                   </View>
// //                   <View //Option C
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: 100,
// //                       maxWidth: 1300,
// //                       paddingHorizontal: 10,
// //                       marginTop: 10,
// //                       flexDirection: "row",
// //                       // backgroundColor:"lightgrey",
// //                       borderRadius: 10,
// //                       borderColor: "lightgrey",
// //                       borderWidth: 1,
// //                       alignItems: "center",
// //                       // justifyContent: "center",
// //                       paddingLeft: 5,
// //                     }}>

// //                     <View
// //                       multiline
// //                       autoCorrect
// //                       cursorColor={'#d6491e'}
// //                       style={{
// //                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                         alignItems: 'center'
// //                       }}
// //                       value={3}
// //                     // onPress={() => {
// //                     //   setchecked(3),
// //                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                     // }}
// //                     >
// //                       <RadioButton
// //                         color='#d6491e'
// //                         onPress={() => {
// //                           setchecked(2),
// //                             setAnswer('C')
// //                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                         }}
// //                         value={2}
// //                         status={checked === 2 ? 'checked' :
// //                           answer === 'C' ? 'checked' : 'unchecked'}

// //                       />
// //                       <TextInput
// //                         onChangeText={(text) => setOptionC(text)}
// //                         style={{ width: '80%' }}
// //                         defaultValue={Questions[currentNo][4].Options[2]}
// //                       />

// //                     </View>



// //                   </View>
// //                   <View //Option D
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: 100,
// //                       maxWidth: 1300,
// //                       paddingHorizontal: 10,
// //                       marginTop: 10,
// //                       flexDirection: "row",
// //                       // backgroundColor:"lightgrey",
// //                       borderRadius: 10,
// //                       borderColor: "lightgrey",
// //                       borderWidth: 1,
// //                       alignItems: "center",
// //                       // justifyContent: "center",
// //                       paddingLeft: 5,
// //                     }}>

// //                     <View
// //                       multiline
// //                       autoCorrect
// //                       cursorColor={'#d6491e'}
// //                       style={{
// //                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                         alignItems: 'center'
// //                       }}
// //                       value={4}
// //                     // onPress={() => {
// //                     //   setchecked(index),
// //                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                     // }}
// //                     >
// //                       <RadioButton
// //                         color='#d6491e'
// //                         onPress={() => {
// //                           setchecked(3),
// //                             setAnswer('D')
// //                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                         }}
// //                         value={3}
// //                         status={checked === 3 ? 'checked' :
// //                           answer === 'D' ? 'checked' : 'unchecked'}

// //                       />
// //                       <TextInput
// //                         onChangeText={(text) => setOptionD(text)}
// //                         style={{ width: '80%' }}
// //                         defaultValue={Questions[currentNo][4].Options[3]}
// //                       />

// //                     </View>



// //                   </View>

// //                 </>
// //                 :
// //                 <>
// //                   {/* <View //Option A
// //                       style={{
// //                         width: "100%",
// //                         maxHeight: 100,
// //                         maxWidth: 1300,
// //                         paddingHorizontal: 10,
// //                         marginTop: 10,
// //                         flexDirection: "row",
// //                         // backgroundColor:"lightgrey",
// //                         borderRadius: 10,
// //                         borderColor: "lightgrey",
// //                         borderWidth: 1,
// //                         alignItems: "center",
// //                         // justifyContent: "center",
// //                         paddingLeft: 5,
// //                       }}>

// //                       <View
// //                         multiline
// //                         autoCorrect
// //                         cursorColor={'#d6491e'}
// //                         style={{
// //                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                           alignItems: 'center'
// //                         }}
// //                         value={1}
// //                       // onPress={() => {
// //                       //   setchecked(Questions[currentNo][2]),
// //                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                       // }}
// //                       >
// //                         <RadioButton
// //                           color='#d6491e'
// //                           onPress={() => {
// //                             setchecked(0),
// //                             setAnswer('A')
// //                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                           }}
// //                           value={1}
// //                           status={
// //                             checked === 0 ? 'checked' : 
// //                           answer==='A'?'checked': 'unchecked'}

// //                         />
// //                         <TextInput
// //                         onChangeText={(text) => setOptionA(text)}
// //                           style={{ width: '80%' }}
// //                           defaultValue={Questions[currentNo][4].Options[0]}
// //                         />

// //                       </View>



// //                     </View> */}
// //                   {/* <View //Option B
// //                       style={{
// //                         width: "100%",
// //                         maxHeight: 100,
// //                         maxWidth: 1300,
// //                         paddingHorizontal: 10,
// //                         marginTop: 10,
// //                         flexDirection: "row",
// //                         // backgroundColor:"lightgrey",
// //                         borderRadius: 10,
// //                         borderColor: "lightgrey",
// //                         borderWidth: 1,
// //                         alignItems: "center",
// //                         // justifyContent: "center",
// //                         paddingLeft: 5,
// //                       }}>

// //                       <View
// //                         multiline
// //                         autoCorrect
// //                         cursorColor={'#d6491e'}
// //                         style={{
// //                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                           alignItems: 'center'
// //                         }}
// //                         value={2}
// //                       // onPress={() => {
// //                       //   setchecked(1),
// //                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                       // }}
// //                       >
// //                         <RadioButton
// //                           color='#d6491e'
// //                           onPress={() => {
// //                             setchecked(1),
// //                             setAnswer('B')
// //                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                           }}
// //                           value={2}
// //                           status={checked === 1 ? 'checked'
// //                            :
// //                            answer==='B'?'checked': 'unchecked'}

// //                         />
// //                         <TextInput
// //                         onChangeText={(text) => setOptionB(text)}
// //                           style={{ width: '80%' }}
// //                           defaultValue={Questions[currentNo][4].Options[1]}
// //                         />

// //                       </View>



// //                     </View> */}
// //                   {/* <View //Option C
// //                       style={{
// //                         width: "100%",
// //                         maxHeight: 100,
// //                         maxWidth: 1300,
// //                         paddingHorizontal: 10,
// //                         marginTop: 10,
// //                         flexDirection: "row",
// //                         // backgroundColor:"lightgrey",
// //                         borderRadius: 10,
// //                         borderColor: "lightgrey",
// //                         borderWidth: 1,
// //                         alignItems: "center",
// //                         // justifyContent: "center",
// //                         paddingLeft: 5,
// //                       }}>

// //                       <View
// //                         multiline
// //                         autoCorrect
// //                         cursorColor={'#d6491e'}
// //                         style={{
// //                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                           alignItems: 'center'
// //                         }}
// //                         value={3}
// //                       // onPress={() => {
// //                       //   setchecked(3),
// //                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                       // }}
// //                       >
// //                         <RadioButton
// //                           color='#d6491e'
// //                           onPress={() => {
// //                             setchecked(2),
// //                             setAnswer('C')
// //                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                           }}
// //                           value={2}
// //                           status={checked === 2 ? 'checked' :
// //                           answer==='C'?'checked': 'unchecked'}

// //                         />
// //                         <TextInput
// //                         onChangeText={(text) => setOptionC(text)}
// //                           style={{ width: '80%' }}
// //                           defaultValue={Questions[currentNo][4].Options[2]}
// //                         />

// //                       </View>



// //                     </View> */}
// //                   {/* <View //Option D
// //                       style={{
// //                         width: "100%",
// //                         maxHeight: 100,
// //                         maxWidth: 1300,
// //                         paddingHorizontal: 10,
// //                         marginTop: 10,
// //                         flexDirection: "row",
// //                         // backgroundColor:"lightgrey",
// //                         borderRadius: 10,
// //                         borderColor: "lightgrey",
// //                         borderWidth: 1,
// //                         alignItems: "center",
// //                         // justifyContent: "center",
// //                         paddingLeft: 5,
// //                       }}>

// //                       <View
// //                         multiline
// //                         autoCorrect
// //                         cursorColor={'#d6491e'}
// //                         style={{
// //                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                           alignItems: 'center'
// //                         }}
// //                         value={4}
// //                       // onPress={() => {
// //                       //   setchecked(index),
// //                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                       // }}
// //                       >
// //                         <RadioButton
// //                           color='#d6491e'
// //                           onPress={() => {
// //                             setchecked(3),
// //                             setAnswer('D')
// //                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                           }}
// //                           value={3}
// //                           status={checked === 3 ? 'checked' :
// //                           answer==='D'?'checked': 'unchecked'}

// //                         />
// //                         <TextInput
// //                         onChangeText={(text) => setOptionD(text)}
// //                           style={{ width: '80%' }}
// //                           defaultValue={Questions[currentNo][4].Options[3]}
// //                         />

// //                       </View>



// //                     </View>  */}
// //                   {Questions[currentNo][4].Options.map((data, index) => (
// //                     <View
// //                       value={index}
// //                       onPress={() => {
// //                         setchecked(index),
// //                           index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                             index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                               index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                                 index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                       }}
// //                       style={{
// //                         flexDirection: "row",
// //                         alignItems: 'center'
// //                       }}>
// //                       <RadioButton
// //                         // onPress={() => {
// //                         //   setchecked(index),
// //                         //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                         //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                         //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                         //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                         // }}
// //                         color='#d6491e'
// //                         value={index}
// //                         status={index === checked ? 'checked' : 'unchecked'}

// //                       ></RadioButton><Text>{data}</Text>

// //                     </View>

// //                   ))}
// //                   <View //next and back buttons
// //                     style={{
// //                       width: "80%",
// //                       // backgroundColor:"red",
// //                       // height:50,
// //                       marginTop: 50,
// //                       flexDirection: 'row',
// //                       alignItems: "center",
// //                       justifyContent: 'space-evenly',


// //                     }}>{currentNo > 1 ?
// //                       <TouchableOpacity
// //                         onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
// //                         style={{
// //                           width: 100,
// //                           height: 50,
// //                           borderRadius: 10,
// //                           borderLeftWidth: 1,
// //                           borderLeftColor: 'black',
// //                           backgroundColor: "#d7ccc8",
// //                           alignItems: "center",
// //                           justifyContent: "center"
// //                         }}>
// //                         <Text>Back</Text>
// //                       </TouchableOpacity> : null}
// //                     {currentNo < Length ? <TouchableOpacity
// //                       onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
// //                       style={{
// //                         width: 100,
// //                         height: 50,
// //                         borderRadius: 10,
// //                         backgroundColor: "#d7ccc8",
// //                         alignItems: "center",
// //                         justifyContent: "center"
// //                       }} >
// //                       <Text>Next</Text>
// //                     </TouchableOpacity> : null}


// //                   </View>
// //                 </>


// //               }</View>
// //             <View style={{
// //               width: width * 0.38,
// //               alignItems: "center",
// //               paddingHorizontal: 5,
// //               borderLeftWidth: 1,
// //               borderLeftColor: 'lightgrey'
// //               // backgroundColor:"#ebeb"
// //             }}>
// //               <ScrollView
// //                 style={{
// //                   // height:400,
// //                   width: width * 0.38,
// //                   backgroundColor: "#ebeb",
// //                   // flexDirection: "row",
// //                   // flexWrap: 'wrap',
// //                   // padding: 10,
// //                 }}>
// //                 <View style={{
// //                   // height:400,
// //                   // width: "95%",
// //                   // backgroundColor:"#ebeb",
// //                   flexDirection: "row",
// //                   flexWrap: 'wrap',
// //                   padding: 10,
// //                   paddingBottom: 100
// //                 }}>

// //                   {Questions.map((data, index) => (
// //                     <TouchableOpacity
// //                       key={index}
// //                       ref={data}
// //                       onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index) }}
// //                       style={{
// //                         height: 28,
// //                         width: 28,
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         borderWidth: 2,
// //                         borderColor: index == currentNo ? 'green' : 'grey',
// //                         backgroundColor: StudentAnswers[index] == null ? "lightgrey" : StudentAnswers[index] > 0 ? "lightgrey" : '#d6491e',
// //                         borderRadius: 5,
// //                         marginHorizontal: 10,
// //                         marginVertical: 5
// //                       }}>
// //                       <Text style={{
// //                         color: StudentAnswers[index] == null ? "black" : StudentAnswers[index] > 0 ? "black" : 'white',
// //                         fontWeight: '500'
// //                       }}>{index}
// //                       </Text>
// //                     </TouchableOpacity>)
// //                   )}
// //                 </View>
// //               </ScrollView>



// //               <Text>{StudentAnswers.map((data, index) =>
// //                 <Text>{data}</Text>)}</Text>
// //               {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
// //               <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
// //             </View>



// //           </View>
// //         </> :
// //         <View style={{
// //           height,
// //           width,
// //           alignItems: "center",
// //           justifyContent: "center"
// //         }}>
// //           <ActivityIndicator color={'#d6491e'} size={50} />
// //           <TouchableOpacity
// //             onPress={proceedToGetQuestions}>
// //             <Text style={{ marginTop: 30 }}>Retry</Text>
// //           </TouchableOpacity>
// //         </View>
// //       }


// //     </ScrollView>)
// // }








// // import { View, Text, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// // import React, { useState, useEffect } from 'react'
// // // import { RadioButton } from 'react-native-paper';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { RadioButton } from 'react-native-paper';
// // import { initializeApp } from "firebase/app"
// // // import { getApps, initializeApp } from "firebase/app";
// // // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
// // import { getDatabase, ref, get, child, set } from "firebase/database";
// // import { FirebaseApp } from 'firebase/app';
// // // import { getDatabase } from "firebase/database";
// // //  import questions from './Component/questions';
// // import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// // import questions from '../Component/Assets/questions';
// // import ListOfSubjects from '../Component/ListOfSubjects';
// // import ListOfInstructions from '../Component/ListOfInstructions';


// // export default function Preview({ setLevel, setScenerio, setScore }) {
// //   const { height, width } = useWindowDimensions()
// //   // const database = getDatabase();
// //   // const database = getDatabase(app);
// //   // const database = getDatabase();
// //   // const app =FirebaseApp.initializeApp(firebaseConfig);
// //   const firebaseConfig = {


// //     apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


// //     authDomain: "herald-result-app.firebaseapp.com",


// //     databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


// //     projectId: "herald-result-app",


// //     storageBucket: "herald-result-app.appspot.com",


// //     messagingSenderId: "902637284148",


// //     appId: "1:902637284148:web:8d451113d7a0a481e01361",


// //     measurementId: "G-9KYW17K3RS"


// //   };




// //   // function writeUserData(userId, name, email, imageUrl) {
// //   //   const db = getDatabase();
// //   //   set(ref(db, 'users/' + 'js2'), {
// //   //     username: 'name',
// //   //     email: 'email',
// //   //     profile_picture : 'imageUrl'
// //   //   });
// //   // }
// //   const [Surname, setSurname] = useState('')
// //   const [FirstName, setFirstName] = useState('')
// //   const [RegistrationNumber, setRegistrationNumber] = useState('')
// //   const [instruction, setInstruction] = useState(null)
// //   const [question, setQuestion] = useState('')
// //   const [optionA, setOptionA] = useState('')
// //   const [optionB, setOptionB] = useState('')
// //   const [optionC, setOptionC] = useState('')
// //   const [optionD, setOptionD] = useState('')
// //   const [Answer, setAnswer] = useState('')
// //   const [image, setImage] = useState(null)
// //   // const [answer, setAnswer] = useState('')
// //   const [Class, setClass] = useState('')
// //   const [minute, setMinute] = useState(0)
// //   const [seconds, setSeconds] = useState(9)
// //   const [myanswer, setmyanswer] = useState([])
// //   const [currentNo, setCurrentNo] = useState(1)
// //   const [checked, setchecked] = useState('first')
// //   //   const [score, setScore] = useState(0);
// //   //   const [Level, setLevel] = useState(3)
// //   const [Edit, setEdit] = useState(false)
// //   const [Password, setPassword] = useState(null)
// //   const [Username, setUsername] = useState(null)
// //   const [subject, setSubject] = useState(null)
// //   const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
// //   const [gettingQuestions, setGettingQuestions] = useState(false)
// //   const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)

// //   const [StudentAnswers, setStudentAnswers] = useState([])

// //   const [processingLogin, setProcessingLogin] = useState(false)
// //   const [start, setStart] = useState(true)


// //   function ValidateCandidate(params) {
// //     try {
// //       const dbRef = ref(getDatabase());
// //       //   setProcessingStudentVerification(true)

// //       get(child(dbRef, 'TermAccessible/')).then((snapshot) => {
// //         // setProcessingStudentVerification(false)
// //         if (snapshot.exists()) {
// //           const data = snapshot.val()
// //           setProcessingLogin(false);
// //           setTermAccessible(data.TermAccessible)
// //         } else { proceedToGetQuestions() }
// //       }).then(get(child(dbRef, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + `${subject}/`)).then((snapshot) => {
// //         // setProcessingStudentVerification(false)
// //         if (snapshot.exists()) {
// //           const data = snapshot.val()
// //           setProcessingLogin(false);
// //           Alert.alert("Oops!", `You have already sat for ${subject} examination`)
// //         } else { proceedToGetQuestions() }
// //       })
// //       )
// //     } catch (error) {
// //       alert(error.message);
// //       setGettingQuestions(false)
// //     }
// //   }

// //   // For Timer

// //   //   useEffect(() => {
// //   //     if (start == true) {
// //   //       if (minute > -1) {
// //   //         const timer = setInterval(() => {
// //   //           setSeconds(seconds - 1)
// //   //         }, 1000);

// //   //         if (seconds == 0) {
// //   //           setMinute(minute - 1);
// //   //           setSeconds(59)
// //   //         }


// //   //         return () => {
// //   //           clearInterval(timer)
// //   //         }
// //   //       }
// //   //     }

// //   //   }, [seconds])
// //   //   useEffect(() => {
// //   //     if (minute == -1) {
// //   //       setLevel(5),
// //   //       finish(),
// //   //       setScenerio("Time Up")
// //   //     }

// //   //     // return () => {
// //   //     //   second
// //   //     // }
// //   //   }, [seconds])

// //   useEffect(() => {
// //     StudentAnswers[currentNo - 1] === questions[currentNo - 1].Answer ?
// //       myanswer[currentNo - 1] = 1 :
// //       myanswer[currentNo - 1] = 0;
// //   }, [checked])

// //   useEffect(() => {
// //     setAnswer(questions[currentNo - 1].Answer)
// //   }, [])


// //   useEffect(() => {
// //     if (StudentAnswers[currentNo - 1] == 'A') {
// //       setchecked(0)
// //     } else {
// //       if (StudentAnswers[currentNo - 1] == 'B') {
// //         setchecked(1)
// //       } else {
// //         if (StudentAnswers[currentNo - 1] == 'C') {
// //           setchecked(2)
// //         }
// //         else {
// //           if (StudentAnswers[currentNo - 1] == 'D') {
// //             setchecked(3)
// //           }
// //           else { setchecked('z') }
// //         }
// //       }
// //     }
// //   }, [currentNo])

// //   function finish() {
// //     const br = []
// //     myanswer.filter((data, i, a) => {
// //       if (data > 0) {
// //         br.push(data)
// //       }
// //     })

// //     setScore(br.length)

// //   }
// //   function UploadEdit() {
// //     const db = getDatabase();
// //     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
// //       !questions.length ? Alert.alert("", "Enter question") :
// //         !optionA.length ? Alert.alert("", "Enter Option A") :
// //           !optionB.length ? Alert.alert("", "Enter Option B") :
// //             !optionC.length ? Alert.alert("", "Enter Option C") :
// //               !optionD.length ? Alert.alert("", "Enter Option D") :
// //                 !answer.length ? Alert.alert("", "pick answer") :
// //                   connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

// //                     setUploading(true),

// //                     set(ref(db, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNumber),
// //                       [
// //                         instruction,
// //                         question,
// //                         answer,
// //                         image,

// //                         {
// //                           'Options': [
// //                             optionA,
// //                             optionB,
// //                             optionC,
// //                             optionD
// //                           ]
// //                         }


// //                       ]
// //                     )
// //                       .then(() => {
// //                         ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
// //                         // setUploading(false)
// //                         if (currentNumber < 49) {
// //                           try {
// //                             const dbRef = ref(getDatabase());
// //                             // setGettingCloudInfo(true)
// //                             //   setProcessingStudentVerification(true)
// //                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                             )).then((snapshot) => {
// //                               // setProcessingStudentVerification(false)

// //                               if (snapshot.exists()) {
// //                                 const data = snapshot.val()
// //                                 console.log(data)
// //                                 var size = Object.keys(data).length;
// //                                 setcurrentNumber(size + 1);
// //                                 // setGettingCloudInfo(false)
// //                                 // setCloudQuestionIndex('available')
// //                                 // setImage(null),
// //                                 //     setInstruction(null)
// //                                 // setQuestion('')
// //                                 // setOptionA('')
// //                                 // setOptionB('')
// //                                 // setOptionC('')
// //                                 // setOptionD('')
// //                                 // setAnswer('')
// //                                 //   setFirstName('')
// //                                 //   setSurname('')
// //                                 // setMiddleName('')
// //                                 // setGender(null),
// //                                 // setClass(null),
// //                                 // setLevel(1)
// //                               } else {
// //                                 //   setProcessingStudentVerification(false)
// //                                 Alert.alert("something went wrong", "Can't find previously saved data");
// //                               }
// //                             }).catch((error) => {
// //                               // setProcessingStudentVerification(false)
// //                               console.error(error);
// //                               // setGettingCloudInfo(false)
// //                               // setCloudQuestionIndex('available')
// //                             })
// //                           } catch (error) {
// //                             //   setProcessingStudentVerification(false)
// //                             alert(error.message)
// //                           }
// //                         }
// //                         if (currentNumber == 50) {
// //                           try {
// //                             const dbRef = ref(getDatabase());
// //                             //   setProcessingStudentVerification(true)
// //                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
// //                             )).then((snapshot) => {
// //                               // setProcessingStudentVerification(false)

// //                               if (snapshot.exists()) {
// //                                 const data = snapshot.val()
// //                                 console.log(data)
// //                                 var size = Object.keys(data).length;
// //                                 setcurrentNumber(size + 1);
// //                                 setImage(null),
// //                                   setInstruction(null)
// //                                 //   setFirstName('')
// //                                 //   setSurname('')
// //                                 // setMiddleName('')
// //                                 // setGender(null),
// //                                 // setClass(null),
// //                                 // setLevel(1)
// //                               } else {
// //                                 //   setProcessingStudentVerification(false)
// //                                 alert("Invalid credentials");
// //                               }
// //                             }).catch((error) => {
// //                               // setProcessingStudentVerification(false)
// //                               console.error(error);
// //                             })
// //                           } catch (error) {
// //                             //   setProcessingStudentVerification(false)
// //                             alert(error.message)
// //                           }
// //                         }


// //                       })
// //                       .catch((error) => {
// //                         console.log(error)
// //                         alert("The write failed...")
// //                         setUploading(false)
// //                       }));
// //     //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
// //     //             setInstruction(null),
// //     //             setQuestion(null),
// //     //             setImage(null),
// //     //             setOptionA(null),
// //     //             setOptionB(null),
// //     //             setOptionC(null),
// //     //             setOptionD(null),
// //     //             setAnswer(null)) :
// //     //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



// //     // } catch (error) {
// //     //     // alert('something went wrong')
// //     //     console.log(error)
// //     //     alert(error.message)
// //     // }


// //   }

// //   function BeginEdit(params) {
// //     setQuestion(questions[currentNo - 1].question),
// //     setAnswer(questions[currentNo - 1].Answer)
// //   }



// //   return (
// //     <View style={{
// //       height,
// //       width,
// //     }}>
// //       <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
// //       <View style={{
// //         // height: 50,
// //         width: "100%",
// //         backgroundColor: "#d6491e",
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         justifyContent: "center",

// //       }}>
// //         <Text style={{ fontWeight: '700', color: 'white', fontSize: 20.5, textAlign: 'center', paddingHorizontal: 10 }}>Biology</Text>

// //       </View>
// //       <View style={{
// //         width: '100%',
// //         flexDirection: 'row',
// //         borderBottomColor: 'lightgrey',
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //         borderBottomWidth: 1,
// //         paddingHorizontal: 20,
// //         paddingVertical: 5,
// //       }}>
// //         <View //Question 1/50
// //           style={{
// //             // width: '50%',
// //             // height: 40,
// //             alignItems: 'center',


// //             flexDirection: 'row'
// //           }}>
// //           <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
// //           <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
// //           <Text style={{ fontWeight: '500', fontSize: 18 }}>/{questions.length}</Text>
// //         </View>
// //         {/* Timer */}
// //         <TouchableOpacity
// //           onPress={() => { Edit == true ? UploadEdit() : setEdit(true), setAnswer(questions.answer) }}
// //           style={{
// //             height: 40,
// //             width: 70,
// //             alignItems: "center",
// //             justifyContent: 'center',
// //             borderColor: Edit == true ? 'blue' : 'green',
// //             borderWidth: 2.5,
// //             padding: 5,
// //             backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
// //             flexDirection: 'row',
// //             borderRadius: 5,


// //           }}>{Edit == true ? <Text style={{ color: "black" }}>Done</Text> : <Text style={{ color: "black" }}>Edit</Text>}
// //         </TouchableOpacity>

// //       </View>
// //       <View style={{
// //         height: "100%",
// //         width: "100%",
// //         // backgroundColor:"#ebeb",
// //         flexDirection: 'row',
// //         padding: 10,
// //       }}>
// //         <View style={{
// //           width: width * 0.6,
// //           // height: 200,
// //           // backgroundColor:'#aabe',
// //           padding: 5
// //         }}>
// //           {Edit == true ?
// //             <TextInput
// //               // underlineColorAndroid={'#d6491e'}
// //               multiline
// //               autoCorrect
// //               cursorColor={'#d6491e'}
// //               style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
// //               defaultValue={questions[currentNo - 1].question}
// //             /> :
// //             <Text style={{
// //               width: '100%',
// //               fontSize: 18,
// //               fontWeight: '400'
// //             }}>
// //               {questions[currentNo - 1].question}
// //             </Text>}

// //           {Edit == true ? <>
// //             {questions[currentNo - 1].Options.map((data, index) => (
// //               <View //Option A
// //                 style={{
// //                   width: "100%",
// //                   maxHeight: 100,
// //                   maxWidth: 1300,
// //                   paddingHorizontal: 10,
// //                   marginTop: 10,
// //                   flexDirection: "row",
// //                   // backgroundColor:"lightgrey",
// //                   borderRadius: 10,
// //                   borderColor: "lightgrey",
// //                   borderWidth: 1,
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   paddingLeft: 5,
// //                 }}><RadioButton
// //                 color='#d6491e'
// //                 onPress={() => {
// //                   setchecked(index),
// //                     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                 }}
// //                 value={index}
// //                 status={checked === index ? 'checked' : 'unchecked'}

// //               ></RadioButton>


// // {/* <View
// //                 multiline
// //                 autoCorrect
// //                 cursorColor={'#d6491e'}
// //                 style={{
// //                   borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
// //                   alignItems: 'center'
// //                 }}
// //                 value={index}
// //                 // onPress={() => {
// //                 //   setchecked(index),
// //                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                 // }}
// //               >
// //                 <RadioButton
// //                   color='#d6491e'
// //                   onPress={() => {
// //                     setchecked(index),
// //                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                   }}
// //                   value={index}
// //                   status={checked === index ? 'checked' : 'unchecked'}

// //                 ></RadioButton><TextInput
// //                   defaultValue={data}
// //                 />

// //               </View> */}







// //                 <TextInput
// //                   onChangeText={(text) => setOptionA(text)}
// //                   activeUnderlineColor='black'
// //                   underlineColor='lightgrey'
// //                   selectionColor='black'
// //                   placeholder='Option A'
// //                   keyboardType='default'
// //                   mode='flat'
// //                   autoCorrect={true}
// //                   multiline={true}
// //                   defaultValue={data}
// //                   style={{
// //                     // height: "100%",
// //                     width: "95%",
// //                     // alignItems: "center",
// //                     justifyContent: "center",
// //                     paddingHorizontal: 10,
// //                     backgroundColor: "transparent"
// //                   }}></TextInput>
// //               </View>


// //             ))}</> :
// //             <>{questions[currentNo - 1].Options.map((data, index) => (
// //               <View
// //                 value={index}
// //                 // onPress={() => {
// //                 //   setchecked(index),
// //                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                 // }}
// //                 style={{
// //                   flexDirection: "row",
// //                   alignItems: 'center'
// //                 }}>
// //                 <RadioButton
// //                   onPress={() => {
// //                     setchecked(index),
// //                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
// //                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
// //                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
// //                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
// //                   }}
// //                   value={index}
// //                   status={checked === index ? 'checked' : 'unchecked'}

// //                 ></RadioButton>
// //                 <Text>{data}</Text>

// //               </View>

// //             ))}</>}

// //           <View style={{
// //             width: "80%",
// //             // backgroundColor:"red",
// //             // height:50,
// //             marginTop: 50,
// //             flexDirection: 'row',
// //             alignItems: "center",
// //             justifyContent: 'space-evenly',


// //           }}>{currentNo > 1 ?
// //             <TouchableOpacity
// //               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
// //               style={{
// //                 width: 100,
// //                 height: 50,
// //                 borderRadius: 10,
// //                 borderLeftWidth: 1,
// //                 borderLeftColor: 'black',
// //                 backgroundColor: "#d7ccc8",
// //                 alignItems: "center",
// //                 justifyContent: "center"
// //               }}>
// //               <Text>Back</Text>
// //             </TouchableOpacity> : null}
// //             {currentNo < questions.length ? <TouchableOpacity
// //               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
// //               style={{
// //                 width: 100,
// //                 height: 50,
// //                 borderRadius: 10,
// //                 backgroundColor: "#d7ccc8",
// //                 alignItems: "center",
// //                 justifyContent: "center"
// //               }} >
// //               <Text>Next</Text>
// //             </TouchableOpacity> : null}


// //           </View>
// //         </View>
// //         {/* buttons view */}
// //         <View style={{
// //           width: width * 0.38,
// //           alignItems: "center",
// //           paddingHorizontal: 5,
// //           borderLeftWidth: 1,
// //           borderLeftColor: 'lightgrey'
// //           // backgroundColor:"#ebeb"
// //         }}>
// //           <ScrollView
// //             style={{
// //               // height:400,
// //               width: width * 0.38,
// //               backgroundColor: "#ebeb",
// //               // flexDirection: "row",
// //               // flexWrap: 'wrap',
// //               // padding: 10,
// //             }}>
// //             <View style={{
// //               // height:400,
// //               // width: "95%",
// //               // backgroundColor:"#ebeb",
// //               flexDirection: "row",
// //               flexWrap: 'wrap',
// //               padding: 10,
// //               paddingBottom: 100
// //             }}>

// //               {questions.map((data, index) => (
// //                 <TouchableOpacity
// //                   key={index}
// //                   ref={data}
// //                   onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index + 1) }}
// //                   style={{
// //                     height: 28,
// //                     width: 28,
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     borderWidth: 2,
// //                     borderColor: index + 1 == currentNo ? 'green' : 'grey',
// //                     backgroundColor: StudentAnswers[index] == null ? "lightgrey" : StudentAnswers[index] > 0 ? "lightgrey" : '#d6491e',
// //                     borderRadius: 5,
// //                     marginHorizontal: 10,
// //                     marginVertical: 5
// //                   }}>
// //                   <Text style={{
// //                     color: StudentAnswers[index] == null ? "black" : StudentAnswers[index] > 0 ? "black" : 'white',
// //                     fontWeight: '500'
// //                   }}>{index + 1}
// //                   </Text>
// //                 </TouchableOpacity>)
// //               )}
// //             </View>
// //           </ScrollView>



// //           <Text>{StudentAnswers.map((data, index) =>
// //             <Text>{data}</Text>)}</Text>
// //           {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
// //           <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
// //         </View>


// //       </View>
// //     </View>
// //   )
// // }


























// import { View, Platform, Button, Text, ToastAndroid, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import * as Print from 'expo-print';
// import { shareAsync } from 'expo-sharing';
// // import { RadioButton } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { RadioButton } from 'react-native-paper';
// import { initializeApp } from "firebase/app"
// // import { getApps, initializeApp } from "firebase/app";
// // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { getDatabase, ref, get, update, child, set } from "firebase/database";
// import { FirebaseApp } from 'firebase/app';
// import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// // import { getDatabase } from "firebase/database";
// //  import questions from './Component/questions';
// import questions from '../Component/Assets/questions';
// import ListOfSubjects from '../Component/ListOfSubjects';
// import ListOfInstructions from '../Component/ListOfInstructions';


// export default function Preview({
//   setLevel, Password,
//   setScenerio, setScore,
//   // Questions, 
//   selectedClass,
//   selectedSubject,
//   TermAccessible }) {
//   const { height, width } = useWindowDimensions()
//   // const [Class, setClass] = useState('')

//   const firebaseConfig = {


//     apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


//     authDomain: "herald-result-app.firebaseapp.com",


//     databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


//     projectId: "herald-result-app",


//     storageBucket: "herald-result-app.appspot.com",


//     messagingSenderId: "902637284148",


//     appId: "1:902637284148:web:8d451113d7a0a481e01361",


//     measurementId: "G-9KYW17K3RS"


//   };


//   const [Surname, setSurname] = useState('')
//   const [FirstName, setFirstName] = useState('')
//   const [RegistrationNumber, setRegistrationNumber] = useState('')
//   const [Questions, setQuestions] = useState(null)
//   // const [image, setImage] = useState('')
//   const [Class, setClass] = useState('SS1')
//   const [subject, setSubject] = useState('Biology')
//   const [minute, setMinute] = useState(0)
//   const [seconds, setSeconds] = useState(9)
//   const [myanswer, setmyanswer] = useState([])
//   // const [answer, setAnswer] = useState([])
//   const [currentNo, setCurrentNo] = useState(1)
//   const [checked, setchecked] = useState('first')
//   const [Edit, setEdit] = useState(false)
//   const [question, setQuestion] = useState('')
//   const [optionA, setOptionA] = useState('')
//   const [optionB, setOptionB] = useState('')
//   const [optionC, setOptionC] = useState('')
//   const [optionD, setOptionD] = useState('')
//   const [image, setImage] = useState(null)
//   const [instruction, setInstruction] = useState(null)
//   const [uploading, setUploading] = useState(false)
//   const [answer, setAnswer] = useState('')
//   const [connectionStatus, setConnectionStatus] = useState(false)
//   //   const [score, setScore] = useState(0);
//   //   const [Level, setLevel] = useState(3)
//   const [Username, setUsername] = useState(null)
//   const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
//   const [gettingQuestions, setGettingQuestions] = useState(false)
//   const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)
//   const [StudentAnswers, setStudentAnswers] = useState([])
//   const [Length, setLength] = useState(0)
//   const [processingLogin, setProcessingLogin] = useState(false)
//   const [start, setStart] = useState(true)

//   // For Timer
//   // console.log(Questions[currentNo][2])

//   useEffect(() => {
//     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
//       // alert(connectionStatus)
//       NetInfo.fetch().then((data) => console.log(data))
//   }, [connectionStatus])

//   useEffect(() => {
//     if (start == true) {
//       if (minute > -1) {
//         const timer = setInterval(() => {
//           setSeconds(seconds - 1)
//         }, 1000);

//         if (seconds == 0) {
//           setMinute(minute - 1);
//           setSeconds(59)
//         }


//         return () => {
//           clearInterval(timer)
//         }
//       }
//     }

//   }, [seconds])
//   useEffect(() => {
//     if (Questions != null) {
//       if (Questions[currentNo][2] == 'A') {
//         setchecked(0)
//       } else {
//         if (Questions[currentNo][2] == 'B') {
//           setchecked(1)
//         } else {
//           if (Questions[currentNo][2] == 'C') {
//             setchecked(2)
//           }
//           else {
//             if (Questions[currentNo][2] == 'D') {
//               setchecked(3)
//             }
//             else { setchecked('z') }
//           }
//         }
//       }
//     }

//   }, [currentNo])
//   useEffect(() => {
//     if (Questions != null) {
//       if (Questions[currentNo][2] == 'A') {
//         setchecked(0)
//       } else {
//         if (Questions[currentNo][2] == 'B') {
//           setchecked(1)
//         } else {
//           if (Questions[currentNo][2] == 'C') {
//             setchecked(2)
//           }
//           else {
//             if (Questions[currentNo][2] == 'D') {
//               setchecked(3)
//             }
//             else { setchecked('z') }
//           }
//         }
//       }
//     }

//   }, [])


//   function Editor(params) {
//     if (Questions[currentNo][2] == 'A') {
//       setchecked(0)
//     } else {
//       if (Questions[currentNo][2] == 'B') {
//         setchecked(1)
//       } else {
//         if (Questions[currentNo][2] == 'C') {
//           setchecked(2)
//         }
//         else {
//           if (Questions[currentNo][2] == 'D') {
//             setchecked(3)
//           }
//           else { setchecked('z') }
//         }
//       }
//     }
//     setEdit(true)
//     setQuestion(Questions[currentNo][1])
//     setOptionA(Questions[currentNo][4].Options[0])
//     setOptionB(Questions[currentNo][4].Options[1])
//     setOptionC(Questions[currentNo][4].Options[2])
//     setOptionD(Questions[currentNo][4].Options[3])
//     setImage(null)
//     setAnswer(Questions[currentNo][2])
//   }
//   function UploadEdit(params) {
//     Alert.alert(
//       "Confirmation",
//       `You're about to make changes to question ${currentNo}`,
//       [
//         {
//           text: "cancel",
//           // onPress: () => ProceedToTypeQuestions()
//         },
//         {
//           text: "",
//           // onPress: () => ProceedToTypeQuestions()
//         },

//         { text: "Confirm", onPress: () => UploadConfirmed() }
//       ]
//     )
//   }

//   function UploadConfirmed() {
//     const db = getDatabase();
//     // alert('Length')
//     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
//       !questions.length ? Alert.alert("", "Enter question") :
//         !optionA.length ? Alert.alert("", "Enter Option A") :
//           !optionB.length ? Alert.alert("", "Enter Option B") :
//             !optionC.length ? Alert.alert("", "Enter Option C") :
//               !optionD.length ? Alert.alert("", "Enter Option D") :
//                 !answer.length ? Alert.alert("", "pick answer") :
//                   connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

//                     setUploading(true),

//                     set(ref(db, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNo),
//                       [
//                         instruction,
//                         question,
//                         answer,
//                         image,

//                         {
//                           'Options': [
//                             optionA,
//                             optionB,
//                             optionC,
//                             optionD
//                           ]
//                         }


//                       ]
//                     )
//                       .then(() => {
//                         setQuestions(null)
//                         // setUploading(false)
//                         if (currentNo < Length) {
//                           try {

//                             const dbRef = ref(getDatabase());
//                             // setGettingCloudInfo(true)
//                             //   setProcessingStudentVerification(true)
//                             get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                             )).then((snapshot) => {
//                               // setProcessingStudentVerification(false)
//                               setQuestions(null)
//                               if (snapshot.exists()) {
//                                 const data = snapshot.val()
//                                 setQuestions(data)
//                                 ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
//                                 setEdit(false)
//                                 setCurrentNo(currentNo + 1)
//                                 // setAnswer(Questions[currentNo][2])
//                                 var size = Object.keys(data).length;
//                                 setLength(size)
//                                 console.log(Length)
                                
//                               } else {
//                                 //   setProcessingStudentVerification(false)
//                                 Alert.alert("something went wrong", "Can't find previously saved data");
//                               }
//                             }).catch((error) => {
//                               // setProcessingStudentVerification(false)
//                               console.error(error);
//                               // setGettingCloudInfo(false)
//                               // setCloudQuestionIndex('available')
//                             })
//                           } catch (error) {
//                             //   setProcessingStudentVerification(false)
//                             alert(error.message)
//                           }
//                         }
//                         if (currentNo == Length) {
//                           try {
//                             const dbRef = ref(getDatabase());
//                             // setGettingCloudInfo(true)
//                             //   setProcessingStudentVerification(true)
//                             get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                             )).then((snapshot) => {
//                               // setProcessingStudentVerification(false)

//                               if (snapshot.exists()) {
//                                 setQuestions(null)
//                                 const data = snapshot.val()
//                                 setQuestions(data)
//                                 ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
//                                 setEdit(false)
//                                 // console.log("data",data)
//                                 var size = Object.keys(data).length;
//                                 // setcurrentNo(size + 1);
//                                 // setGettingCloudInfo(false)
//                                 // setCloudQuestionIndex('available')
//                                 // setImage(null),
//                                 //     setInstruction(null)
//                                 // setQuestion('')
//                                 // setOptionA('')
//                                 // setOptionB('')
//                                 // setOptionC('')
//                                 // setOptionD('')
//                                 // setAnswer('')
//                                 //   setFirstName('')
//                                 //   setSurname('')
//                                 // setMiddleName('')
//                                 // setGender(null),
//                                 // setClass(null),
//                                 // setLevel(1)
//                               } else {
//                                 //   setProcessingStudentVerification(false)
//                                 Alert.alert("something went wrong", "Can't find previously saved data");
//                               }
//                             }).catch((error) => {
//                               // setProcessingStudentVerification(false)
//                               console.error(error);
//                               // setGettingCloudInfo(false)
//                               // setCloudQuestionIndex('available')
//                             })
//                           } catch (error) {
//                             //   setProcessingStudentVerification(false)
//                             alert(error.message)
//                           }
//                         }


//                       })
//                       .catch((error) => {
//                         console.log(error)
//                         alert("The write failed...")
//                         setUploading(false)
//                       }));
//     //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
//     //             setInstruction(null),
//     //             setQuestion(null),
//     //             setImage(null),
//     //             setOptionA(null),
//     //             setOptionB(null),
//     //             setOptionC(null),
//     //             setOptionD(null),
//     //             setAnswer(null)) :
//     //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



//     // } catch (error) {
//     //     // alert('something went wrong')
//     //     console.log(error)
//     //     alert(error.message)
//     // }


//   } 
//   const AnswerScheme = () => {
//     let t = '';
//     for (let i in Questions) {
//       const question = Questions[i][1];
//       const Option = Questions[i][4].Options
//       const Answer = Questions[i][2]
//       let g = ''
//       for (let r in Answer) {
//         // const question = Questions[i][1];
//         const answer = Answer[r]
//         g = g +
//           `
//           ${answer}
//            `
//       }
//       t = t +
//         ` <tc>
//         <tc>
//         <h1 style="font-size: 16; font-family: Helvetica Neue;  font-weight: normal;"> (${i}) ${g}</h1>
//         </tc>
          
             
//         </tc>`
//     }

//     return t;
//   }
//   const Questionaire = () => {
//     let t = '';
//     for (let i in Questions) {
//       const question = Questions[i][1];
//       const Option = Questions[i][4].Options
//       const answer = Questions[i][2]
//       let g = ''
//       for (let r in Option) {
//         // const question = Questions[i][1];
//         const option = Option[r]
//         g = g +
//           `(${r == 0 ? 'A' : r == 1 ? 'B' : r == 2 ? 'C' : 'D'}) ${option}
//            `
//       }
//       t = t +
//         ` <tr>
//         <tc>
//         <h1 style="font-size: 16; font-family: Helvetica Neue;  font-weight: normal;"> (${i})  ${question}</h1>
//         </tc>
          
//           <h1 style="font-size: 16; font-family: Helvetica Neue;margin-left:30; font-weight: normal;">${g}</h1>
             
//         </tr>`
//     }

//     return t;
//   }

//   const html = `
//   <html>
//     <head>
//       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
//     </head>
    
//       <h1 style="font-size: 22px; 
//       width: 700px;
      
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;">
//         Herald International Secondary School
//       </h1>
//       <h3 style="font-size: 16px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
//         Plot 15 Emmanuel Bassey Avenue, Uyo Akwa Ibom State.
//       </h3>
//       <h2 style="font-size: 18px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;>
//       ${TermAccessible} Examination for _____/_____   Session
//       </h2>
//       <h3 style="font-size: 18px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
//       Class: ${selectedClass}  Subject: ${selectedSubject}
        
//       </h3>
//       <h3 style="font-size: 16px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
//       Time: 1 hour 30 minutes
//       </h3>
//       <h3 style="font-size: 16px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
//       Instruction: Answer ALL questions
//       </h3>
//       <h3 style="font-size: 16px; 
//       width: 700px;
//       justify-content:'center';align-items:'center';display: flex;
//       align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
//       Part A
//       </h3>
//       </body>
//         <body style="text-align: left;">
//        <table>
//           ${Questionaire()}
          
               
//        </table>
//     </body>
    


// </>

        
//     </body>
//   </html>
//   `
//   // console.log(Questions.map((data, index) => (data[2])))
//   const [selectedPrinter, setSelectedPrinter] = React.useState();

//   const print = async () => {
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     await Print.printAsync({
//       html,
//       printerUrl: selectedPrinter?.url, // iOS only
//     });
//   };

//   const printToFile = async () => {
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     const { uri } = await Print.printToFileAsync({ html });
//     ToastAndroid.show('File has been saved to:', uri, ToastAndroid.SHORT);
//     await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
//   };

//   const selectPrinter = async () => {
//     const printer = await Print.selectPrinterAsync(); // iOS only
//     setSelectedPrinter(printer);
//   };

//   // useEffect(() => {
//   //   if (minute == -1) {
//   //     setLevel(5),
//   //     finish(),
//   //     setScenerio("Time Up")
//   //   }

//   //   // return () => {
//   //   //   second
//   //   // }
//   // }, [seconds])


//   // Marking system
//   // useEffect(() => {
//   //   StudentAnswers[currentNo - 1] === Questions[currentNo][2] ?
//   //     myanswer[currentNo - 1] = 1 :
//   //     myanswer[currentNo - 1] = 0;
//   // }, [checked])

//   // useEffect(() => {
//   //   if (StudentAnswers[currentNo - 1] == 'A') {
//   //     setchecked(0)
//   //   } else {
//   //     if (StudentAnswers[currentNo - 1] == 'B') {
//   //       setchecked(1)
//   //     } else {
//   //       if (StudentAnswers[currentNo - 1] == 'C') {
//   //         setchecked(2)
//   //       }
//   //       else {
//   //         if (StudentAnswers[currentNo - 1] == 'D') {
//   //           setchecked(3)
//   //         }
//   //         else { setchecked('z') }
//   //       }
//   //     }
//   //   }
//   // }, [currentNo])

//   useEffect(() => {
//     proceedToGetQuestions()
//   }, [])


//   // function finish() {

//   // console.log(Questions[currentNo][4].Options[1])
//   // }
//   function finish() {

//     try {
//       const br = []
//       myanswer.filter((data, i, a) => {
//         if (data > 0) {
//           br.push(data)
//         }
//       })
//       let score = br.length
//       setScore(br.length), setLevel(5)
//       const db = getDatabase();
//       update(ref(db, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + selectedSubject), {
//         selectedSubject: score
//         // Subjects_Handled: []

//       }).then(ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT));
//     } catch (error) {
//       alert(error)
//     }
//   }

//   function proceedToGetQuestions(params) {
//     try {
//       const dbRef = ref(getDatabase());
//       setGettingQuestions(true)
//       get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`)).then((snapshot) => {

//         if (snapshot.exists()) {
//           setGettingQuestions(false)
//           // setLevel(3)
//           const data = snapshot.val()
//           var size = Object.keys(data).length
//           setQuestions(data);
//           setLength(size)
//           // console.log('data', data)

//         } else {
//           Alert.alert("", "No examination ready for your class"),
//             setGettingQuestions(false)

//         }
//       })
//     } catch (error) {
//       alert(error.message);
//       setGettingQuestions(false)
//     }
//   }



//   return (
//     <ScrollView style={{
//       height,
//       width,
//     }}>
//       <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
//       <View //Select Subject column heught==50
//         style={{
//           height: 50,
//           width: "100%",
//           backgroundColor: "white",
//           borderBottomColor: 'lightgrey',
//           borderBottomWidth: 1,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//         <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
          
//           <TouchableOpacity onPress={() => setLevel(2)}>
//             <MaterialCommunityIcons
//               style={{ padding: 5 }}
//               name="arrow-left" color='black' size={20} /></TouchableOpacity>
//         </View>
//         <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{selectedSubject} for {selectedClass}</Text>
//       </View>
//       {Questions != null ?
//         <View style={{height:height-50}}>
       
//           <View style={{
//             width: '100%',
//             flexDirection: 'row',
//             backgroundColor:"#f5f5f5",
//             borderBottomColor: 'grey',
//             alignItems: "center",
//             justifyContent: "space-between",
//             borderBottomWidth: 1,
//             paddingHorizontal: 20,
//             paddingVertical: 5,
//             // 
//           }}>
//             <View //Question 1/50
//               style={{
//                 // width: '50%',
//                 // height: 40,
//                 alignItems: 'center',
//                 // backgroundColor:"red",

//                 flexDirection: 'row'
//               }}>
//               <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
//               <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
//               <Text style={{ fontWeight: '500', fontSize: 18 }}>/{Length}</Text>
//             </View>

//             {/* Timer */}
//             <TouchableOpacity
//               onPress={() => { Edit == true ? UploadEdit() : Editor() }}
//               style={{
//                 height: 40,
//                 width: 70,
//                 alignItems: "center",
//                 justifyContent: 'center',
//                 borderColor: Edit == true ? 'blue' : 'green',
//                 borderWidth: 2.5,
//                 padding: 5,
//                 backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
//                 flexDirection: 'row',
//                 borderRadius: 5,


//               }}>
//               {Edit == true ?
//                 <Text
//                   style={{ color: "black" }}>Done</Text>
//                 :
//                 <Text style={{ color: "black" }}>Edit</Text>
//               }
//             </TouchableOpacity>

//           </View>
//           <View
//             style={{
//               height: "100%",
//               width: "100%",
//               backgroundColor:"#f5f5f5",
//               flexDirection: 'row',
//               padding: 10,
//             }}>
//             <View //Show questions
//               style={{
//                 width: width * 0.6,
//                 // height: 200,
//                 // backgroundColor:'#aabe',
//                 padding: 5
//               }}>
//               {Edit == true ?
//                 <TextInput
//                   onChangeText={(text) => setQuestion(text)}
//                   // underlineColorAndroid={'#d6491e'}
//                   multiline
//                   autoCorrect
//                   cursorColor={'#d6491e'}
//                   style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
//                   defaultValue={Questions[currentNo][1]}
//                 /> :
//                 <Text style={{
//                   width: '100%',
//                   fontSize: 18,
//                   fontWeight: '400'
//                 }}>
//                   {Questions[currentNo][1]}
//                 </Text>
//               }

//               {Edit == true ?
//                 <>

//                   <View //Option A
//                     style={{
//                       width: "100%",
//                       maxHeight: 100,
//                       maxWidth: 1300,
//                       paddingHorizontal: 10,
//                       marginTop: 10,
//                       flexDirection: "row",
//                       // backgroundColor:"lightgrey",
//                       borderRadius: 10,
//                       borderColor: "lightgrey",
//                       borderWidth: 1,
//                       alignItems: "center",
//                       // justifyContent: "center",
//                       paddingLeft: 5,
//                     }}>

//                     <View
//                       multiline
//                       autoCorrect
//                       cursorColor={'#d6491e'}
//                       style={{
//                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                         alignItems: 'center'
//                       }}
//                       value={1}
//                     // onPress={() => {
//                     //   setchecked(Questions[currentNo][2]),
//                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                     // }}
//                     >
//                       <RadioButton
//                         color='#d6491e'
//                         onPress={() => {
//                           setchecked(0),
//                             setAnswer('A')
//                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                         }}
//                         value={1}
//                         status={
//                           checked === 0 ? 'checked' :
//                             answer === 'A' ? 'checked' : 'unchecked'}

//                       />
//                       <TextInput
//                         onChangeText={(text) => setOptionA(text)}
//                         style={{ width: '80%' }}
//                         defaultValue={Questions[currentNo][4].Options[0]}
//                       />

//                     </View>



//                   </View>
//                   <View //Option B
//                     style={{
//                       width: "100%",
//                       maxHeight: 100,
//                       maxWidth: 1300,
//                       paddingHorizontal: 10,
//                       marginTop: 10,
//                       flexDirection: "row",
//                       // backgroundColor:"lightgrey",
//                       borderRadius: 10,
//                       borderColor: "lightgrey",
//                       borderWidth: 1,
//                       alignItems: "center",
//                       // justifyContent: "center",
//                       paddingLeft: 5,
//                     }}>

//                     <View
//                       multiline
//                       autoCorrect
//                       cursorColor={'#d6491e'}
//                       style={{
//                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                         alignItems: 'center'
//                       }}
//                       value={2}
//                     // onPress={() => {
//                     //   setchecked(1),
//                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                     // }}
//                     >
//                       <RadioButton
//                         color='#d6491e'
//                         onPress={() => {
//                           setchecked(1),
//                             setAnswer('B')
//                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                         }}
//                         value={2}
//                         status={checked === 1 ? 'checked'
//                           :
//                           answer === 'B' ? 'checked' : 'unchecked'}

//                       />
//                       <TextInput
//                         onChangeText={(text) => setOptionB(text)}
//                         style={{ width: '80%' }}
//                         defaultValue={Questions[currentNo][4].Options[1]}
//                       />

//                     </View>



//                   </View>
//                   <View //Option C
//                     style={{
//                       width: "100%",
//                       maxHeight: 100,
//                       maxWidth: 1300,
//                       paddingHorizontal: 10,
//                       marginTop: 10,
//                       flexDirection: "row",
//                       // backgroundColor:"lightgrey",
//                       borderRadius: 10,
//                       borderColor: "lightgrey",
//                       borderWidth: 1,
//                       alignItems: "center",
//                       // justifyContent: "center",
//                       paddingLeft: 5,
//                     }}>

//                     <View
//                       multiline
//                       autoCorrect
//                       cursorColor={'#d6491e'}
//                       style={{
//                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                         alignItems: 'center'
//                       }}
//                       value={3}
//                     // onPress={() => {
//                     //   setchecked(3),
//                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                     // }}
//                     >
//                       <RadioButton
//                         color='#d6491e'
//                         onPress={() => {
//                           setchecked(2),
//                             setAnswer('C')
//                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                         }}
//                         value={2}
//                         status={checked === 2 ? 'checked' :
//                           answer === 'C' ? 'checked' : 'unchecked'}

//                       />
//                       <TextInput
//                         onChangeText={(text) => setOptionC(text)}
//                         style={{ width: '80%' }}
//                         defaultValue={Questions[currentNo][4].Options[2]}
//                       />

//                     </View>



//                   </View>
//                   <View //Option D
//                     style={{
//                       width: "100%",
//                       maxHeight: 100,
//                       maxWidth: 1300,
//                       paddingHorizontal: 10,
//                       marginTop: 10,
//                       flexDirection: "row",
//                       // backgroundColor:"lightgrey",
//                       borderRadius: 10,
//                       borderColor: "lightgrey",
//                       borderWidth: 1,
//                       alignItems: "center",
//                       // justifyContent: "center",
//                       paddingLeft: 5,
//                     }}>

//                     <View
//                       multiline
//                       autoCorrect
//                       cursorColor={'#d6491e'}
//                       style={{
//                         borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                         alignItems: 'center'
//                       }}
//                       value={4}
//                     // onPress={() => {
//                     //   setchecked(index),
//                     //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                     //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                     //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                     //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                     // }}
//                     >
//                       <RadioButton
//                         color='#d6491e'
//                         onPress={() => {
//                           setchecked(3),
//                             setAnswer('D')
//                           // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                           //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                           //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                         }}
//                         value={3}
//                         status={checked === 3 ? 'checked' :
//                           answer === 'D' ? 'checked' : 'unchecked'}

//                       />
//                       <TextInput
//                         onChangeText={(text) => setOptionD(text)}
//                         style={{ width: '80%' }}
//                         defaultValue={Questions[currentNo][4].Options[3]}
//                       />

//                     </View>



//                   </View>

//                 </>
//                 :
//                 <>
//                   {/* <View //Option A
//                       style={{
//                         width: "100%",
//                         maxHeight: 100,
//                         maxWidth: 1300,
//                         paddingHorizontal: 10,
//                         marginTop: 10,
//                         flexDirection: "row",
//                         // backgroundColor:"lightgrey",
//                         borderRadius: 10,
//                         borderColor: "lightgrey",
//                         borderWidth: 1,
//                         alignItems: "center",
//                         // justifyContent: "center",
//                         paddingLeft: 5,
//                       }}>

//                       <View
//                         multiline
//                         autoCorrect
//                         cursorColor={'#d6491e'}
//                         style={{
//                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                           alignItems: 'center'
//                         }}
//                         value={1}
//                       // onPress={() => {
//                       //   setchecked(Questions[currentNo][2]),
//                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                       // }}
//                       >
//                         <RadioButton
//                           color='#d6491e'
//                           onPress={() => {
//                             setchecked(0),
//                             setAnswer('A')
//                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                           }}
//                           value={1}
//                           status={
//                             checked === 0 ? 'checked' : 
//                           answer==='A'?'checked': 'unchecked'}

//                         />
//                         <TextInput
//                         onChangeText={(text) => setOptionA(text)}
//                           style={{ width: '80%' }}
//                           defaultValue={Questions[currentNo][4].Options[0]}
//                         />

//                       </View>



//                     </View> */}
//                   {/* <View //Option B
//                       style={{
//                         width: "100%",
//                         maxHeight: 100,
//                         maxWidth: 1300,
//                         paddingHorizontal: 10,
//                         marginTop: 10,
//                         flexDirection: "row",
//                         // backgroundColor:"lightgrey",
//                         borderRadius: 10,
//                         borderColor: "lightgrey",
//                         borderWidth: 1,
//                         alignItems: "center",
//                         // justifyContent: "center",
//                         paddingLeft: 5,
//                       }}>

//                       <View
//                         multiline
//                         autoCorrect
//                         cursorColor={'#d6491e'}
//                         style={{
//                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                           alignItems: 'center'
//                         }}
//                         value={2}
//                       // onPress={() => {
//                       //   setchecked(1),
//                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                       // }}
//                       >
//                         <RadioButton
//                           color='#d6491e'
//                           onPress={() => {
//                             setchecked(1),
//                             setAnswer('B')
//                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                           }}
//                           value={2}
//                           status={checked === 1 ? 'checked'
//                            :
//                            answer==='B'?'checked': 'unchecked'}

//                         />
//                         <TextInput
//                         onChangeText={(text) => setOptionB(text)}
//                           style={{ width: '80%' }}
//                           defaultValue={Questions[currentNo][4].Options[1]}
//                         />

//                       </View>



//                     </View> */}
//                   {/* <View //Option C
//                       style={{
//                         width: "100%",
//                         maxHeight: 100,
//                         maxWidth: 1300,
//                         paddingHorizontal: 10,
//                         marginTop: 10,
//                         flexDirection: "row",
//                         // backgroundColor:"lightgrey",
//                         borderRadius: 10,
//                         borderColor: "lightgrey",
//                         borderWidth: 1,
//                         alignItems: "center",
//                         // justifyContent: "center",
//                         paddingLeft: 5,
//                       }}>

//                       <View
//                         multiline
//                         autoCorrect
//                         cursorColor={'#d6491e'}
//                         style={{
//                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                           alignItems: 'center'
//                         }}
//                         value={3}
//                       // onPress={() => {
//                       //   setchecked(3),
//                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                       // }}
//                       >
//                         <RadioButton
//                           color='#d6491e'
//                           onPress={() => {
//                             setchecked(2),
//                             setAnswer('C')
//                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                           }}
//                           value={2}
//                           status={checked === 2 ? 'checked' :
//                           answer==='C'?'checked': 'unchecked'}

//                         />
//                         <TextInput
//                         onChangeText={(text) => setOptionC(text)}
//                           style={{ width: '80%' }}
//                           defaultValue={Questions[currentNo][4].Options[2]}
//                         />

//                       </View>



//                     </View> */}
//                   {/* <View //Option D
//                       style={{
//                         width: "100%",
//                         maxHeight: 100,
//                         maxWidth: 1300,
//                         paddingHorizontal: 10,
//                         marginTop: 10,
//                         flexDirection: "row",
//                         // backgroundColor:"lightgrey",
//                         borderRadius: 10,
//                         borderColor: "lightgrey",
//                         borderWidth: 1,
//                         alignItems: "center",
//                         // justifyContent: "center",
//                         paddingLeft: 5,
//                       }}>

//                       <View
//                         multiline
//                         autoCorrect
//                         cursorColor={'#d6491e'}
//                         style={{
//                           borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                           alignItems: 'center'
//                         }}
//                         value={4}
//                       // onPress={() => {
//                       //   setchecked(index),
//                       //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                       //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                       //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                       //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                       // }}
//                       >
//                         <RadioButton
//                           color='#d6491e'
//                           onPress={() => {
//                             setchecked(3),
//                             setAnswer('D')
//                               // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                               //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                               //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                               //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                           }}
//                           value={3}
//                           status={checked === 3 ? 'checked' :
//                           answer==='D'?'checked': 'unchecked'}

//                         />
//                         <TextInput
//                         onChangeText={(text) => setOptionD(text)}
//                           style={{ width: '80%' }}
//                           defaultValue={Questions[currentNo][4].Options[3]}
//                         />

//                       </View>



//                     </View>  */}
//                   {Questions[currentNo][4].Options.map((data, index) => (
//                     <View
//                       value={index}
//                       onPress={() => {
//                         setchecked(index),
//                           index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                             index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                               index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                                 index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                       }}
//                       style={{
//                         flexDirection: "row",
//                         alignItems: 'center'
//                       }}>
//                       <RadioButton
//                         // onPress={() => {
//                         //   setchecked(index),
//                         //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                         //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                         //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                         //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                         // }}
//                         color='#d6491e'
//                         value={index}
//                         status={index === checked ? 'checked' : 'unchecked'}

//                       ></RadioButton><Text>{data}</Text>

//                     </View>

//                   ))}
//                   <View //next and back buttons
//                     style={{
//                       width: "80%",
//                       // backgroundColor:"red",
//                       // height:50,
//                       marginTop: 50,
//                       flexDirection: 'row',
//                       alignItems: "center",
//                       justifyContent: 'space-evenly',


//                     }}>{currentNo > 1 ?
//                       <TouchableOpacity
//                         onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
//                         style={{
//                           width: 70,
//                           height: 50,
//                           borderRadius: 10,
//                           // borderLeftWidth: 1,
//                           // borderLeftColor: 'black',
//                           backgroundColor: "#d7ccc8",
//                           alignItems: "center",
//                           justifyContent: "center"
//                         }}>
//                         <Text>Back</Text>
//                       </TouchableOpacity> : null}
//                     {currentNo < Length ? <TouchableOpacity
//                       onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
//                       style={{
//                         width: 70,
//                         height: 50,
//                         borderRadius: 10,
//                         backgroundColor: "#d7ccc8",
//                         alignItems: "center",
//                         justifyContent: "center"
//                       }} >
//                       <Text>Next</Text>
//                     </TouchableOpacity> : null}


//                   </View>
                 
//                 </>


//               }</View>
//             <View style={{
//               width: width * 0.38,
//               alignItems: "center",
//               paddingHorizontal: 5,
//               borderLeftWidth: 1,
//               borderLeftColor: 'lightgrey'
//               // backgroundColor:"#ebeb"
//             }}>
//               <ScrollView
//                 style={{
//                   // height:400,
//                   width: width * 0.38,
//                   // backgroundColor: "#ebeb",
//                   // flexDirection: "row",
//                   // flexWrap: 'wrap',
//                   // padding: 10,
//                 }}>
//                 <View style={{
//                   // height:400,
//                   // width: "95%",
//                   // backgroundColor:"#ebeb",
//                   flexDirection: "row",
//                   flexWrap: 'wrap',
//                   padding: 10,
//                   paddingBottom: 100
//                 }}>

//                   {Questions.map((data, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       ref={data}
//                       onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index) }}
//                       style={{
//                         height: 28,
//                         width: 28,
//                         alignItems: "center",
//                         justifyContent: "center",
//                         borderWidth: 2,
//                         borderColor: index == currentNo ? '#d6491e' : 'grey',
//                         backgroundColor: index == currentNo ? '#d6491e' : 'lightgrey',
//                         borderRadius: 5,
//                         marginHorizontal: 10,
//                         marginVertical: 5
//                       }}>
//                       <Text style={{
//                         color: index == currentNo ? 'white' : 'black',
//                         fontWeight: '500'
//                       }}>{index}
//                       </Text>
//                     </TouchableOpacity>)
//                   )}
//                 </View>
//               </ScrollView>



//               <Text>{StudentAnswers.map((data, index) =>
//                 <Text>{data}</Text>)}</Text>
//               {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
//               <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
//             </View>



//           </View>
//           <View style={{  width: '100%', flexDirection: 'row',alignItems:'center',justifyContent:'center', position: 'absolute', marginTop: (height /2)+ (height/4), }}>
//             <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#d6491e',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={print} >

//               <MaterialCommunityIcons
//                 style={{ padding: 5 }}
//                 name="printer" color='white' size={20} />
//             </TouchableOpacity>

//             <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#d6491e',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={printToFile} >
//               <MaterialCommunityIcons
//                 style={{ padding: 5 }}
//                 name="share" color='white' size={20} />
//             </TouchableOpacity>
//             {/* {Platform.OS === 'ios' && (
//         <>
//           <View style={{width:'100%'}}/>
//           <Button title="Select printer" onPress={selectPrinter} />
//           <View style={{width:'100%'}} />
//           {selectedPrinter ? (
//             <Text style={{width:'100%'}}>{`Selected printer: ${selectedPrinter.name}`}</Text>
//           ) : undefined}
//         </>
//       )} */}
//           </View>
//         </View> :
//         <View style={{
//           height: height-50,
//           width,
//           alignItems: "center",
//           justifyContent: "center"
//         }}>
//           <ActivityIndicator color={'#d6491e'} size={50} />
//           <TouchableOpacity 
//           style={{height:40, borderRadius:10,width:150,alignItems:'center',justifyContent:'center',
//           backgroundColor:"lightgrey"}}
//             onPress={proceedToGetQuestions}>
//             <Text style={{  }}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       }


//     </ScrollView>)
// }







// import { View, Text, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// import React, { useState, useEffect } from 'react'
// // import { RadioButton } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { RadioButton } from 'react-native-paper';
// import { initializeApp } from "firebase/app"
// // import { getApps, initializeApp } from "firebase/app";
// // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { getDatabase, ref, get, child, set } from "firebase/database";
// import { FirebaseApp } from 'firebase/app';
// // import { getDatabase } from "firebase/database";
// //  import questions from './Component/questions';
// import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// import questions from '../Component/Assets/questions';
// import ListOfSubjects from '../Component/ListOfSubjects';
// import ListOfInstructions from '../Component/ListOfInstructions';


// export default function Preview({ setLevel, setScenerio, setScore }) {
//   const { height, width } = useWindowDimensions()
//   // const database = getDatabase();
//   // const database = getDatabase(app);
//   // const database = getDatabase();
//   // const app =FirebaseApp.initializeApp(firebaseConfig);
//   const firebaseConfig = {


//     apiKey: "AIzaSyBB82MW9ltnR4-nwVbiBSryoYxEDx_PMSs",


//     authDomain: "herald-result-app.firebaseapp.com",


//     databaseURL: "https://herald-result-app-default-rtdb.firebaseio.com",


//     projectId: "herald-result-app",


//     storageBucket: "herald-result-app.appspot.com",


//     messagingSenderId: "902637284148",


//     appId: "1:902637284148:web:8d451113d7a0a481e01361",


//     measurementId: "G-9KYW17K3RS"


//   };




//   // function writeUserData(userId, name, email, imageUrl) {
//   //   const db = getDatabase();
//   //   set(ref(db, 'users/' + 'js2'), {
//   //     username: 'name',
//   //     email: 'email',
//   //     profile_picture : 'imageUrl'
//   //   });
//   // }
//   const [Surname, setSurname] = useState('')
//   const [FirstName, setFirstName] = useState('')
//   const [RegistrationNumber, setRegistrationNumber] = useState('')
//   const [instruction, setInstruction] = useState(null)
//   const [question, setQuestion] = useState('')
//   const [optionA, setOptionA] = useState('')
//   const [optionB, setOptionB] = useState('')
//   const [optionC, setOptionC] = useState('')
//   const [optionD, setOptionD] = useState('')
//   const [Answer, setAnswer] = useState('')
//   const [image, setImage] = useState(null)
//   // const [answer, setAnswer] = useState('')
//   const [Class, setClass] = useState('')
//   const [minute, setMinute] = useState(0)
//   const [seconds, setSeconds] = useState(9)
//   const [myanswer, setmyanswer] = useState([])
//   const [currentNo, setCurrentNo] = useState(1)
//   const [checked, setchecked] = useState('first')
//   //   const [score, setScore] = useState(0);
//   //   const [Level, setLevel] = useState(3)
//   const [Edit, setEdit] = useState(false)
//   const [Password, setPassword] = useState(null)
//   const [Username, setUsername] = useState(null)
//   const [subject, setSubject] = useState(null)
//   const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
//   const [gettingQuestions, setGettingQuestions] = useState(false)
//   const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)

//   const [StudentAnswers, setStudentAnswers] = useState([])

//   const [processingLogin, setProcessingLogin] = useState(false)
//   const [start, setStart] = useState(true)


//   function ValidateCandidate(params) {
//     try {
//       const dbRef = ref(getDatabase());
//       //   setProcessingStudentVerification(true)

//       get(child(dbRef, 'TermAccessible/')).then((snapshot) => {
//         // setProcessingStudentVerification(false)
//         if (snapshot.exists()) {
//           const data = snapshot.val()
//           setProcessingLogin(false);
//           setTermAccessible(data.TermAccessible)
//         } else { proceedToGetQuestions() }
//       }).then(get(child(dbRef, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + `${subject}/`)).then((snapshot) => {
//         // setProcessingStudentVerification(false)
//         if (snapshot.exists()) {
//           const data = snapshot.val()
//           setProcessingLogin(false);
//           Alert.alert("Oops!", `You have already sat for ${subject} examination`)
//         } else { proceedToGetQuestions() }
//       })
//       )
//     } catch (error) {
//       alert(error.message);
//       setGettingQuestions(false)
//     }
//   }

//   // For Timer

//   //   useEffect(() => {
//   //     if (start == true) {
//   //       if (minute > -1) {
//   //         const timer = setInterval(() => {
//   //           setSeconds(seconds - 1)
//   //         }, 1000);

//   //         if (seconds == 0) {
//   //           setMinute(minute - 1);
//   //           setSeconds(59)
//   //         }


//   //         return () => {
//   //           clearInterval(timer)
//   //         }
//   //       }
//   //     }

//   //   }, [seconds])
//   //   useEffect(() => {
//   //     if (minute == -1) {
//   //       setLevel(5),
//   //       finish(),
//   //       setScenerio("Time Up")
//   //     }

//   //     // return () => {
//   //     //   second
//   //     // }
//   //   }, [seconds])

//   useEffect(() => {
//     StudentAnswers[currentNo - 1] === questions[currentNo - 1].Answer ?
//       myanswer[currentNo - 1] = 1 :
//       myanswer[currentNo - 1] = 0;
//   }, [checked])

//   useEffect(() => {
//     setAnswer(questions[currentNo - 1].Answer)
//   }, [])


//   useEffect(() => {
//     if (StudentAnswers[currentNo - 1] == 'A') {
//       setchecked(0)
//     } else {
//       if (StudentAnswers[currentNo - 1] == 'B') {
//         setchecked(1)
//       } else {
//         if (StudentAnswers[currentNo - 1] == 'C') {
//           setchecked(2)
//         }
//         else {
//           if (StudentAnswers[currentNo - 1] == 'D') {
//             setchecked(3)
//           }
//           else { setchecked('z') }
//         }
//       }
//     }
//   }, [currentNo])

//   function finish() {
//     const br = []
//     myanswer.filter((data, i, a) => {
//       if (data > 0) {
//         br.push(data)
//       }
//     })

//     setScore(br.length)

//   }
//   function UploadEdit() {
//     const db = getDatabase();
//     NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
//       !questions.length ? Alert.alert("", "Enter question") :
//         !optionA.length ? Alert.alert("", "Enter Option A") :
//           !optionB.length ? Alert.alert("", "Enter Option B") :
//             !optionC.length ? Alert.alert("", "Enter Option C") :
//               !optionD.length ? Alert.alert("", "Enter Option D") :
//                 !answer.length ? Alert.alert("", "pick answer") :
//                   connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

//                     setUploading(true),

//                     set(ref(db, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNumber),
//                       [
//                         instruction,
//                         question,
//                         answer,
//                         image,

//                         {
//                           'Options': [
//                             optionA,
//                             optionB,
//                             optionC,
//                             optionD
//                           ]
//                         }


//                       ]
//                     )
//                       .then(() => {
//                         ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
//                         // setUploading(false)
//                         if (currentNumber < 49) {
//                           try {
//                             const dbRef = ref(getDatabase());
//                             // setGettingCloudInfo(true)
//                             //   setProcessingStudentVerification(true)
//                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                             )).then((snapshot) => {
//                               // setProcessingStudentVerification(false)

//                               if (snapshot.exists()) {
//                                 const data = snapshot.val()
//                                 console.log(data)
//                                 var size = Object.keys(data).length;
//                                 setcurrentNumber(size + 1);
//                                 // setGettingCloudInfo(false)
//                                 // setCloudQuestionIndex('available')
//                                 // setImage(null),
//                                 //     setInstruction(null)
//                                 // setQuestion('')
//                                 // setOptionA('')
//                                 // setOptionB('')
//                                 // setOptionC('')
//                                 // setOptionD('')
//                                 // setAnswer('')
//                                 //   setFirstName('')
//                                 //   setSurname('')
//                                 // setMiddleName('')
//                                 // setGender(null),
//                                 // setClass(null),
//                                 // setLevel(1)
//                               } else {
//                                 //   setProcessingStudentVerification(false)
//                                 Alert.alert("something went wrong", "Can't find previously saved data");
//                               }
//                             }).catch((error) => {
//                               // setProcessingStudentVerification(false)
//                               console.error(error);
//                               // setGettingCloudInfo(false)
//                               // setCloudQuestionIndex('available')
//                             })
//                           } catch (error) {
//                             //   setProcessingStudentVerification(false)
//                             alert(error.message)
//                           }
//                         }
//                         if (currentNumber == 50) {
//                           try {
//                             const dbRef = ref(getDatabase());
//                             //   setProcessingStudentVerification(true)
//                             get(child(dbRef, 'Examination/' + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                               // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
//                             )).then((snapshot) => {
//                               // setProcessingStudentVerification(false)

//                               if (snapshot.exists()) {
//                                 const data = snapshot.val()
//                                 console.log(data)
//                                 var size = Object.keys(data).length;
//                                 setcurrentNumber(size + 1);
//                                 setImage(null),
//                                   setInstruction(null)
//                                 //   setFirstName('')
//                                 //   setSurname('')
//                                 // setMiddleName('')
//                                 // setGender(null),
//                                 // setClass(null),
//                                 // setLevel(1)
//                               } else {
//                                 //   setProcessingStudentVerification(false)
//                                 alert("Invalid credentials");
//                               }
//                             }).catch((error) => {
//                               // setProcessingStudentVerification(false)
//                               console.error(error);
//                             })
//                           } catch (error) {
//                             //   setProcessingStudentVerification(false)
//                             alert(error.message)
//                           }
//                         }


//                       })
//                       .catch((error) => {
//                         console.log(error)
//                         alert("The write failed...")
//                         setUploading(false)
//                       }));
//     //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
//     //             setInstruction(null),
//     //             setQuestion(null),
//     //             setImage(null),
//     //             setOptionA(null),
//     //             setOptionB(null),
//     //             setOptionC(null),
//     //             setOptionD(null),
//     //             setAnswer(null)) :
//     //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



//     // } catch (error) {
//     //     // alert('something went wrong')
//     //     console.log(error)
//     //     alert(error.message)
//     // }


//   }

//   function BeginEdit(params) {
//     setQuestion(questions[currentNo - 1].question),
//     setAnswer(questions[currentNo - 1].Answer)
//   }



//   return (
//     <View style={{
//       height,
//       width,
//     }}>
//       <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
//       <View style={{
//         // height: 50,
//         width: "100%",
//         backgroundColor: "#d6491e",
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: "center",

//       }}>
//         <Text style={{ fontWeight: '700', color: 'white', fontSize: 20.5, textAlign: 'center', paddingHorizontal: 10 }}>Biology</Text>

//       </View>
//       <View style={{
//         width: '100%',
//         flexDirection: 'row',
//         borderBottomColor: 'lightgrey',
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottomWidth: 1,
//         paddingHorizontal: 20,
//         paddingVertical: 5,
//       }}>
//         <View //Question 1/50
//           style={{
//             // width: '50%',
//             // height: 40,
//             alignItems: 'center',


//             flexDirection: 'row'
//           }}>
//           <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
//           <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
//           <Text style={{ fontWeight: '500', fontSize: 18 }}>/{questions.length}</Text>
//         </View>
//         {/* Timer */}
//         <TouchableOpacity
//           onPress={() => { Edit == true ? UploadEdit() : setEdit(true), setAnswer(questions.answer) }}
//           style={{
//             height: 40,
//             width: 70,
//             alignItems: "center",
//             justifyContent: 'center',
//             borderColor: Edit == true ? 'blue' : 'green',
//             borderWidth: 2.5,
//             padding: 5,
//             backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
//             flexDirection: 'row',
//             borderRadius: 5,


//           }}>{Edit == true ? <Text style={{ color: "black" }}>Done</Text> : <Text style={{ color: "black" }}>Edit</Text>}
//         </TouchableOpacity>

//       </View>
//       <View style={{
//         height: "100%",
//         width: "100%",
//         // backgroundColor:"#ebeb",
//         flexDirection: 'row',
//         padding: 10,
//       }}>
//         <View style={{
//           width: width * 0.6,
//           // height: 200,
//           // backgroundColor:'#aabe',
//           padding: 5
//         }}>
//           {Edit == true ?
//             <TextInput
//               // underlineColorAndroid={'#d6491e'}
//               multiline
//               autoCorrect
//               cursorColor={'#d6491e'}
//               style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
//               defaultValue={questions[currentNo - 1].question}
//             /> :
//             <Text style={{
//               width: '100%',
//               fontSize: 18,
//               fontWeight: '400'
//             }}>
//               {questions[currentNo - 1].question}
//             </Text>}

//           {Edit == true ? <>
//             {questions[currentNo - 1].Options.map((data, index) => (
//               <View //Option A
//                 style={{
//                   width: "100%",
//                   maxHeight: 100,
//                   maxWidth: 1300,
//                   paddingHorizontal: 10,
//                   marginTop: 10,
//                   flexDirection: "row",
//                   // backgroundColor:"lightgrey",
//                   borderRadius: 10,
//                   borderColor: "lightgrey",
//                   borderWidth: 1,
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingLeft: 5,
//                 }}><RadioButton
//                 color='#d6491e'
//                 onPress={() => {
//                   setchecked(index),
//                     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                 }}
//                 value={index}
//                 status={checked === index ? 'checked' : 'unchecked'}

//               ></RadioButton>


// {/* <View
//                 multiline
//                 autoCorrect
//                 cursorColor={'#d6491e'}
//                 style={{
//                   borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
//                   alignItems: 'center'
//                 }}
//                 value={index}
//                 // onPress={() => {
//                 //   setchecked(index),
//                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                 // }}
//               >
//                 <RadioButton
//                   color='#d6491e'
//                   onPress={() => {
//                     setchecked(index),
//                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                   }}
//                   value={index}
//                   status={checked === index ? 'checked' : 'unchecked'}

//                 ></RadioButton><TextInput
//                   defaultValue={data}
//                 />

//               </View> */}







//                 <TextInput
//                   onChangeText={(text) => setOptionA(text)}
//                   activeUnderlineColor='black'
//                   underlineColor='lightgrey'
//                   selectionColor='black'
//                   placeholder='Option A'
//                   keyboardType='default'
//                   mode='flat'
//                   autoCorrect={true}
//                   multiline={true}
//                   defaultValue={data}
//                   style={{
//                     // height: "100%",
//                     width: "95%",
//                     // alignItems: "center",
//                     justifyContent: "center",
//                     paddingHorizontal: 10,
//                     backgroundColor: "transparent"
//                   }}></TextInput>
//               </View>


//             ))}</> :
//             <>{questions[currentNo - 1].Options.map((data, index) => (
//               <View
//                 value={index}
//                 // onPress={() => {
//                 //   setchecked(index),
//                 //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                 //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                 //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                 //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                 // }}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: 'center'
//                 }}>
//                 <RadioButton
//                   onPress={() => {
//                     setchecked(index),
//                       index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
//                         index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
//                           index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
//                             index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
//                   }}
//                   value={index}
//                   status={checked === index ? 'checked' : 'unchecked'}

//                 ></RadioButton>
//                 <Text>{data}</Text>

//               </View>

//             ))}</>}

//           <View style={{
//             width: "80%",
//             // backgroundColor:"red",
//             // height:50,
//             marginTop: 50,
//             flexDirection: 'row',
//             alignItems: "center",
//             justifyContent: 'space-evenly',


//           }}>{currentNo > 1 ?
//             <TouchableOpacity
//               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
//               style={{
//                 width: 100,
//                 height: 50,
//                 borderRadius: 10,
//                 borderLeftWidth: 1,
//                 borderLeftColor: 'black',
//                 backgroundColor: "#d7ccc8",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }}>
//               <Text>Back</Text>
//             </TouchableOpacity> : null}
//             {currentNo < questions.length ? <TouchableOpacity
//               onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
//               style={{
//                 width: 100,
//                 height: 50,
//                 borderRadius: 10,
//                 backgroundColor: "#d7ccc8",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }} >
//               <Text>Next</Text>
//             </TouchableOpacity> : null}


//           </View>
//         </View>
//         {/* buttons view */}
//         <View style={{
//           width: width * 0.38,
//           alignItems: "center",
//           paddingHorizontal: 5,
//           borderLeftWidth: 1,
//           borderLeftColor: 'lightgrey'
//           // backgroundColor:"#ebeb"
//         }}>
//           <ScrollView
//             style={{
//               // height:400,
//               width: width * 0.38,
//               backgroundColor: "#ebeb",
//               // flexDirection: "row",
//               // flexWrap: 'wrap',
//               // padding: 10,
//             }}>
//             <View style={{
//               // height:400,
//               // width: "95%",
//               // backgroundColor:"#ebeb",
//               flexDirection: "row",
//               flexWrap: 'wrap',
//               padding: 10,
//               paddingBottom: 100
//             }}>

//               {questions.map((data, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   ref={data}
//                   onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index + 1) }}
//                   style={{
//                     height: 28,
//                     width: 28,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     borderWidth: 2,
//                     borderColor: index + 1 == currentNo ? 'green' : 'grey',
//                     backgroundColor: StudentAnswers[index] == null ? "lightgrey" : StudentAnswers[index] > 0 ? "lightgrey" : '#d6491e',
//                     borderRadius: 5,
//                     marginHorizontal: 10,
//                     marginVertical: 5
//                   }}>
//                   <Text style={{
//                     color: StudentAnswers[index] == null ? "black" : StudentAnswers[index] > 0 ? "black" : 'white',
//                     fontWeight: '500'
//                   }}>{index + 1}
//                   </Text>
//                 </TouchableOpacity>)
//               )}
//             </View>
//           </ScrollView>



//           <Text>{StudentAnswers.map((data, index) =>
//             <Text>{data}</Text>)}</Text>
//           {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
//           <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
//         </View>


//       </View>
//     </View>
//   )
// }


























import { View, Platform, Button, Text, ToastAndroid, useWindowDimensions, Alert, Image, TextInput, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
// import { RadioButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import { initializeApp } from "firebase/app"
// import { getApps, initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getDatabase, ref, get, update, child, set } from "firebase/database";
import { FirebaseApp } from 'firebase/app';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
// import { getDatabase } from "firebase/database";
//  import questions from './Component/questions';
import questions from '../Component/Assets/questions';
import ListOfSubjects from '../Component/ListOfSubjects';
import ListOfInstructions from '../Component/ListOfInstructions';


export default function Preview({
  setLevel, Password,
  setScenerio, setScore,
  // Questions, 
  selectedClass,
  selectedSubject,
  TermAccessible }) {
  const { height, width } = useWindowDimensions()
  // const [Class, setClass] = useState('')

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


  const [Surname, setSurname] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [RegistrationNumber, setRegistrationNumber] = useState('')
  const [Questions, setQuestions] = useState(null)
  // const [image, setImage] = useState('')
  const [Class, setClass] = useState('SS1')
  const [subject, setSubject] = useState('Biology')
  const [minute, setMinute] = useState(0)
  const [seconds, setSeconds] = useState(9)
  const [myanswer, setmyanswer] = useState([])
  const [PrintNow, setPrintNow] = useState(false)
  const [currentNo, setCurrentNo] = useState(1)
  const [checked, setchecked] = useState('first')
  const [Edit, setEdit] = useState(false)
  const [question, setQuestion] = useState('')
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [optionD, setOptionD] = useState('')
  const [image, setImage] = useState(null)
  const [instruction, setInstruction] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [answer, setAnswer] = useState('')
  const [connectionStatus, setConnectionStatus] = useState(false)
  //   const [score, setScore] = useState(0);
  //   const [Level, setLevel] = useState(3)
  const [Username, setUsername] = useState(null)
  const [ListOfExaminationSubject, setListOfExaminationSubject] = useState([])
  const [gettingQuestions, setGettingQuestions] = useState(false)
  const [selectedExaminationSubject, setSelectedExaminationSubject] = useState(null)
  const [StudentAnswers, setStudentAnswers] = useState([])
  const [Length, setLength] = useState(0)
  const [processingLogin, setProcessingLogin] = useState(false)
  const [start, setStart] = useState(true)
  const [html, sethtml] = useState(null)

  // For Timer
  // console.log(Questions[currentNo][2])

  useEffect(() => {
    NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
      // alert(connectionStatus)
      NetInfo.fetch().then((data) => console.log(data))
  }, [connectionStatus])

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
    if (Questions != null) {
      if (Questions[currentNo][2] == 'A') {
        setchecked(0)
      } else {
        if (Questions[currentNo][2] == 'B') {
          setchecked(1)
        } else {
          if (Questions[currentNo][2] == 'C') {
            setchecked(2)
          }
          else {
            if (Questions[currentNo][2] == 'D') {
              setchecked(3)
            }
            else { setchecked('z') }
          }
        }
      }
    }

  }, [currentNo])
  useEffect(() => {
    if (Questions != null) {
      if (Questions[currentNo][2] == 'A') {
        setchecked(0)
      } else {
        if (Questions[currentNo][2] == 'B') {
          setchecked(1)
        } else {
          if (Questions[currentNo][2] == 'C') {
            setchecked(2)
          }
          else {
            if (Questions[currentNo][2] == 'D') {
              setchecked(3)
            }
            else { setchecked('z') }
          }
        }
      }
    }

  }, [])


  function Editor(params) {
    if (Questions[currentNo][2] == 'A') {
      setchecked(0)
    } else {
      if (Questions[currentNo][2] == 'B') {
        setchecked(1)
      } else {
        if (Questions[currentNo][2] == 'C') {
          setchecked(2)
        }
        else {
          if (Questions[currentNo][2] == 'D') {
            setchecked(3)
          }
          else { setchecked('z') }
        }
      }
    }
    setEdit(true)
    setQuestion(Questions[currentNo][1])
    setOptionA(Questions[currentNo][4].Options[0])
    setOptionB(Questions[currentNo][4].Options[1])
    setOptionC(Questions[currentNo][4].Options[2])
    setOptionD(Questions[currentNo][4].Options[3])
    setImage(null)
    setAnswer(Questions[currentNo][2])
  }
  function UploadEdit(params) {
    Alert.alert(
      "Confirmation",
      `You're about to make changes to question ${currentNo}`,
      [
        {
          text: "cancel",
          // onPress: () => ProceedToTypeQuestions()
        },
        {
          text: "",
          // onPress: () => ProceedToTypeQuestions()
        },

        { text: "Confirm", onPress: () => UploadConfirmed() }
      ]
    )
  }

  function UploadConfirmed() {
    const db = getDatabase();
    // alert('Length')
    NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
      !questions.length ? Alert.alert("", "Enter question") :
        !optionA.length ? Alert.alert("", "Enter Option A") :
          !optionB.length ? Alert.alert("", "Enter Option B") :
            !optionC.length ? Alert.alert("", "Enter Option C") :
              !optionD.length ? Alert.alert("", "Enter Option D") :
                !answer.length ? Alert.alert("", "pick answer") :
                  connectionStatus == false ? Alert.alert("Connection problem", "You're not connected to the internet") : (

                    setUploading(true),

                    set(ref(db, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/` + currentNo),
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
                        setQuestions(null)
                        // setUploading(false)
                        if (currentNo < Length) {
                          try {

                            const dbRef = ref(getDatabase());
                            // setGettingCloudInfo(true)
                            //   setProcessingStudentVerification(true)
                            get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                              // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                            )).then((snapshot) => {
                              // setProcessingStudentVerification(false)
                              setQuestions(null)
                              if (snapshot.exists()) {
                                const data = snapshot.val()
                                setQuestions(data)
                                ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
                                setEdit(false)
                                setCurrentNo(currentNo + 1)
                                // setAnswer(Questions[currentNo][2])
                                var size = Object.keys(data).length;
                                setLength(size)
                                console.log(Length)
                                
                              } else {
                                //   setProcessingStudentVerification(false)
                                Alert.alert("something went wrong", "Can't find previously saved data");
                              }
                            }).catch((error) => {
                              // setProcessingStudentVerification(false)
                              console.error(error);
                              // setGettingCloudInfo(false)
                              // setCloudQuestionIndex('available')
                            })
                          } catch (error) {
                            //   setProcessingStudentVerification(false)
                            alert(error.message)
                          }
                        }
                        if (currentNo == Length) {
                          try {
                            const dbRef = ref(getDatabase());
                            // setGettingCloudInfo(true)
                            //   setProcessingStudentVerification(true)
                            get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                              // + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`
                            )).then((snapshot) => {
                              // setProcessingStudentVerification(false)

                              if (snapshot.exists()) {
                                setQuestions(null)
                                const data = snapshot.val()
                                setQuestions(data)
                                ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT);
                                setEdit(false)
                                // console.log("data",data)
                                var size = Object.keys(data).length;
                                // setcurrentNo(size + 1);
                                // setGettingCloudInfo(false)
                                // setCloudQuestionIndex('available')
                                // setImage(null),
                                //     setInstruction(null)
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
                                Alert.alert("something went wrong", "Can't find previously saved data");
                              }
                            }).catch((error) => {
                              // setProcessingStudentVerification(false)
                              console.error(error);
                              // setGettingCloudInfo(false)
                              // setCloudQuestionIndex('available')
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
    //         .then(currentNumber != 50 ? (setcurrentNumber(currentNumber + 1),
    //             setInstruction(null),
    //             setQuestion(null),
    //             setImage(null),
    //             setOptionA(null),
    //             setOptionB(null),
    //             setOptionC(null),
    //             setOptionD(null),
    //             setAnswer(null)) :
    //             currentNumber == 50 ? alert("congratulations", "You have successfully finished setting questions") : null)



    // } catch (error) {
    //     // alert('something went wrong')
    //     console.log(error)
    //     alert(error.message)
    // }


  } 
 const AnswerScheme = () => {
    let t = '';
    for (let i in Questions) {
      const question = Questions[i][1];
      const Option = Questions[i][4].Options
      const Answer = Questions[i][2]
      let g = ''
      for (let r in Answer) {
        // const question = Questions[i][1];
        const answer = Answer[r]
        g = g +
          `
          ${answer}
           `
      }
      t = t +
        ` <tc>
        <tc>
        <h1 style="font-size: 16; font-family: Helvetica Neue;  font-weight: normal;"> (${i}) ${g}</h1>
        </tc>
          
             
        </tc>`
    }

    return t;
  }
  const Questionaire = () => {
    let t = '';
    for (let i in Questions) {
      const question = Questions[i][1];
      const Option = Questions[i][4].Options
      const answer = Questions[i][2]
      let g = ''
      for (let r in Option) {
        // const question = Questions[i][1];
        const option = Option[r]
        g = g +
          `(${r == 0 ? 'A' : r == 1 ? 'B' : r == 2 ? 'C' : 'D'}) ${option}
           `
      }
      t = t +
        ` <tr>
        <tc>
        <h1 style="font-size: 16; font-family: Helvetica Neue;  font-weight: normal;"> (${i})  ${question}</h1>
        </tc>
          
          <h1 style="font-size: 16; font-family: Helvetica Neue;margin-left:30; font-weight: normal;">${g}</h1>
             
        </tr>`
    }

    return t;
  }

  const htmlQuestions = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    
      <h1 style="font-size: 22px; 
      width: 700px;
      
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;">
        Herald International Secondary School
      </h1>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
        Plot 15 Emmanuel Bassey Avenue, Uyo Akwa Ibom State.
      </h3>
      <h2 style="font-size: 18px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;>
      ${TermAccessible} Examination for _____/_____   Session
      </h2>
      <h3 style="font-size: 18px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Class: ${selectedClass}  Subject: ${selectedSubject}
        
      </h3>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Time: 1 hour 30 minutes
      </h3>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Instruction: Answer ALL questions
      </h3>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Part A
      </h3>
      </body>
        <body style="text-align: left;">
       <table>
          ${Questionaire()}
          
               
       </table>
    </body>
    


</>

        
    </body>
  </html>
  `
  const htmlAnswer = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    
      <h1 style="font-size: 22px; 
      width: 700px;
      
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;">
        Herald International Secondary School
      </h1>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
        Plot 15 Emmanuel Bassey Avenue, Uyo Akwa Ibom State.
      </h3>
      <h2 style="font-size: 18px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue; font-weight: bold; style="text-align: center;>
      ${TermAccessible} Answer Scheme for _____/_____   Session
      </h2>
      <h3 style="font-size: 18px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Class: ${selectedClass}  Subject: ${selectedSubject}
        
      </h3>
      <h3 style="font-size: 16px; 
      width: 700px;
      justify-content:'center';align-items:'center';display: flex;
      align-items: center;justify-content: center; font-family: Helvetica Neue;  style="text-align: center;>
      Part A
      </h3>
      </body>
        <body style="text-align: left;">
       <table>
          ${AnswerScheme()}
          
               
       </table>
    </body>
    


</>

        
    </body>
  </html>
  `
  // console.log(Questions.map((data, index) => (data[2])))
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const printQuestions = async () => {
    sethtml(htmlQuestions);
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    }).then(setPrintNow(false));
  };
  const printAnswerScheme = async () => {
    sethtml(htmlAnswer);
    
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    }).then(setPrintNow(false));
  };

  const printAnswerToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ htmlAnswer });
    ToastAndroid.show(`File has been saved to: ${uri}`, ToastAndroid.SHORT);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };
  const printQuestionsToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    ToastAndroid.show(`File has been saved to: ${uri}`, ToastAndroid.SHORT);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    ToastAndroid.show(`File has been saved to: ${uri}`, ToastAndroid.SHORT);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  // useEffect(() => {
  //   if (minute == -1) {
  //     setLevel(5),
  //     finish(),
  //     setScenerio("Time Up")
  //   }

  //   // return () => {
  //   //   second
  //   // }
  // }, [seconds])


  // Marking system
  // useEffect(() => {
  //   StudentAnswers[currentNo - 1] === Questions[currentNo][2] ?
  //     myanswer[currentNo - 1] = 1 :
  //     myanswer[currentNo - 1] = 0;
  // }, [checked])

  // useEffect(() => {
  //   if (StudentAnswers[currentNo - 1] == 'A') {
  //     setchecked(0)
  //   } else {
  //     if (StudentAnswers[currentNo - 1] == 'B') {
  //       setchecked(1)
  //     } else {
  //       if (StudentAnswers[currentNo - 1] == 'C') {
  //         setchecked(2)
  //       }
  //       else {
  //         if (StudentAnswers[currentNo - 1] == 'D') {
  //           setchecked(3)
  //         }
  //         else { setchecked('z') }
  //       }
  //     }
  //   }
  // }, [currentNo])

  useEffect(() => {
    proceedToGetQuestions()
  }, [])


  // function finish() {

  // console.log(Questions[currentNo][4].Options[1])
  // }
  function finish() {

    try {
      const br = []
      myanswer.filter((data, i, a) => {
        if (data > 0) {
          br.push(data)
        }
      })
      let score = br.length
      setScore(br.length), setLevel(5)
      const db = getDatabase();
      update(ref(db, 'ListOfStudents/' + `${Password}/` + `${TermAccessible}/` + selectedSubject), {
        selectedSubject: score
        // Subjects_Handled: []

      }).then(ToastAndroid.show("Data saved successfully!", ToastAndroid.SHORT));
    } catch (error) {
      alert(error)
    }
  }

  function proceedToGetQuestions(params) {
    try {
      const dbRef = ref(getDatabase());
      setGettingQuestions(true)
      get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`)).then((snapshot) => {

        if (snapshot.exists()) {
          setGettingQuestions(false)
          // setLevel(3)
          const data = snapshot.val()
          var size = Object.keys(data).length
          setQuestions(data);
          setLength(size)
          // console.log('data', data)

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



  return (
    <ScrollView style={{
      height,
      width,
    }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} animated={true} />
      <View //Select Subject
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "white",
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
          
          <TouchableOpacity onPress={() => setLevel(2)}>
            <MaterialCommunityIcons
              style={{ padding: 5 }}
              name="arrow-left" color='black' size={20} /></TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{selectedSubject} for {selectedClass}</Text>
      </View>
      {Questions != null ?
        <View style={{height:height}}>
       
          <View style={{
            width: '100%',
            flexDirection: 'row',
            backgroundColor:"#f5f5f5",
            borderBottomColor: 'grey',
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 5,
            // 
          }}>
            <View //Question 1/50
              style={{
                // width: '50%',
                // height: 40,
                alignItems: 'center',
                // backgroundColor:"red",

                flexDirection: 'row'
              }}>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>Question  </Text>
              <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo}</Text>
              <Text style={{ fontWeight: '500', fontSize: 18 }}>/{Length}</Text>
            </View>

            {/* Timer */}
            <TouchableOpacity
              onPress={() => { Edit == true ? UploadEdit() : Editor() }}
              style={{
                height: 40,
                width: 70,
                alignItems: "center",
                justifyContent: 'center',
                borderColor: Edit == true ? 'blue' : 'green',
                borderWidth: 2.5,
                padding: 5,
                backgroundColor: Edit == true ? "#bbdefb" : "#c8e6c9",
                flexDirection: 'row',
                borderRadius: 5,


              }}>
              {Edit == true ?
                <Text
                  style={{ color: "black" }}>Done</Text>
                :
                <Text style={{ color: "black" }}>Edit</Text>
              }
            </TouchableOpacity>

          </View>
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor:"#f5f5f5",
              flexDirection: 'row',
              padding: 10,
            }}>
            <View //Show questions
              style={{
                width: width * 0.6,
                // height: 200,
                // backgroundColor:'#aabe',
                padding: 5
              }}>
              {Edit == true ?
                <TextInput
                  onChangeText={(text) => setQuestion(text)}
                  // underlineColorAndroid={'#d6491e'}
                  multiline
                  autoCorrect
                  cursorColor={'#d6491e'}
                  style={{ borderBottomColor: '#d6491e', borderBottomWidth: 1, }}
                  defaultValue={Questions[currentNo][1]}
                /> :
                <Text style={{
                  width: '100%',
                  fontSize: 18,
                  fontWeight: '400'
                }}>
                  {Questions[currentNo][1]}
                </Text>
              }

              {Edit == true ?
                <>

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
                      // justifyContent: "center",
                      paddingLeft: 5,
                    }}>

                    <View
                      multiline
                      autoCorrect
                      cursorColor={'#d6491e'}
                      style={{
                        borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                        alignItems: 'center'
                      }}
                      value={1}
                    // onPress={() => {
                    //   setchecked(Questions[currentNo][2]),
                    //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                    //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                    //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                    //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                    // }}
                    >
                      <RadioButton
                        color='#d6491e'
                        onPress={() => {
                          setchecked(0),
                            setAnswer('A')
                          // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                          //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                          //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                          //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                        }}
                        value={1}
                        status={
                          checked === 0 ? 'checked' :
                            answer === 'A' ? 'checked' : 'unchecked'}

                      />
                      <TextInput
                        onChangeText={(text) => setOptionA(text)}
                        style={{ width: '80%' }}
                        defaultValue={Questions[currentNo][4].Options[0]}
                      />

                    </View>



                  </View>
                  <View //Option B
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
                      // justifyContent: "center",
                      paddingLeft: 5,
                    }}>

                    <View
                      multiline
                      autoCorrect
                      cursorColor={'#d6491e'}
                      style={{
                        borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                        alignItems: 'center'
                      }}
                      value={2}
                    // onPress={() => {
                    //   setchecked(1),
                    //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                    //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                    //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                    //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                    // }}
                    >
                      <RadioButton
                        color='#d6491e'
                        onPress={() => {
                          setchecked(1),
                            setAnswer('B')
                          // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                          //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                          //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                          //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                        }}
                        value={2}
                        status={checked === 1 ? 'checked'
                          :
                          answer === 'B' ? 'checked' : 'unchecked'}

                      />
                      <TextInput
                        onChangeText={(text) => setOptionB(text)}
                        style={{ width: '80%' }}
                        defaultValue={Questions[currentNo][4].Options[1]}
                      />

                    </View>



                  </View>
                  <View //Option C
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
                      // justifyContent: "center",
                      paddingLeft: 5,
                    }}>

                    <View
                      multiline
                      autoCorrect
                      cursorColor={'#d6491e'}
                      style={{
                        borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                        alignItems: 'center'
                      }}
                      value={3}
                    // onPress={() => {
                    //   setchecked(3),
                    //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                    //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                    //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                    //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                    // }}
                    >
                      <RadioButton
                        color='#d6491e'
                        onPress={() => {
                          setchecked(2),
                            setAnswer('C')
                          // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                          //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                          //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                          //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                        }}
                        value={2}
                        status={checked === 2 ? 'checked' :
                          answer === 'C' ? 'checked' : 'unchecked'}

                      />
                      <TextInput
                        onChangeText={(text) => setOptionC(text)}
                        style={{ width: '80%' }}
                        defaultValue={Questions[currentNo][4].Options[2]}
                      />

                    </View>



                  </View>
                  <View //Option D
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
                      // justifyContent: "center",
                      paddingLeft: 5,
                    }}>

                    <View
                      multiline
                      autoCorrect
                      cursorColor={'#d6491e'}
                      style={{
                        borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                        alignItems: 'center'
                      }}
                      value={4}
                    // onPress={() => {
                    //   setchecked(index),
                    //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                    //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                    //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                    //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                    // }}
                    >
                      <RadioButton
                        color='#d6491e'
                        onPress={() => {
                          setchecked(3),
                            setAnswer('D')
                          // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                          //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                          //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                          //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                        }}
                        value={3}
                        status={checked === 3 ? 'checked' :
                          answer === 'D' ? 'checked' : 'unchecked'}

                      />
                      <TextInput
                        onChangeText={(text) => setOptionD(text)}
                        style={{ width: '80%' }}
                        defaultValue={Questions[currentNo][4].Options[3]}
                      />

                    </View>



                  </View>

                </>
                :
                <>
                  {/* <View //Option A
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
                        // justifyContent: "center",
                        paddingLeft: 5,
                      }}>

                      <View
                        multiline
                        autoCorrect
                        cursorColor={'#d6491e'}
                        style={{
                          borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                          alignItems: 'center'
                        }}
                        value={1}
                      // onPress={() => {
                      //   setchecked(Questions[currentNo][2]),
                      //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                      //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                      //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                      //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                      // }}
                      >
                        <RadioButton
                          color='#d6491e'
                          onPress={() => {
                            setchecked(0),
                            setAnswer('A')
                              // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                              //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                              //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                              //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                          }}
                          value={1}
                          status={
                            checked === 0 ? 'checked' : 
                          answer==='A'?'checked': 'unchecked'}

                        />
                        <TextInput
                        onChangeText={(text) => setOptionA(text)}
                          style={{ width: '80%' }}
                          defaultValue={Questions[currentNo][4].Options[0]}
                        />

                      </View>



                    </View> */}
                  {/* <View //Option B
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
                        // justifyContent: "center",
                        paddingLeft: 5,
                      }}>

                      <View
                        multiline
                        autoCorrect
                        cursorColor={'#d6491e'}
                        style={{
                          borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                          alignItems: 'center'
                        }}
                        value={2}
                      // onPress={() => {
                      //   setchecked(1),
                      //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                      //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                      //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                      //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                      // }}
                      >
                        <RadioButton
                          color='#d6491e'
                          onPress={() => {
                            setchecked(1),
                            setAnswer('B')
                              // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                              //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                              //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                              //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                          }}
                          value={2}
                          status={checked === 1 ? 'checked'
                           :
                           answer==='B'?'checked': 'unchecked'}

                        />
                        <TextInput
                        onChangeText={(text) => setOptionB(text)}
                          style={{ width: '80%' }}
                          defaultValue={Questions[currentNo][4].Options[1]}
                        />

                      </View>



                    </View> */}
                  {/* <View //Option C
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
                        // justifyContent: "center",
                        paddingLeft: 5,
                      }}>

                      <View
                        multiline
                        autoCorrect
                        cursorColor={'#d6491e'}
                        style={{
                          borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                          alignItems: 'center'
                        }}
                        value={3}
                      // onPress={() => {
                      //   setchecked(3),
                      //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                      //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                      //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                      //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                      // }}
                      >
                        <RadioButton
                          color='#d6491e'
                          onPress={() => {
                            setchecked(2),
                            setAnswer('C')
                              // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                              //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                              //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                              //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                          }}
                          value={2}
                          status={checked === 2 ? 'checked' :
                          answer==='C'?'checked': 'unchecked'}

                        />
                        <TextInput
                        onChangeText={(text) => setOptionC(text)}
                          style={{ width: '80%' }}
                          defaultValue={Questions[currentNo][4].Options[2]}
                        />

                      </View>



                    </View> */}
                  {/* <View //Option D
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
                        // justifyContent: "center",
                        paddingLeft: 5,
                      }}>

                      <View
                        multiline
                        autoCorrect
                        cursorColor={'#d6491e'}
                        style={{
                          borderBottomColor: '#d6491e', borderBottomWidth: 1, flexDirection: "row",
                          alignItems: 'center'
                        }}
                        value={4}
                      // onPress={() => {
                      //   setchecked(index),
                      //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                      //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                      //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                      //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                      // }}
                      >
                        <RadioButton
                          color='#d6491e'
                          onPress={() => {
                            setchecked(3),
                            setAnswer('D')
                              // index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                              //   index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                              //     index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                              //       index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                          }}
                          value={3}
                          status={checked === 3 ? 'checked' :
                          answer==='D'?'checked': 'unchecked'}

                        />
                        <TextInput
                        onChangeText={(text) => setOptionD(text)}
                          style={{ width: '80%' }}
                          defaultValue={Questions[currentNo][4].Options[3]}
                        />

                      </View>



                    </View>  */}
                  {Questions[currentNo][4].Options.map((data, index) => (
                    <View
                      value={index}
                      onPress={() => {
                        setchecked(index),
                          index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                            index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                              index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                                index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                      }}
                      style={{
                        flexDirection: "row",
                        alignItems: 'center'
                      }}>
                      <RadioButton
                        // onPress={() => {
                        //   setchecked(index),
                        //     index === 0 ? StudentAnswers[currentNo - 1] = 'A' :
                        //       index === 1 ? StudentAnswers[currentNo - 1] = 'B' :
                        //         index === 2 ? StudentAnswers[currentNo - 1] = 'C' :
                        //           index === 3 ? StudentAnswers[currentNo - 1] = 'D' : null
                        // }}
                        color='#d6491e'
                        value={index}
                        status={index === checked ? 'checked' : 'unchecked'}

                      ></RadioButton><Text>{data}</Text>

                    </View>

                  ))}
                  <View //next and back buttons
                    style={{
                      width: "80%",
                      // backgroundColor:"red",
                      // height:50,
                      marginTop: 50,
                      flexDirection: 'row',
                      alignItems: "center",
                      justifyContent: 'space-evenly',


                    }}>{currentNo > 1 ?
                      <TouchableOpacity
                        onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo - 1) }}
                        style={{
                          width: 70,
                          height: 50,
                          borderRadius: 10,
                          // borderLeftWidth: 1,
                          // borderLeftColor: 'black',
                          backgroundColor: "#d7ccc8",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                        <Text>Back</Text>
                      </TouchableOpacity> : null}
                    {currentNo < Length ? <TouchableOpacity
                      onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(currentNo + 1) }}
                      style={{
                        width: 70,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: "#d7ccc8",
                        alignItems: "center",
                        justifyContent: "center"
                      }} >
                      <Text>Next</Text>
                    </TouchableOpacity> : null}


                  </View>
                 
                </>


              }</View>
            <View style={{
              width: width * 0.38,
              alignItems: "center",
              paddingHorizontal: 5,
              borderLeftWidth: 1,
              borderLeftColor: 'lightgrey'
              // backgroundColor:"#ebeb"
            }}>
              <ScrollView
                style={{
                  // height:400,
                  width: width * 0.38,
                  // backgroundColor: "#ebeb",
                  // flexDirection: "row",
                  // flexWrap: 'wrap',
                  // padding: 10,
                }}>
                <View style={{
                  // height:400,
                  // width: "95%",
                  // backgroundColor:"#ebeb",
                  flexDirection: "row",
                  flexWrap: 'wrap',
                  padding: 10,
                  paddingBottom: 100
                }}>

                  {Questions.map((data, index) => (
                    <TouchableOpacity
                      key={index}
                      ref={data}
                      onPress={() => { Edit == true ? UploadEdit() : setCurrentNo(index) }}
                      style={{
                        height: 28,
                        width: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 2,
                        borderColor: index == currentNo ? '#d6491e' : 'grey',
                        backgroundColor: index == currentNo ? '#d6491e' : 'lightgrey',
                        borderRadius: 5,
                        marginHorizontal: 10,
                        marginVertical: 5
                      }}>
                      <Text style={{
                        color: index == currentNo ? 'white' : 'black',
                        fontWeight: '500'
                      }}>{index}
                      </Text>
                    </TouchableOpacity>)
                  )}
                </View>
              </ScrollView>



              <Text>{StudentAnswers.map((data, index) =>
                <Text>{data}</Text>)}</Text>
              {/* <TouchableOpacity onPress={() => StudentAnswers[currentNo - 1] = 'a'}><Text>Tryout</Text></TouchableOpacity> */}
              <TouchableOpacity onPress={finish}><Text>Tryout</Text></TouchableOpacity>
            </View>



          </View>
          {PrintNow==false?
          <View style={{  width: '100%', flexDirection: 'row',alignItems:'center',justifyContent:'center', position: 'absolute', marginTop: (height /2)+ (height/4), }}>
          <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#d6491e',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={()=>setPrintNow(true)} >

             <MaterialCommunityIcons
               style={{ padding: 5 }}
               name="printer" color='white' size={20} />
           </TouchableOpacity>

           <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#d6491e',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={printToFile} >
             <MaterialCommunityIcons
               style={{ padding: 5 }}
               name="share" color='white' size={20} />
           </TouchableOpacity>
           {/* {Platform.OS === 'ios' && (
       <>
         <View style={{width:'100%'}}/>
         <Button title="Select printer" onPress={selectPrinter} />
         <View style={{width:'100%'}} />
         {selectedPrinter ? (
           <Text style={{width:'100%'}}>{`Selected printer: ${selectedPrinter.name}`}</Text>
         ) : undefined}
       </>
     )} */}
         </View>:
         <View style={{  width: '100%', flexDirection: 'row',alignItems:'center',justifyContent:'center', position: 'absolute', marginTop: (height /2)+ (height/4), }}>
         <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#00751c',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={printQuestions} >

            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Q</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#00751c',margin:5, alignItems: 'center', justifyContent: 'center', borderRadius: 25, }} onPress={printAnswerScheme} >
          <Text style={{fontSize:20,fontWeight:'bold', color:'white'}}>A</Text>
          </TouchableOpacity>
          {/* {Platform.OS === 'ios' && (
      <>
        <View style={{width:'100%'}}/>
        <Button title="Select printer" onPress={selectPrinter} />
        <View style={{width:'100%'}} />
        {selectedPrinter ? (
          <Text style={{width:'100%'}}>{`Selected printer: ${selectedPrinter.name}`}</Text>
        ) : undefined}
      </>
    )} */}
        </View>} 
          
        </View> :
        <View style={{
          height,
          width,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <ActivityIndicator color={'#d6491e'} size={50} />
          <TouchableOpacity
            onPress={proceedToGetQuestions}>
            <Text style={{ marginTop: 30 }}>Retry</Text>
          </TouchableOpacity>
        </View>
      }


    </ScrollView>)
}