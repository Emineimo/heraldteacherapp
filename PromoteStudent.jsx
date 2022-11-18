import { View, Text } from 'react-native'
import React from 'react'

export default function PromoteStudent() {
  return (
    <View style={{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <View style={{
            height:350,
            width:300,
            borderradius:10,
            elevation:5,
        }}></View>
      <Text>PromoteStudent</Text>
    </View>
  )
}