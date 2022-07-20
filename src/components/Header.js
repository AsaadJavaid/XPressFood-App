import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "@rneui/themed";

export default function Header({title, navigation}){
    return(
        <View style = {styles.header}>
            <View style = {{marginLeft : 20}}>
                <Icon
                    type="material"
                    name="arrow-back"
                    color={colors.heaherText}
                    size = {28}
                    onPress = {()=>{
                        navigation.goBack();
                    }}
                >

                </Icon>
                
            </View>
            <View>
                    <Text style = {styles.headerText}>
                        {title}
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : colors.buttons,
        flexDirection : "row",
        height : parameters.headerHeight
    },
    headerText : {
        color : colors.heaherText,
        fontSize : 24,
        fontWeight : "bold",
        marginLeft : 70

    }
})