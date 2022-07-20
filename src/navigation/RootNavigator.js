import React, { useContext, useState, useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native"
import AuthStack from "./authStack";
import { AuthContext, AuthProvider } from "./AuthProvider";
import RootClientTabs from "./RootClientTabs";
import auth from "@react-native-firebase/auth";

export default function RootNavigator(){
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
  
    if (initializing) return null;
    return(
                    <NavigationContainer>
                            {user? <RootClientTabs/> : <AuthStack/>

                            }
                    </NavigationContainer>
        
    )
}