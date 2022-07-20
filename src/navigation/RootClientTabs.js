import React from "react";
import { color, Icon } from "@rneui/base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import { ClientStack } from "./clientStack";
import ProfileView from "../screens/ProfileView";


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor : colors.buttons
        }}
        >
            <ClientTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options = {{
                headerShown : false,
                tabBarLabel : "Home",
                tabBarIcon : ({color,size}) =>(
                    <Icon
                    name="home"
                    type="material"
                    color={color}
                    size = {size}
                    />
                )
            }}
            />

            <ClientTabs.Screen
            name="ClientStack"
            component={ClientStack}
            options = {{
                headerShown : false,
                tabBarLabel : "Search",
                tabBarIcon : ({color,size}) =>(
                    <Icon
                    name="search"
                    type="material"
                    color={color}
                    size = {size}
                    />
                )
            }}
            />

            <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
                options ={
                    {
                        headerShown : false,
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

            <ClientTabs.Screen
            name="ProfileView"
            component={ProfileView}
            options = {{
                headerShown : false,
                tabBarLabel : "My Account",
                tabBarIcon : ({color,size}) =>(
                    <Icon
                    name="person"
                    type="material"
                    color={color}
                    size = {size}
                    />
                )
            }}
            />
        </ClientTabs.Navigator>
    )
}