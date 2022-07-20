import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function RestaurantsMapScreen(){
    return(
        <View style = {{flex : 1, width : "90%",height : "80%" , alignItems : "center"}}>
            <Image
            source={require("../assets/map.jpg")}
            style = {{}}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    
})