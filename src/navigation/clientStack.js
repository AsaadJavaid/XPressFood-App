import React, {useLayoutEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import FastFoodResult from "../screens/FastFoodResult";
import PizzaResult from "../screens/PizzaResult";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MenuProductScreen from "../screens/MenuProductScreen";

const ClientSearch = createNativeStackNavigator()

export function ClientStack({navigation, route}){


    useLayoutEffect(()=>{

        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
        
        },[navigation,route])


        
    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
            name="SearchScreen"
            component={SearchScreen}
            options = {
                ()=>({
                    headerShown : false
                })
            }
            />

        <ClientSearch.Screen
            name="SearchResultScreen"
            component={SearchResultScreen}
            options = {
                ()=>({
                    headerShown : false
                })
            }
            />

        <ClientSearch.Screen
            name="RestaurantHomeScreen"
            component={RestaurantHomeScreen}
            options = {
                ()=>({
                    headerShown : false
                })
            }
            />

        <ClientSearch.Screen
            name="MenuProductScreen"
            component={MenuProductScreen}
            options = {
                ()=>({
                    headerShown : false
                })
            }
            />

        <ClientSearch.Screen
            name="PizzaResult"
            component={PizzaResult}
            options = {
                ()=>({
                    headerShown : false
                })
            }
            />
        </ClientSearch.Navigator>
    )
}
