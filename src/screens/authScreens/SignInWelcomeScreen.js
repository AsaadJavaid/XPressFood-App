import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from "react-native";
import { colors, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Icon } from "@rneui/base/dist/Icon";
import { Button } from "@rneui/base/dist/Button";
import { SocialIcon } from "@rneui/base/dist/SocialIcon";
import Swiper from "react-native-swiper";



export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex : 1}}>
            <View style ={{justifyContent:'flex-start',alignItems:'center',paddingTop:40}}>    
                <Text style={{fontSize:30,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:30,color:colors.buttons,fontWeight:'bold'}}>IN YOUR AREA</Text>     
            </View> 

            <View style ={{flex : 1, justifyContent : "center", paddingVertical : 80}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                        <Image
                            source={{uri : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>

                    <View style = {styles.slide2}>
                        <Image
                            source={{uri : "https://takethemameal.com/files_images_v2/store/items/tn/ravioli-with-marinara-and-sweet-italian-sausage.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>

                    <View style = {styles.slide3}>
                        <Image
                            source={{uri : "https://takethemameal.com/files_images_v2/stam.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>

                    <View style = {styles.slide4}>
                        <Image
                            source={{uri : "https://meals-on-wheels.com/wp-content/uploads/2020/11/MOWDayOne10.24.190127-Greek-Chicken-Pas-scaled-1.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>
                </Swiper>
            </View>

            <View style = {{marginHorizontal : 20, marginVertical : 10}}>
                <Button
                title="SIGN-IN"
                buttonStyle = {parameters.styledButton}
                titleStyle = {parameters.buttonTitle}
                onPress = {()=>{
                    navigation.navigate("SignInScreen")
                }}
                >

                </Button>
            </View>

            <View style = {{marginVertical : 10, marginHorizontal : 10}}>
                <Button
                title="Create an Account"
                buttonStyle = {styles.createButton}
                titleStyle = {styles.createButtonTitle}
                onPress = {()=>{
                    navigation.navigate("SignUpScreen")
                }}
                >
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    slide1: {
      height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      slide4: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons,
      },

      createButtonTitle:{
        color:colors.grey1,
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }

})