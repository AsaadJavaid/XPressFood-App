import { View, Text, Image } from 'react-native'
import React from 'react'

const AsaadCV = () => {
  return (
    <View style = {{flex : 1, width : null, alignItems : "center"}}>
      <Image
      source={require("../assets/aCV.png")}
      style = {{}}
      />
    </View>
  )
}

export default AsaadCV