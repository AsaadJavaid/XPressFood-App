import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import { AuthProvider } from "./src/navigation/AuthProvider";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barStyle= "light-content"
        style = {styles.container}
        backgroundColor = {colors.statusbar}
      ></StatusBar>
      <AuthProvider>
        <RootNavigator>
        
        </RootNavigator>
      </AuthProvider>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})