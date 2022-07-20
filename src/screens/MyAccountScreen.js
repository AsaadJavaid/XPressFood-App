import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MyAccountScreen(){
    return(
        <View style = {{flex : 1, width : null, alignItems : "center"}}>
            <Image
            source={require("../assets/a1.jpg")}
            style = {{}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})