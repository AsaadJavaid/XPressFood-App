import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HibaCV = () => {
  return (
    <View style = {{flex : 1}}>
      <Image
      source={require("../assets/hCV.png")}
      style = {{flex : 1,width : null, height : 300}}
      />
    </View>
  )
}

export default HibaCV

const styles = StyleSheet.create({})