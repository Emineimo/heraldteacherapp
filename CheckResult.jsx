import { View, StatusBar, Image, ToastAndroid, Alert, Text, useWindowDimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListsOfClasses from '../Component/ListsOfClasses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, set, get, child, onValue, update } from 'firebase/database';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import studentResult from '../Component/StudentResult';
import ListOfSubjects from '../Component/ListOfSubjects'
export default function CheckResult({ myRegNo }) {
    const { height, width } = useWindowDimensions();
    const [selectedClass, setSelectedClass] = useState(null)
    const [selectedSubject, setSelectedSubject] = useState('')
    const [studentList, setstudentList] = useState([])
    const [step, setStep] = useState(1)
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [TeachersListOfSubjects, setTeachersListOfSubjects] = useState([])
    const [processingTeachersSubject, setprocessingTeachersSubject] = useState(false)
    const [processingStudentResult, setProcessingStudentResult] = useState(false)
    const [RegNo, setRegNo] = useState(null)
    const [scanning, setScanning] = useState(false)
    const [MiddleName, setMiddleName] = useState(null)
    const [TermAccessible, setTermAccessible] = useState('FirstTerm')
    const [currentNo, setcurrentNo] = useState(0)
    const [data, setData] = useState(null)
    const [Length, setLength] = useState(null)
    const [firstName, setfirstName] = useState(null)
    const [Surname, setSurname] = useState(null)
    const [Score, setScore] = useState(null)
    const [image, setimage] = useState('')
    const [Class, setClass] = useState(null)
    const [studentData, setStudentData] = useState(null)
    
    
    const [filtered, setfiltered] = useState([])

    // console.log(data.selectedSubject)

    // const getObjectData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@myRegNo')
    //         return jsonValue != null ? (setRegNo(JSON.parse(jsonValue))) : Alert.alert('Memory error', "Please log out and log in again");
    //     } catch (e) {

    //         // error reading value
    //     }
    // }

    useEffect(() => {
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))
        // alert(connectionStatus)
        // NetInfo.fetch().then((data) => console.log(data)
        // )
    }, [connectionStatus])

    useEffect(() => {
        if (selectedClass != null) {
            if (selectedSubject != null) {
                studentScore()
            }
        }

    }, [currentNo])

    function ValidateChecker(params) {
        try {
            const dbRef = ref(getDatabase());
            NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

            if (connectionStatus == true) {
                setScanning(true)
                get(child(dbRef, 'SubjectAllocation/' + `${selectedSubject}/`))
                    .then((snapshot) => {
                        // setProcessingStaffVerification(false)
                        if (snapshot.exists()) {
                            const data = snapshot.val()
                            console.log(data.RegNoOfSelectedStaff, 'RegNo', myRegNo)
                            var size = Object.keys(data).length;
                            // alert(size)
                            // setcurrentNumber(size + 1)
                            // console.log(data)
                            // setLevel(3)
                            data.RegNoOfSelectedStaff.includes(myRegNo) ? (ToastAndroid.show("Access granted!", ToastAndroid.SHORT), Scan())
                                : ToastAndroid.show("Access denied!", ToastAndroid.SHORT)

                        }
                        // if (snapshot.val()) {

                        // }
                        if (!snapshot.exists()) {
                            const data = snapshot.val()
                            ToastAndroid.show("No allocations for the selected subject!", ToastAndroid.LONG)
                            console.log('no data')
                            // setcurrentNumber(1)
                            // setLevel(3)
                            setScanning(false)
                        }
                        // setLevel(3)
                    })
                    .catch((e) => console.log(e),
                        setScanning(false))
            } else {
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
    function studentScore(params) {
        try {
            const dbRef = ref(getDatabase());
            setScanning(true)
            get(child(dbRef, 'ListOfStudents/')).then((snapshot) => {
                setScanning(false)
                if (snapshot.exists()) {
                    setfiltered([])
                    // setcurrentNo(0)
                    const List = snapshot.val()
                    List.map((data, index) => {
                        data.Class == selectedClass ? filtered.push(data.RegNo) : null
                    }).then(GoFetchData(), setLength(filtered.length), console.log("filter", filtered.length))

                }

            })
                .catch((error) => {
                    setScanning(false)
                    console.error(error);
                })
        } catch (err) {

        }

    }

    function GoFetchData(params) {
        setScanning(true)
        try {
            console.log(filtered.length)
            const dbRef = ref(getDatabase());
            setScanning(true)
            get(child(dbRef, 'ListOfStudents/' + `${filtered[currentNo]}/`)).then((snapshot) => {

                if (snapshot.exists()) {
                    setScanning(false)
                    const val = snapshot.val()
                    setStudentData(val)
                    setScore(snapshot.child(TermAccessible).child(selectedSubject).child('subject').val())
                    
                    setScanning(false)
                    setStep(3)
                } else {
                    setScanning(false)
                    ToastAndroid.show("Result not available", ToastAndroid.SHORT)
                 
                }
            }).catch((error) => {
                setScanning(false)
                console.error(error);
            })
        } catch (error) {
            setScanning(false)
            alert('error.message')
        }
    }

    function ProceedToResult(params) {
        if (connectionStatus == true) {
            setScanning(true)
            try {
                const dbRef = ref(getDatabase());
                setScanning(true)
                get(child(dbRef, 'ListOfStudents/')).then((snapshot) => {
                    setScanning(false)
                    if (snapshot.exists()) {

                        const data = snapshot.val()
                        // console.log(data)
                        setstudentList(data)
                        studentScore()
                    } else {
                        setScanning(false)
                        alert("Unable to get result");
                    }
                }).catch((error) => {
                    setScanning(false)
                    console.error(error);
                })
            } catch (error) {
                setScanning(false)
                alert('error.message')
            }
        } else {
            if (connectionStatus == false) {
                Alert.alert("Connection problem", "You're not connected to the internet")
            }
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
                    ToastAndroid.show(`${data.TermAccessible} available!`, ToastAndroid.LONG)
                    ProceedToResult()
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
            console.log(error.message)
        }
    }

    return (<>
        {step == 1 && //select class
            <ScrollView style={{
                height,
                width,
                // backgroundColor:"#d6491e"
            }}>
                <View //anime view
                    style={{
                        height: 230, width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}>
                    <Image
                        source={require('C:/Users/EMINEIMO/HeraldCBE/HeraldCBTEmineimo/Component/Assets/Analytics.gif')}
                        style={{
                            height: 220,
                            width: 280,
                        }} />
                </View>
                <View style={{
                    // height: '60%',
                    width: "100%"
                }}>
                    <View //select class
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 50,
                            padding: 10,
                            width: "100%"
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Select Class</Text>
                    </View>
                    <View style={{
                        // height: '65%',
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{
                                justifyContent: 'space-evenly',
                                flexWrap: 'wrap',
                                alignItems: "center",
                                flexDirection: "row",
                                // backgroundColor:"red"
                            }}>{ListsOfClasses.map((data, index) => (
                                <TouchableOpacity
                                key={index}
                                    onPress={() => setSelectedClass(data)}
                                    style={{
                                        width: 130,
                                        height: 80,
                                        backgroundColor: selectedClass == data ? '#db843f' : null,
                                        borderRadius: 10, alignItems: "center",
                                        justifyContent: "center", borderWidth: 1,
                                        borderColor: 'lightgrey',
                                        margin: 5
                                    }}>
                                    <Text style={{ color: selectedClass == data ? 'white' : 'black', }}>{data}</Text>
                                </TouchableOpacity>
                            ))}</View>
                        </ScrollView>
                    </View>
                    <View style={{
                        width: "100%",
                        height: 80,
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => selectedClass == null ? Alert.alert("", "Please select class") : (setStep(2))}
                            style={{
                                height: 50,
                                width: 300,
                                alignItems: "center",
                                justifyContent: 'center',
                                borderRadius: 10,

                                backgroundColor: selectedClass == null ? '#eeeeee' : '#00a424',
                            }}>
                            <Text style={{ color: selectedClass == null ? "black" : 'white', }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: "100%",
                        height: 200,
                        alignItems: "center",
                        justifyContent: 'center'
                    }}></View>
                </View>

            </ScrollView>}
        {step == 2 && //select subject 
            <View style={{ height, width, position: 'absolute' }}>

                <View //Select Subject
                    style={{
                        height: 50,
                        width: "100%",
                        backgroundColor:'#f44f19',
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <View style={{ width: '100%', backgroundColor: "#f44f19", justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
                        <TouchableOpacity onPress={() => setStep(1)}>
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
                                    onPress={() => selectedSubject == data ? setSelectedSubject(null):setSelectedSubject(data)}
                                    style={{
                                        // padding:10,minWidth:120,
                                        padding: 10, minWidth: 120,
                                        height: 50,
                                        backgroundColor: selectedSubject == data ? '#db843f' : null,
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
                        onPress={() => selectedSubject.toString().length <2 ? Alert.alert("", "Please select subject") : ValidateChecker()}
                        style={{
                            position: 'absolute',
                            height: 45,
                            marginVertical: 10,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            width: 220, backgroundColor: selectedSubject.toString().length <2 ? "#f5f5f5" : '#00751c'
                        }}>{scanning == true ? <ActivityIndicator color={'white'} /> :
                            <Text style={{ color: selectedSubject.toString().length <2 ? 'black' : 'white', }}>Proceed</Text>
                        }

                    </TouchableOpacity>
                </View>




            </View>}
        {step == 3 &&
            // <View style={{ height, width, position:'absolute' }}>
            // <TouchableOpacity onPress={studentScore}><Text>dfghjhgfcxcvbnm</Text></TouchableOpacity></View>
            <View style={{ height, width, position: 'absolute' }}>
                <ScrollView
                style={{
                    height,
                    width,
                }}>
                <StatusBar backgroundColor={'#d6491e'} barStyle={'light-content'} animated={true} />
                <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, backgroundColor: "white" }}>
                    <View
                        style={{ width, height: 50, position: 'absolute', textAlign: "center", backgroundColor: "#d6491e", justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 18, fontWeight: "600" }}>{selectedSubject} Result for {selectedClass}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setStep(2)}>
                        <MaterialCommunityIcons
                            style={{ padding: 5 }}
                            name="arrow-left" color='white' size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: height - 50,
                    width,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#eeeeee"
                }}>
                    <View
                        style={{
                            maxWidth: 300,
                            minWidth: 300,
                            paddingVertical: 10,
                            minHeight: height * .65,
                            alignItems: "center",
                            // justifyContent: "center",
                            borderRadius: 10,
                            elevation: 5,
                            backgroundColor: "white"
                        }}>
                        <View //Question 1/50
                            style={{
                                // width: '50%',
                                // height: 40,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <Text style={{ fontWeight: '600', fontSize: 28 }}>{currentNo + 1}</Text>
                            <Text style={{ fontWeight: '100', fontSize: 38, color: 'grey' }}>/</Text>
                            <Text style={{ fontWeight: '500', textAlignVertical: 'top', fontSize: 18, color: 'grey' }}>{Length}</Text>
                        </View>
                        <>{scanning== true ? <ActivityIndicator color={'#d6491e'} size={180}/>
                        : <View
                        style={{
                            alignItems: "center",
                            paddingBottom: 10,
                            borderBottomWidth: 1, borderBottomColor: 'lightgrey',
                        }}>
                        <View style={{
                            height: 120, width: 120, alignItems: "center",
                            justifyContent: "center", borderRadius: 100, borderWidth: 1.5, borderColor: 'lightgrey', marginTop: 20,
                        }}>
                            <Image source={{ uri: image }}
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }} />
                        </View>

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center', width: '100%', marginTop: 10,
                        }}>
                        </View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', width: 300,
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>{studentData.RegNo.toString().length == 1 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>00{studentData.RegNo.toString()}</Text> :
                                studentData.RegNo.toString().length == 2 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>0{studentData.RegNo.toString()}</Text> :
                                    studentData.RegNo.toString().length > 2 ? <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>{studentData.RegNo.toString()}</Text> :
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: "center" }}>00{studentData.RegNo.toString()}</Text>}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', width: 300,
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: "center" }}>{studentData.Surname}, {studentData.FirstName} {studentData.MiddleName}</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center', width: 300,
                        }}>
                            <Text style={{ fontSize: 14, color: 'grey', fontWeight: '400', textAlign: "center" }}>of</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600', textAlign: "center" }}>{studentData.Class} Class</Text>
                        </View>

                    </View>}</>
                        

                    <>{scanning== true ? null
                        :   <View
                            style={{
                                // height: '40%',
                                width: '100%',
                                alignItems: "center",
                                justifyContent: "center",
                                // padding: 20,
                                // backgroundColor: "#e0e0e0",
                                marginBottom: 10,

                            }}>
                            <View style={{
                                width: "100%",
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                            }}><Text>{TermAccessible} Score: </Text>
                                {Score != null ?
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{Score}</Text> :
                                    <Text>Result not found</Text>}

                            </View>
                            <View style={{
                                // height: '25%',
                                marginTop: 20,
                                width: 250,
                                alignItems: 'center',
                                justifyContent: "space-evenly",
                                flexDirection: 'row',
                                // backgroundColor:"red"
                            }}>
                                {currentNo+1 > 1 ?
                                    <TouchableOpacity
                                        onPress={() => setcurrentNo(currentNo - 1)}
                                        // onPress={() => {setClass(null),
                                        //   setSurname(null),
                                        //   setFirstName(null),
                                        //   setMiddleName(null),
                                        //   setImage(""),
                                        //   setRegistrationNumber(null),
                                        //   setUsername(null),
                                        //   setstudentData.RegNo.toString()(null),
                                        //   setStage(1)}}
                                        style={{
                                            height: 40,
                                            width: 80,
                                            backgroundColor: "lightgrey",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            // width: 200,
                                            borderRadius: 10,
                                            // backgroundColor: subject == null ? "lightgrey" : "#5d4037"
                                        }}>{scanning==true?<ActivityIndicator color={'white'}/> : 
                                        <Text
                                        //   style={{ color: subject == null ? "black" : "white" }}
                                        >Previous</Text>}</TouchableOpacity> : null}
                                {currentNo+1<Length  ? <TouchableOpacity
                                    onPress={() => { setcurrentNo(currentNo + 1), GoFetchData() }}
                                    // onPress={() => {setClass(null),
                                    //   setSurname(null),
                                    //   setFirstName(null),
                                    //   setMiddleName(null),
                                    //   setImage(""),
                                    //   setRegistrationNumber(null),
                                    //   setUsername(null),
                                    //   setstudentData.RegNo.toString()(null),
                                    //   setStage(1)}}
                                    style={{
                                        height: 40,
                                        width: 80,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // width: 200,
                                        borderRadius: 10,
                                        backgroundColor: "lightgrey"
                                        // backgroundColor: subject == null ? "lightgrey" : "#5d4037"
                                    }}>{scanning==true?<ActivityIndicator color={'#d6491e'}/> : <Text style={{ color: "black", }}>Next</Text>}</TouchableOpacity> : null}

                            </View>
                        </View>}
                        </>

                        <View style={{
                            // height: '25%',
                            width: '100%',
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <TouchableOpacity
                                // onPress={GetQuestions}
                                style={{
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 200,
                                    borderRadius: 10,
                                    //   backgroundColor: subject == null ? "lightgrey" : "#5d4037"
                                }}>
                                {/* {gettingQuestions == true ? <ActivityIndicator color={'#d6491e'} /> : <Text
                  style={{ color: subject == null ? "black" : "white" }}>Next</Text>} */}
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </ScrollView>
            </View>
            // <ScrollView
            //     style={{
            //         position: 'absolute',
            //         // alignItems: "center",
            //         // justifyContent: "center",
            //         height,
            //         width,
            //         backgroundColor: "white",
            //         // backgroundColor: 'lightgrey'
            //     }}>
            //     <View //the entire title bar
            //         style={{
            //             // height:50,
            //             width: "100%", padding: 10,
            //             backgroundColor: "white",
            //             borderBottomColor: 'lightgrey',
            //             borderBottomWidth: 1,
            //         }}>
            //         <View //Title
            //             style={{
            //                 // height:"100%",
            //                 width: "100%",
            //                 alignItems: 'center',

            //                 backgroundColor: "white",
            //             }}><Text style={{
            //                 color: "black",
            //                 // backgroundColor:"red",
            //                 width: '80%',
            //                 textAlign: "center",

            //                 fontSize: 20,
            //                 fontWeight: 'bold',
            //             }}>{selectedSubject} Result for {selectedClass}</Text>

            //         </View>
            //         <View //back Button
            //             style={{
            //                 position: 'absolute',
            //                 height: "100%",
            //                 width: "100%",
            //                 justifyContent: 'center',
            //             }}>
            //             <TouchableOpacity onPress={() => setStep(2)}>
            //                 <MaterialCommunityIcons
            //                     style={{ padding: 5 }}
            //                     name="arrow-left" color='black' size={22} /></TouchableOpacity>
            //         </View>

            //     </View>
            //     <View style={{
            //         height: 50,
            //         width: "100%",
            //         flexDirection: "row",
            //         borderBottomColor: 'black',
            //         borderBottomWidth: 1,
            //         backgroundColor: "white",
            //     }}>
            //         <Text style={{
            //             color: "black",
            //             // backgroundColor:"red",
            //             width: '60%',
            //             textAlign: "left",
            //             padding: 10,
            //             fontSize: 18,
            //             fontWeight: 'bold',
            //             height: "100%",
            //         }}>Students</Text>
            //         <Text style={{
            //             color: "black",
            //             // backgroundColor:"blue",
            //             textAlign: "right",
            //             padding: 10,
            //             fontSize: 18,
            //             fontWeight: 'bold',
            //             width: '40%',
            //             height: "100%",
            //         }}>Score</Text>
            //     </View>
            //     <View style={{width:'100%'}}>
            //        {/* <Text>{studentList[1].Class}</Text> */}
            //        {/* <Text>{studentList[1].Class}</Text> */}
            //        </View>
            //     <View style={{
            //         width: '100%',

            //     }}>{
            //         studentList.length ?
            //             studentList.map((data, index) => (
            //                 data.Class == selectedClass ?
            //                     <View
            //                         // key={index}
            //                         // onPress={()=>setSelectedSubject(data)}
            //                         style={{
            //                             // padding:10,minWidth:120,
            //                             // paddingHorizontal: 10,
            //                             width: '100%',
            //                             height: 70,
            //                             flexDirection: 'row',
            //                             backgroundColor: "white",
            //                             borderBottomWidth: 1,
            //                             alignItems: "center",
            //                             justifyContent: "center",
            //                             borderWidth: 1,
            //                             borderColor: 'lightgrey',
            //                             // margin: 5
            //                         }}>
            //                         <View style={{
            //                             height: "100%",
            //                             width: '20%',
            //                             // backgroundColor:"green",
            //                             justifyContent: 'center',
            //                             alignItems: 'center'
            //                         }}>
            //                             <View style={{
            //                                 height: 50,
            //                                 width: 50,
            //                                 borderWidth:1,
            //                                 borderColor:'grey',
            //                                 borderRadius: 120,
            //                                 overflow: "hidden",
            //                                 justifyContent: 'center',
            //                                 alignItems: 'center'
            //                             }}>
            //                                 <Image
            //                                     source={{ uri: data.profile_picture }}
            //                                     style={{
            //                                         height: "100%",
            //                                         width: "100%",
            //                                     }} />
            //                             </View>
            //                         </View>

            //                         <Text style={{
            //                             // backgroundColor: "red",
            //                             width: '50%',
            //                             textAlign: "left",
            //                             padding: 10,
            //                             color: 'black',
            //                             height: "100%",
            //                         }}>{data.Surname}, {data.FirstName} {data.MiddleName}</Text>
            //                         {/* <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign: "right",
            //                             padding: 10,
            //                             fontSize:30,
            //                             width: '30%',
            //                             height: "100%",
            //                         }}>{data}</Text> */}
            //                     </View> 
            //                     : null
            //             )) 
            //             : null
            //             }
            //     </View>
            //     {/* <View style={{
            //                     width:'100%',

            //                 }}>
            //                      {TeachersListOfSubjects.map((data, index)=>(
            //                             <View 
            //                             // onPress={()=>setSelectedSubject(data)}
            //                             style={{
            //                                 // padding:10,minWidth:120,
            //                                 // padding: 10,
            //                                  minWidth: 120,
            //                                 maxWidth:600,
            //                                 height: 50,
            //                                 flexDirection:'row',
            //                                 // backgroundColor: selectedSubject == data ? '#d6491e' : null,
            //                                 borderBottomWidth: 1,
            //                                 alignItems: "center",
            //                                 justifyContent: "center", 
            //                                 // borderWidth: 1,
            //                                 borderBottomColor: 'lightgrey',
            //                                 margin: 5
            //                               }}>
            //                                 <Text style={{
            //                             // backgroundColor:"red",
            //                             width:'60%',
            //                             textAlign:"left",
            //                             padding:10,
            //                             height:"100%",}}>{data}</Text>
            //                                 <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign:"right",
            //                             padding:10,
            //                             width:'40%',
            //                             height:"100%",}}>{data}</Text>
            //                               </View>
            //                         ))}
            //                     </View>
            //                 <View style={{
            //                     width:'100%',

            //                 }}>
            //                      {TeachersListOfSubjects.map((data, index)=>(
            //                             <View 
            //                             // onPress={()=>setSelectedSubject(data)}
            //                             style={{
            //                                 // padding:10,minWidth:120,
            //                                 // padding: 10,
            //                                  minWidth: 120,
            //                                 maxWidth:600,
            //                                 height: 50,
            //                                 flexDirection:'row',
            //                                 // backgroundColor: selectedSubject == data ? '#d6491e' : null,
            //                                 borderBottomWidth: 1,
            //                                 alignItems: "center",
            //                                 justifyContent: "center", 
            //                                 // borderWidth: 1,
            //                                 borderBottomColor: 'lightgrey',
            //                                 margin: 5
            //                               }}>
            //                                 <Text style={{
            //                             // backgroundColor:"red",
            //                             width:'60%',
            //                             textAlign:"left",
            //                             padding:10,
            //                             height:"100%",}}>{data}</Text>
            //                                 <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign:"right",
            //                             padding:10,
            //                             width:'40%',
            //                             height:"100%",}}>{data}</Text>
            //                               </View>
            //                         ))}
            //                     </View>
            //                 <View style={{
            //                     width:'100%',

            //                 }}>
            //                      {TeachersListOfSubjects.map((data, index)=>(
            //                             <View 
            //                             // onPress={()=>setSelectedSubject(data)}
            //                             style={{
            //                                 // padding:10,minWidth:120,
            //                                 // padding: 10,
            //                                  minWidth: 120,
            //                                 maxWidth:600,
            //                                 height: 50,
            //                                 flexDirection:'row',
            //                                 // backgroundColor: selectedSubject == data ? '#d6491e' : null,
            //                                 borderBottomWidth: 1,
            //                                 alignItems: "center",
            //                                 justifyContent: "center", 
            //                                 // borderWidth: 1,
            //                                 borderBottomColor: 'lightgrey',
            //                                 margin: 5
            //                               }}>
            //                                 <Text style={{
            //                             // backgroundColor:"red",
            //                             width:'60%',
            //                             textAlign:"left",
            //                             padding:10,
            //                             height:"100%",}}>{data}</Text>
            //                                 <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign:"right",
            //                             padding:10,
            //                             width:'40%',
            //                             height:"100%",}}>{data}</Text>
            //                               </View>
            //                         ))}
            //                     </View>
            //                 <View style={{
            //                     width:'100%',

            //                 }}>
            //                      {TeachersListOfSubjects.map((data, index)=>(
            //                             <View 
            //                             // onPress={()=>setSelectedSubject(data)}
            //                             style={{
            //                                 // padding:10,minWidth:120,
            //                                 // padding: 10,
            //                                  minWidth: 120,
            //                                 maxWidth:600,
            //                                 height: 50,
            //                                 flexDirection:'row',
            //                                 // backgroundColor: selectedSubject == data ? '#d6491e' : null,
            //                                 borderBottomWidth: 1,
            //                                 alignItems: "center",
            //                                 justifyContent: "center", 
            //                                 // borderWidth: 1,
            //                                 borderBottomColor: 'lightgrey',
            //                                 margin: 5
            //                               }}>
            //                                 <Text style={{
            //                             // backgroundColor:"red",
            //                             width:'60%',
            //                             textAlign:"left",
            //                             padding:10,
            //                             height:"100%",}}>{data}</Text>
            //                                 <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign:"right",
            //                             padding:10,
            //                             width:'40%',
            //                             height:"100%",}}>{data}</Text>
            //                               </View>
            //                         ))}
            //                     </View>
            //                 <View style={{
            //                     width:'100%',

            //                 }}>
            //                      {TeachersListOfSubjects.map((data, index)=>(
            //                             <View 
            //                             // onPress={()=>setSelectedSubject(data)}
            //                             style={{
            //                                 // padding:10,minWidth:120,
            //                                 // padding: 10,
            //                                  minWidth: 120,
            //                                 maxWidth:600,
            //                                 height: 50,
            //                                 flexDirection:'row',
            //                                 // backgroundColor: selectedSubject == data ? '#d6491e' : null,
            //                                 borderBottomWidth: 1,
            //                                 alignItems: "center",
            //                                 justifyContent: "center", 
            //                                 // borderWidth: 1,
            //                                 borderBottomColor: 'lightgrey',
            //                                 margin: 5
            //                               }}>
            //                                 <Text style={{
            //                             // backgroundColor:"red",
            //                             width:'60%',
            //                             textAlign:"left",
            //                             padding:10,
            //                             height:"100%",}}>{data}</Text>
            //                                 <Text style={{
            //                             // backgroundColor:"blue",
            //                             textAlign:"right",
            //                             padding:10,
            //                             width:'40%',
            //                             height:"100%",}}>{data}</Text>
            //                               </View>
            //                         ))}
            //                     </View> */}
            // </ScrollView>
        }</>

    )
}