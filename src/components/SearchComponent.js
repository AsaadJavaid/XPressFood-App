import React from "react";
import { useState, useRef } from "react";
import {View,Dimensions , TextInput , Text,StyleSheet,ImageBackground ,TouchableWithoutFeedback, TouchableOpacity , FlatList, Keyboard} from 'react-native'
import { colors } from "../global/styles"
import { Modal } from "react-native";
import { Icon } from "@rneui/base/dist/Icon";
import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native";
import { filterData, filterData2 } from "../global/data";
import { filter } from "lodash";

export default function SearchScreen(){

    const navigation = useNavigation();

    const [data, setData] = useState([...filterData2])
    const [modalVisible, setModelVisible] = useState(false)
    const [textInputFossued, setTextInputFossued] = useState(true)
    const textInput = useRef(0)

    const contains = ({name}, query)=>{
        if (name.includes (query))
        {
            return true
        }
        return false
    }
    const handleSearch = text =>{
        const dataS = filter(filterData2, userSearch =>{
            return contains(userSearch,text)
        })
    
        setData([...dataS])
    }

    return(
        <View>
            <TouchableWithoutFeedback
            onPress={()=>{
                setModelVisible(true);
            }}
            >
                <View style = {styles.SearchArea}>
                    <Icon
                    name="search"
                    style={styles.searchIcon}
                    type = "material-icons"
                    iconStyle={{marginLeft : 5}}
                    size = {32}
                    />

                    <Text style ={{fontSize:15}}>What are you looking for ?</Text>
                </View>


            </TouchableWithoutFeedback>

            <Modal
            animationType="fade"
            transparent = {false}
            visible = {modalVisible}
            >
                <View style = {styles.modal}>
                    <View style = {styles.view1}>
                        <View style = {styles.TextInput}>
                            <Animatable.View
                            animation = {textInputFossued ? "fadeInRight" : "fadeInLeft"}
                            duration = {500}
                            >
                            <Icon name = {textInputFossued ? "arrow-back" : "search" }  
                                    onPress = {()=>{
                                            if(textInputFossued)
                                            setModelVisible(false)
                                            setTextInputFossued(true)
                                                }}
                                        style = {styles.icon2} 
                                        type  ="material"
                                        iconStyle ={{marginRight:5}}
                                />
                            </Animatable.View>

                            <TextInput 
                            style = {{width : "90%"}}
                            placeholder = ""
                            autoFocus = {false}
                            ref = {textInput}

                            onFocus = {()=>{
                                setTextInputFossued(true)
                            }} 

                            onBlur = {()=>{
                                setTextInputFossued(false)
                            }}

                            onChangeText = {handleSearch}

                            />

                            <Animatable.View
                            animation={textInputFossued ? "fadeInLeft" : ""}
                            duration = {500}
                            >
                                <Icon 
                                    name = {textInputFossued ? "cancel" : null } 
                                    iconStyle ={{color:colors.grey3}}
                                    type ="material"
                                    style={{marginRight:1}}
                                    onPress ={()=>{
                                            textInput.current.clear() 
                                            handleSearch()          
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                onPress = {() =>{

                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                    setModelVisible(false)
                                    setTextInputFossued(true)
                                    }}>
                                        <View style={styles.view2}>
                                            <Text style={{color:colors.grey2, fontSize:15 }}>{item.name}</Text>
                                        </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}

                    /> 
                    
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:0,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:10,
         paddingRight:10
  
      },

    SearchArea:{marginTop :10,
        width:"100%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:20,
        borderWidth:2,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center"
      },

    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
      },

    view1:{ height:70,
        justifyContent:"center",
        paddingHorizontal:10,
      },

    view2:{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
    },

    icon2 :{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    modal :{
        flex:1
    }

})
