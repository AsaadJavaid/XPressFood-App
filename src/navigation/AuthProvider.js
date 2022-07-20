import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) =>{
                    try{
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e){
                        console.log(e);
                    }
                },
                register:  async (values)=>{
                    const {email,password, name, phone_number, family_name} = values
                  
                    try{
                      await auth().createUserWithEmailAndPassword(email,password)
            
                      .then(
                        ()=>{
                            firestore().collection('user').doc(auth().currentUser.uid).set({
                                phone_number,
                                name,
                                family_name
                            })
                        }
                      )
                      //console.log("USER ACCOUNT CREATED")
                    }catch(error){
                      if(error.code === 'auth/email-already-in-use'){
                        Alert.alert(
                          'That email address is already inuse'
                        )
                      }
                      if(error.code === 'auth/invalid-email'){
                        Alert.alert(
                          'That email address is invalid'
                        )
                      }
                      else{
                        Alert.alert(error.code)
                      }
                    }
                  },
            
                logout: async () =>{
                    try{
                        await auth().signOut();
                    } catch(e){
                        console.log(e);
                    }
                },
            }}
            > 
            {children}
        </AuthContext.Provider>
    );
}