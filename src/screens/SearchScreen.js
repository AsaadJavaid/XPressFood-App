import React from "react";
import {View,Dimensions , Text,StyleSheet,ImageBackground ,TouchableWithoutFeedback, TouchableOpacity , FlatList} from 'react-native'
import SearchComponent from "../components/SearchComponent";
import { filterData2 } from "../global/data";
import { colors } from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}){
    return(
        <View style = {{flex : 1}}>
            <SearchComponent>

            </SearchComponent>

            <View>
                <FlatList
                style = {{marginBottom : 1}}
                data = {filterData2}
                keyExtractor = {item => item.id}
                renderItem = {({item, index}) => (
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        navigation.navigate("SearchResultScreen", {item: item.name})
                    }}
                    >
                        <View style = {styles.imageView}>
                            <ImageBackground
                            style = {styles.image}
                            source={{uri : item.image}}
                            >

                                <View style = {styles.textView}>
                                    <Text style = {{color : colors.cardbackground}}>
                                        {item.name}
                                    </Text>
                                </View>

                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}

                horizontal = {false}
                showsVerticalScrollIndicator  = {false}
                numColumns= {2}
                ListHeaderComponent = { <Text style = {styles.listHeader}>Top Categories</Text>}
                ListFooterComponent = {<Footer></Footer>}
                />
            </View>
        </View>
    )
}

const Footer = ({navigation}) =>{
    return(
        <View style = {{marginTop : 10, marginBottom : 60}}>
            <View>
                <FlatList
                style = {{marginBottom : 1}}
                data = {filterData2}
                keyExtractor = {item => item.id}
                renderItem = {({item, index}) => (
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("SearchResultScreen", {item: item.name})
                        }}
                    >
                        <View style = {styles.imageView}>
                            <ImageBackground
                            style = {styles.image}
                            source={{uri : item.image}}
                            >

                                <View style = {styles.textView}>
                                    <Text style = {{color : colors.cardbackground}}>
                                        {item.name}
                                    </Text>
                                </View>

                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}

                horizontal = {false}
                showsVerticalScrollIndicator  = {false}
                numColumns= {2}
                ListHeaderComponent = { <Text style = {styles.listHeader}>More Categories</Text>}
                />
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({

    imageView : {  borderRadius:10,
                    justifyContent:"center",
                    alignItems:"center",
                    width:SCREEN_WIDTH*0.4475,
                    height:SCREEN_WIDTH*0.4475,
                    marginLeft:SCREEN_WIDTH*0.035,
                    marginBottom:SCREEN_WIDTH*0.035
    },

    image :  {     height:SCREEN_WIDTH*0.4475,
                    width:SCREEN_WIDTH*0.4475,
                    borderRadius:20, 
    },
    
    listHeader : {  fontSize:20,
                    color:colors.grey2,
                    paddingBottom:10,
                    marginLeft:12,
                    fontWeight : "bold",
                    paddingVertical : 10
                    
                    },

    textView : {  height:SCREEN_WIDTH*0.4475,
                    width:SCREEN_WIDTH*0.4475,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:'rgba(52, 52, 52,0.3)',
                    justifyContent : "flex-end"
                 }


})