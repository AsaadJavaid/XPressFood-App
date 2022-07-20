import React from "react";
import { useState } from "react";
import{ View, Text, StyleSheet, Dimensions,FlatList,Pressable ,ScrollView, Image, TouchableOpacity }from "react-native";
import { colors } from "../global/styles";
import { parameters } from "../global/styles";
import { Icon } from "@rneui/base/dist/Icon";
import { Button } from "@rneui/base/dist/Button";
import { withBadge } from "@rneui/base";
import { filterData, restaurantsData } from "../global/data";
import FoodCard from "../components/FoodCard";
const SCREEN_WIDTH = Dimensions.get('window').width



export default function HomeScreen({navigation}){

    const BadgeIcon = withBadge(0)(Icon)
    const [indexCheck, setIndexCheck] = useState("0")
    const [delivery, setDelivery] = useState(true)
    return(
            <View style = {styles.container}>  
                <View style = {styles.header}>
                <TouchableOpacity style = {{justifyContent : "center"}}
                        onPress = {() =>{
                            navigation.navigate("Profile")
                        }}
                    >
                        <View style = {{alignItems :"center", justifyContent : "center", marginLeft : 15}}>
                            <Icon
                                type="marerial"
                                name="account-circle"
                                color={colors.cardbackground}
                                size = {32}
                            />
                        </View>
                    </TouchableOpacity>

                <View style = {{flex : 1,alignItems : "center", justifyContent : "center", paddingHorizontal : 70}}>
                    <Text style = {{color: colors.cardbackground, fontSize : 25, fontWeight : "bold"}}>
                        XPressFood
                    </Text>
                </View>

                <TouchableOpacity style= {{justifyContent : "center"}}
                onPress = {()=>{}}
                >
                    <View style = {{alignItems : "center", justifyContent : "center", marginRight : 10}}>
                        <BadgeIcon
                        type = "material-comunity"
                        name = "shopping-cart"
                        size = {35}
                        color = {colors.cardbackground}
                        />
                    </View>
                </TouchableOpacity>


            </View>

            <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator = {true}
            >

                    <View  style ={{backgroundColor:colors.cardbackground,paddingBottom:5}}> 
                        <View style ={{marginTop:10, flexDirection:'row',justifyContent:"space-evenly"}}>
                                <TouchableOpacity
                                        onPress ={()=>{
                                            setDelivery(true)
                                        }}
                                    >
                                    <View style ={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons :colors.grey5}}>
                                        <Text style ={styles.deliveryText}>Delivery</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                            onPress ={()=>{
                                            setDelivery(false)
                                            //navigation.navigate("RestaurantMapScreen")
                                        }}
                                    >
                                    <View style ={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5 :colors.buttons}}>
                                        <Text style ={styles.deliveryText}>Pick Up</Text>
                                    </View>
                                </TouchableOpacity> 
                    
                        </View>
                    </View> 

                <View style = {styles.filterView}>
                    <View style = {{flexDirection : "row", backgroundColor : colors.grey5, borderRadius : 20, marginTop : 10, alignItems : "center", marginHorizontal : 120}}>
                        <View style = {{flexDirection : "row", alignItems : "center"}}>
                            <Icon
                                type="meterial-comunity"
                                name = "room"
                                color={colors.grey1}
                                size = {26}
                            />
                            <Text style = {{marginLeft : 10}}>
                                COMSATS University
                            </Text>
                        </View>
                    </View>
                </View>

                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Categories</Text>
                </View>

                <View>
                    <FlatList
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {filterData}
                        keyExtractor = {(item) => item.id}
                        extraData = {indexCheck}
                        renderItem = {({item, index}) => (
                            <Pressable
                                onPress={()=>{
                                    setIndexCheck(item.id)
                                }}
                            >
                                <View style = {indexCheck === item.id? {...styles.smallCartSelected}:{...styles.smallCart}}>
                                    <Image
                                        style = {{height : 60, width : 60, borderRadius : 30}}
                                        source = {item.image}
                                    />
                                    <View>
                                        <Text style = {indexCheck ===item.id ? {...styles.smallCartTextSelected}:{...styles.smallCartText}}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Free Delivery Now</Text>
                </View>

                <View style = {{marginTop : 10}}>
                    <FlatList
                    style ={{marginTop:10, marginBottom:10}} 
                    horizontal ={true}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=> index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style ={{marginRight:5}}>
                            <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images = {item.images}
                            restaurantName ={item.restaurantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAddress}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            >

                            </FoodCard>
                        </View>
                    )}
                    
                    >

                    </FlatList>
                </View>


                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Promotions Available</Text>
                </View>


                <View style = {{marginTop : 10}}>
                    <FlatList
                    style ={{marginTop:10, marginBottom:20}} 
                    horizontal ={true}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=> index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style ={{marginRight:5}}>
                            <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images = {item.images}
                            restaurantName ={item.restaurantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAddress}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            >

                            </FoodCard>
                        </View>
                    )}
                    
                    >

                    </FlatList>
                </View>



                <View style ={styles.headerTextView}>
                    <Text style ={styles.headerText}>Restaurants in your Area</Text>
                </View>

                <View style ={{width:SCREEN_WIDTH,paddingTop:20}}>
                    { 
                        restaurantsData.map(item =>(
                            <View key ={item.id} style = {{paddingBottom:20}}>
                            <FoodCard 
                                    screenWidth  ={SCREEN_WIDTH*0.95}
                                    images ={item.images}
                                    restaurantName ={item.restaurantName}
                                    farAway ={item.farAway}
                                    businessAddress ={item.businessAddress}
                                    averageReview ={item.averageReview}
                                    numberOfReview ={item.numberOfReview}
                                    
                                />
                            </View>
                        )
                        )
                    }        
                </View>



            </ScrollView>


            { delivery &&
            <View style = {styles.floatButton}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("RestaurantsMapScreen")
                    }}
                >
                    <Icon
                        name="place"
                        type="material"
                        size={32}
                        color = {colors.buttons}
                    ></Icon>
                    <Text style ={{color:colors.grey2}}>Map</Text>
                </TouchableOpacity>
            </View>
            }

            

        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    deliveryButton: {
        paddingHorizontal : 25,
        borderRadius : 15,
        paddingVertical : 5
    },
    deliveryText : {
        marginLeft : 5,
        fontSize : 18
    },
    filterView : {
        flexDirection :"row",
        marginVertical : 5
    },
    headerText : {
        color : colors.grey2,
        fontSize : 26,
        fontWeight : "bold",
        paddingLeft : 20
    },
    headerTextView :{
        backgroundColor : colors.grey5,
        marginTop : 10,
        paddingTop : 2
    },
    smallCart :{
        borderRadius : 30,
        backgroundColor : colors.grey5,
        justifyContent : "center",
        alignItems : "center",
        padding : 5,
        width : 80,
        margin : 10,
        height : 100
    },
    smallCartSelected :{
        borderRadius : 30,
        backgroundColor : colors.buttons,
        justifyContent : "center",
        alignItems : "center",
        padding : 5,
        width : 80,
        margin : 10,
        height : 100
    },
    smallCartTextSelected : {
        fontWeight : "bold",
        color : colors.cardbackground
    },
    smallCartText : {
        fontWeight : "bold",
        color : colors.grey2
    },
    floatButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    },
    header : {
        justifyContent : "space-between",
        flexDirection : "row",
        backgroundColor : colors.buttons,
        height : parameters.headerHeight
    }
})