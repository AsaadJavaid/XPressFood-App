import React, {useRef, useState, useContext} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";
import { Icon } from "@rneui/base/dist/Icon";
import { SocialIcon } from "@rneui/base/dist/SocialIcon";
import { Button } from "@rneui/base/dist/Button";
import { Formik } from "formik";
import { AuthContext } from "../../navigation/AuthProvider";


export default function SignInScreen({navigation}){

    const[textInput2Fossued, setTextInput2Fossued] =useState(false)
    const[textInput1Fossued, setTextInput1Fossued] =useState(false)
    const {login} = useContext(AuthContext)
    // const [password, setPassword] = useState("")
    const textInpput1 = useRef(1)
    const textInput2 = useRef(2)




    // async function signIn(data){
    //     try{
    //         const {email, password} = data
    //         const user = await auth().signInWithEmailAndPassword(email,password)
    
    //         if (user){
    //             navigation.navigate("RootClientTabs")
    //         }
    //     }
    //     catch(error){
    //         Alert.alert(
    //             error.name,
    //             error.message
    //         )
    //     }
    // }

    // async function signup(data){
    //     try{
    //         const {email, password} = data
    //         const user = await auth().createUserWithEmailAndPassword(email,password)
    
    //         if (user){
    //             console.log("user registered")
    //         }
    //     }
    //     catch(error){
    //         Alert.alert(
    //             error.name,
    //             error.message
    //         )
    //     }
    // }


    async function signIn(data){
        try{
            const {password,email} = data
            await login(email,password)
        // const user = await auth().signInWithEmailAndPassword(email,password)
        // if(user){
        //     console.log("User Signed In")
    }
        catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    
    }

    return(
        <View style = {styles.container}>
            <Header
                title= "MY ACCOUNT" navigation = {navigation}
            >

            </Header>
            

            <View style = {{marginTop : 10, marginHorizontal : 20}}>
                <Text
                    style = {title}
                >Sign-In</Text>
            </View>

            <View style = {{alignItems : "center", marginTop : 10}}>
                <Text style = {styles.text1}>
                    Please Enter the Email and password
                </Text>
                <Text style = {styles.text1}>
                    to Register with your Acoount
                </Text>
            </View>

            <Formik
                initialValues={{email : "", password : ""}}
                onSubmit = {(values)=>{
                        signIn(values)
                }}
            >
                { (props) =>
                <View>
                
                    <View>
                        <View style = {styles.TextInput1}>
                            <Animatable.View
                            animation={textInput1Fossued ? "" : "fadeInRight"}
                            duration = {400}
                            >
                                <Icon
                                name="mail"
                                iconStyle={{color : colors.grey3}}
                                type = "material"
                                
                                >
    
                                </Icon>
                            </Animatable.View>
                            <TextInput
                            style = {{width : "80%", color : "black"}}
                            // value = {email}
                            placeholder = "Email"
                            ref={textInpput1}
                            onFocus = {()=>{
                                setTextInput1Fossued(false)
                            }}
    
                            onBlur = {()=>{
                                setTextInput1Fossued(true)
                            }}
                            // onChangeText = {setEmail}

                            onChangeText = {props.handleChange("email")}
                            value = {props.values.email}
                            >
                            
                                
                            </TextInput>
                        </View>
    
    
                        <View style = {styles.TextInput2}>
                            <Animatable.View
                            animation={textInput2Fossued ? "" : "fadeInRight"}
                            duration = {400}
                            >
                                <Icon
                                name="lock"
                                iconStyle={{color : colors.grey3}}
                                type = "material"
                                
                                >
    
                                </Icon>
                            </Animatable.View>
    
                            <TextInput
                                style = {{width : "80%", color : "black"}}
                                // value = {password}
                                placeholder = "Password"
                                ref={textInput2}
                                onFocus = {()=>{
                                    setTextInput2Fossued(false)
                                }}
    
                                onBlur = {()=>{
                                    setTextInput2Fossued(true)
                                }}
                                // onChangeText = {setPassword}
                                onChangeText = {props.handleChange("password")}
                                value = {props.values.password}
                                >
                            </TextInput>
                        </View>
                        
                    </View>
    
    
                    <View style = {{marginHorizontal : 20, marginVertical : 40}}>
                        <Button
                        title="SIGN-IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}

                        onPress = {props.handleSubmit}
                        // onPress = {()=>{
                        //     // signIn({email: email, password : password})
                        //     //navigation.navigate("RootClientTabs")
                        // }}
                        >
    
                        </Button>
                    </View>
                </View>
                }

            </Formik>
                


            <View style ={{alignItems : "center", marginVertical : -25}}>
                <Text style = {{...styles.text1, textDecorationLine : "underline"}}>
                    Forgot Password ?
                </Text>
            </View>

            <View style = {{alignItems : "center", marginVertical : 40}}>
                <Text style  = {{fontSize : 30, fontWeight : "bold", color : "black"}}>
                    OR
                </Text>
            </View>

            <View style = {{justifyContent : "center", alignItems : "center", marginVertical : -25}}>
                <SocialIcon
                title="Sign In With GOOGLE"
                button
                type="google"
                style = {styles.socialIcon}
                onPress = {()=>{}}
                >

                </SocialIcon>
            </View>

            <View style = {{alignItems : "flex-end", marginVertical : 135, marginHorizontal : 10}}>
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
    container : {
        flex :1
    },
    text1 : {
        color : colors.grey3,
        fontSize : 16
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        marginTop : 30
      },

      TextInput2:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:20,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-between",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:30
  
      },
      socialIcon : {
        height : 50,
        borderRadius : 12,
        width : "90%"
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
      },

      createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }

})