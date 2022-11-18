import { View, KeyboardAvoidingView, Image, TextInput, ScrollView, Text, useWindowDimensions, TouchableOpacity, Alert, ActivityIndicator, ImageBackground, StatusBar, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import ListsOfClasses from '../Component/ListsOfClasses';
import ListOfSubjects from '../Component/ListOfSubjects';
import { getDatabase, ref, set, get, child, onValue, update } from 'firebase/database';
// import Preview from '../AdminScreen/Preview';
import Preview from './Preview';


export default function PreviewScreen({ setStage, RegNo, }) {
    const { height, width } = useWindowDimensions()
    const [Level, setLevel] = useState(1)
    const [selectedClass, setSelectedClass] = useState(null)
    const [selectedSubject, setSelectedSubject] = useState()
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [currentNumber, setcurrentNumber] = useState(0)
    const [preloadedQuestions, setpreloadedQuestions] = useState(null)
    const [processingQuestions, setProcessingQuestions] = useState(false)
    const [TermAccessible, setTermAccessible] = useState('FirstTerm')
    const [scanning, setScanning] = useState(false)


    function ValidateQuestioner(params) {
        try {
            setProcessingQuestions(true)
            const dbRef = ref(getDatabase());
            NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

            if (connectionStatus == true) {
                get(child(dbRef, 'SubjectAllocation/' + `${selectedSubject}/`))
                    .then((snapshot) => {
                        // setProcessingStaffVerification(false)
                        if (snapshot.exists()) {
                            const data = snapshot.val()
                            var size = Object.keys(data).length;
                            data.RegNoOfSelectedStaff.includes(RegNo) ? (ToastAndroid.show("Access granted!", ToastAndroid.SHORT), Scan()) : ToastAndroid.show("Access denied!", ToastAndroid.SHORT)

                        }
                        // if (snapshot.val()) {

                        // }
                        if (!snapshot.exists()) {
                            const data = snapshot.val()
                            ToastAndroid.show("No allocations for the selected subject!", ToastAndroid.LONG)
                            setProcessingQuestions(false)
                            console.log('no data')
                            // setcurrentNumber(1)
                            // setLevel(3)

                        }
                        // setLevel(3)
                    })
                    .catch((e) => alert(e))
            } else {
                setProcessingQuestions(false)
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
                    ToastAndroid.show(`${data.TermAccessible} available!`, ToastAndroid.LONG)
                    ProceedToTypeQuestions()
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

    function ProceedToTypeQuestions(params) {
        try {
            setProcessingQuestions(true)
            const dbRef = ref(getDatabase());
            NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable))

            if (connectionStatus == true) {
                setProcessingQuestions(true)
                get(child(dbRef, 'Examination/' + `${TermAccessible}/` + `${selectedClass}/` + 'Questions/' + `${selectedSubject}/`))
                    .then((snapshot) => {
                        // setProcessingStaffVerification(false)
                        if (snapshot.exists()) {
                            const data = snapshot.val()
                            var size = Object.keys(data).length;
                            setProcessingQuestions(true)
                            setpreloadedQuestions(data)
                            setcurrentNumber(size + 1)
                            console.log(data)
                            setLevel(3),
                                setProcessingQuestions(false)

                        }
                        if (!snapshot.exists()) {
                            const data = snapshot.val()
                            Alert.alert('', 'Questions not set')
                            setProcessingQuestions(false)
                            console.log(data)
                            // setcurrentNumber(1)
                            // setLevel(3)

                        }
                        // setLevel(3)
                    })
                    .catch((e) => alert(e))
            } else {
                Alert.alert(
                    "Connection problem",
                    "You're not connected to the intenet",
                    [
                        {
                            text: "Retry",
                            onPress: () => ValidateQuestioner()
                        },

                        { text: "OK", onPress: setLevel(2) }
                    ]
                )
            }
            if (connectionStatus == false) {
                setProcessingQuestions(false)
            }
        } catch (error) {
            console.log('Error', error)
            setProcessingQuestions(false)
        }
    }

    useEffect(() => {
        NetInfo.fetch().then((data) => setConnectionStatus(data.isInternetReachable)),
            // alert(connectionStatus)
            NetInfo.fetch().then((data) => console.log(data))
    }, [connectionStatus])

    return (
        <View style={{
            height,
            width
        }}>
            <StatusBar backgroundColor={"#ffffff"} barStyle={'dark-content'} />
            {Level == 1 && //select class
                <ScrollView
                    style={{ height, width, backgroundColor: "#f5f5f5", position: 'absolute' }}>
                    <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, backgroundColor: "white" }}>
                        <View
                            style={{ width, height: 50, position: 'absolute', textAlign: "center", backgroundColor: "white", justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ textAlign: "center", color: "black", fontSize: 18, fontWeight: "600" }}>Select Class</Text>
                        </View>
                        <TouchableOpacity onPress={() => setStage(1)}>
                            <MaterialCommunityIcons
                                style={{ padding: 5 }}
                                name="arrow-left" color='black' size={20} />
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
                                    onPress={() => selectedClass == null ? (Alert.alert("", "Please select class")) : (setLevel(2))}
                                    style={{
                                        height: 45,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 220, backgroundColor: selectedClass == null ? 'lightgrey' : '#d6491e'
                                    }}>
                                    <Text style={{ color: selectedClass == null ? 'black' : 'white', }}>Proceed</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{
            height: 80,
            width: '100%'
        }}></View> */}
                </ScrollView>}
            {Level == 2 && //select subject 
                <View style={{ height, width, }}>

                    <View //Select Subject
                        style={{
                            height: 50,
                            width: "100%",
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <View style={{ width: '100%', justifyContent: "center", padding: 10, height: 50, position: "absolute" }}>
                            <TouchableOpacity onPress={() => setLevel(1)}>
                                <MaterialCommunityIcons
                                    style={{ padding: 5 }}
                                    name="arrow-left" color='black' size={20} /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Subject</Text>
                    </View>
                    <View style={{
                        width: "100%", height: height - 150,
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%',backgroundColor:"#f5f5f5" }}>
                            <View style={{
                                justifyContent: "center",
                                // backgroundColor:"lightgrey",
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
                            }}>{processingQuestions == false ?
                                <Text style={{ color: selectedSubject == null ? 'black' : 'white', }}>Proceed</Text>
                                : <ActivityIndicator color={'white'} />}
                        </TouchableOpacity>
                    </View>




                </View>}

            {Level == 3 &&
                <Preview
                    selectedClass={selectedClass}
                    selectedSubject={selectedSubject}
                    setLevel={setLevel}
                    TermAccessible={TermAccessible} />}

            {/* {Level == 3 && //Type questions
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
                                    }}>50</Text>
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

                                    }}>{uploading == true ? <ActivityIndicator color={'white'} /> : currentNumber == 50 ? <Text style={{
                                        // fontSize: 20,
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
            } */}
        </View>
    )
}