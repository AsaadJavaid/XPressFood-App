import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/base/dist/Avatar/Avatar";
import { Switch } from "@rneui/base";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";


export default function Profile({navigation}){
    return(

        <View>
            <View style = {{flexDirection : "row"}}>
                <View style = {styles.view1}>
                    <View style = {styles.view2}>
                        <Icon 
                                name ="arrow-left"
                                type = "material-community"
                                color = {colors.black}
                                size = {25}
                                onPress ={()=>navigation.goBack()}
                            />

                    </View>

                </View>
                <View style = {{justifyContent : "center", alignItems : "center", backgroundColor : colors.buttons}}>
                    <Text style = {styles.f1}>Manufacturers</Text>
                </View>
            </View>
            


            <View style = {{marginVertical : 30,flexDirection:'row', alignItems:'center',
                                    paddingLeft:5,paddingVertical:10, backgroundColor : colors.grey5}}>
                    <TouchableOpacity style = {{flexDirection:'row', alignItems:'center'}}
                    onPress = {() =>{
                        navigation.navigate("AsaadCV")
                    }}
                    >
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {190}
                        source = {{uri:"https://cdn3.vectorstock.com/i/1000x1000/39/42/vintage-cute-letter-a-with-crown-princess-vector-33243942.jpg"}}
                    />

                    <View style ={{marginLeft:10}}>
                    <Text style ={{fontWeight:'bold',color:colors.grey2,fontSize:25 }} >Asaad Habib</Text>
                        <Text style ={{color:colors.grey3,fontSize:14}} > asaadhabib449@gmail.com</Text>
                    </View>
                    </TouchableOpacity>
                    
            </View>


            <View style = {{flexDirection:'row', alignItems:'center',
                                    paddingLeft:5,paddingVertical:10, backgroundColor : colors.grey5}}>
                    <TouchableOpacity style = {{flexDirection:'row', alignItems:'center'}}
                    onPress = {() =>{
                        navigation.navigate("HibaCV")
                    }}
                    >
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {190}
                        source = {{uri:"https://image.shutterstock.com/image-vector/letter-h-logo-icon-design-260nw-257898641.jpg"}}
                    />

                    <View style ={{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.grey2,fontSize:25 }} >Hiba Shafqat</Text>
                        <Text style ={{color:colors.grey3,fontSize:14}} > hibii0@gmail.com</Text>
                    </View>
                    </TouchableOpacity>
                    
            </View>

        </View>
        

        
    )
}

const styles = StyleSheet.create({
    f1 : {
        fontSize : 40,
        fontWeight : "bold"
    },

    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize: 20,
        color:colors.grey2,
         paddingTop:5,
         paddingBottom : 5,
         paddingLeft:0,
         fontWeight:"bold"
    },
    
    
    view1: {flexDirection:"row",
            alignItems:"baseline",
           justifyContent:"space-between"
          },
    
    view2:{margin:10,
           width:40,
           height:40,
           backgroundColor:colors.buttons,
           alignItems:"center",
           justifyContent:"center",
           borderRadius:20,
          }
})
