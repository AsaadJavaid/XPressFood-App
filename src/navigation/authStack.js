import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./RootClientTabs";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen"
import Profile from "../screens/Profile";
import AsaadCV from "../screens/AsaadCV";
import HibaCV from "../screens/HibaCV";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import ProfileView from "../screens/ProfileView";


const Auth = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            {/* <Auth.Screen
                name = "ProfileView"
                component = {ProfileView}
                options = {{
                    headerShown : false
                }}
            /> */}

            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "SignUpScreen"
                component = {SignUpScreen}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "RestaurantsMapScreen"
                component = {RestaurantsMapScreen}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "Profile"
                component = {Profile}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "AsaadCV"
                component = {AsaadCV}
                options = {{
                    headerShown : false
                }}
            />

            <Auth.Screen
                name = "HibaCV"
                component = {HibaCV}
                options = {{
                    headerShown : false
                }}
            />


        </Auth.Navigator>
    )
}