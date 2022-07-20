import React, {useState, useContext, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, TextInput, Image, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Icon } from '@rneui/base';
import { AuthContext } from '../navigation/AuthProvider';
import { parameters } from '../global/styles';
import { colors } from '../global/styles';
import { Button } from '@rneui/base';


export default function ProfileView({navigation, route}) {
  const {user, logout} = useContext(AuthContext);
  // const user = {}
  
  const [details, setDetails] = useState()
  // // var details;
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(true)



  const deluser = async() =>{
   // var currentUser = auth().getUser(user.uid)
  
    await user.delete().then(async()=>{
      await firestore().collection('user').doc(user.uid).delete().then(()=>Alert.alert("Account", "User Deleted Successfully"))
    }).catch((error)=>{
      console.log("error", error)
    })
  }

  const edit = () =>{
    setDisabled(!disabled);
  }


  const getUser = async () => {
    console.log("fetching data", user)
    try{
      await firestore()
      .collection('user')
      .doc(
          user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          // console.log('User Data', documentSnapshot.data());
          // setDetails({...documentSnapshot.data(), dob:(new Date(documentSnapshot.data().dob.seconds))});
          setDetails(documentSnapshot.data());
          // console.log('Details Data', details.dob);
          setLoading(false)
        }
      })
    }catch(error){
      console.log("error",error)
    }

  }

  const handleProfileUpdate = async () => {
    setDisabled(true);
    let imgUrl = details.userImg
    await firestore()
    .collection('user')
    .doc(user.uid)
    .update({
      name: details.name,
      family_name: details.family_name,
      phone_number: details.phone_number,
    }).then(()=>{
      console.log('User Updated')
      Alert.alert('Profile', 'Your Profile Updated Successfully.')
    })
  }


  useEffect(() => {
    getUser();
    
  }, []);


  if(loading){
    console.log("Some data")
    return(
      <View style = {{marginTop : 45, backgroundColor : '#7fffd4'}}>
        <Text style = {styles.listHeader}>LOADING.............</Text>
        
        <View style = {{marginHorizontal : 20, marginVertical : 10}}>
                        <Button
                        title="LogOut"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={()=>logout()}
                        >
    
                        </Button>
                    </View>
      </View>
    )
  }else{

    return(
        <View style={{ flex: 1, backgroundColor : `#7fffd4`,
    alignItems: 'center',
    }}>
      <ScrollView style={{width:"95%"}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        
        <View style={{padding:8, borderRadius:10, width:"100%", backgroundColor:'white', marginVertical:20,
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 0,
                          height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4.84,    
                      elevation: 5,}}>
          <TouchableOpacity onPress={()=>edit()}><Icon style={{alignSelf:"flex-end"}} name="edit" size={24} color="black" type='material'/></TouchableOpacity>
          <Image style={{width: 150, height: 150, marginBottom:50, alignSelf:'center', borderRadius:100}}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/xpressfood-ce2d3.appspot.com/o/avatar.jpg?alt=media&token=9418d2e0-9880-4e74-8209-d2d01f29f471' }}/>
        </View>

        <View style={{paddingHorizontal:10}}>


        <View style={{flexDirection: "row", marginTop:10}}>
              <View style={{width:'48%', marginRight:10}}>
              <Text style = {styles.listHeader}>Full Name</Text>
                <TextInput style={{marginTop:5,height : 50 ,fontSize : 20,fontWeight : "bold", backgroundColor:'white',color : "black" ,paddingHorizontal:10,borderRadius: 5, borderColor:"black", borderRadius:5,  padding:3}} value={details.name} onChangeText={(val)=>setDetails({...details, name:val})} editable={!disabled}></TextInput>
              </View>
              <View style={{width:'48%', marginLeft:10}}>
              <Text style = {styles.listHeader}>Family Name</Text>
                <TextInput style={{marginTop:5,height : 50,fontSize : 20,fontWeight : "bold", backgroundColor:'white',color : "black" , paddingHorizontal:10, borderColor:"lightgrey", borderRadius:5,  padding:3}} value={details.family_name} onChangeText={(val)=>setDetails({...details, family_name:val})} editable={!disabled}></TextInput>
              </View>
      </View>

      <View style={{width:'80%', justifyContent : "center"}}>
          <Text style = {styles.listHeader}>Phone Number</Text>
          <TextInput style={{marginTop:5,height : 50,fontSize : 20,fontWeight : "bold", backgroundColor:'white',color : "black" , paddingHorizontal:10, borderColor:"lightgrey", borderRadius:5,  padding:3}} value={details.phone_number} onChangeText={(val)=>setDetails({...details, phone_number:val})} editable={!disabled}></TextInput>
      </View>

       </View>


                      <View style = {{marginVertical: 20}}>
                              <Button 
                              buttonStyle ={parameters.styledButton} 
                              disabled={disabled} 
                              titleStyle = {parameters.buttonTitle}
                              onPress={()=>handleProfileUpdate()} 
                              title = 'Update'/> 
                      </View>
       


                    <View style = {{marginHorizontal : 20, marginVertical : 10}}>
                        <Button
                        title="LogOut"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={()=>logout()}
                        >
    
                        </Button>
                    </View>


                    <View style = {{marginHorizontal : 20, marginVertical : 10}}>
                        <Button
                        title="Delete Account"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={()=>deluser()}
                        >
    
                        </Button>
                    </View>
      </ScrollView>
      </View>
    )
  }
  // return (
  //   <View style={{ flex: 1,
  //   alignItems: 'center',
  //   }}>
  //     <ScrollView style={{width:"95%"}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        
  //       <View style={{padding:8, borderRadius:10, width:"100%", backgroundColor:'white', marginVertical:20,
  //                     shadowColor: "#000",
  //                     shadowOffset: {
  //                         width: 0,
  //                         height: 2,
  //                     },
  //                     shadowOpacity: 0.25,
  //                     shadowRadius: 4.84,    
  //                     elevation: 5,}}>
  //         <TouchableOpacity onPress={edit}><Icon style={{alignSelf:"flex-end"}} name="edit" size={24} color="black" type='material'/></TouchableOpacity>
  //         <Image style={{width: 150, height: 150, marginBottom:50, alignSelf:'center', borderRadius:100}}
  //               source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/xpressfood-ce2d3.appspot.com/o/avatar.jpg?alt=media&token=9418d2e0-9880-4e74-8209-d2d01f29f471' }}/>
  //       </View>
  //       <View style={{paddingHorizontal:10}}>
  //       <View style={{flexDirection:'row', marginTop:10}}>
  //         <View style={{width:'48%', marginRight:10}}>
  //           <Text>First Name:</Text>
  //           <TextInput style={{marginTop:5, backgroundColor:'white', paddingHorizontal:10, borderColor:"lightgrey", borderRadius:5,  padding:3}} value={details.fname} onChangeText={(val)=>setDetails({...details, fname:val})} editable={!disabled}></TextInput>
  //         </View>
  //         <View style={{width:'48%', marginLeft:10}}>
  //           <Text>Last Name:</Text>
  //           <TextInput style={{marginTop:5, backgroundColor:'white', paddingHorizontal:10, borderColor:"lightgrey", borderRadius:5,  padding:3}} value={details.lname} onChangeText={(val)=>setDetails({...details, lname:val})} editable={!disabled}></TextInput>
  //         </View>
  //       </View>
  //       <View style={{flexDirection:'row', marginTop:10}}>
  //         <View style={{width:'50%'}}>
  //           <Text style={{marginTop:15}}>Phone Number:</Text>
  //           <TextInput style={{marginTop:5, backgroundColor:'white', paddingHorizontal:10, borderColor:"lightgrey", borderRadius:5,  padding:3}} value={details.phone} onChangeText={(val)=>setDetails({...details, phone:val})} editable={!disabled}></TextInput>
  //           <Text style={{marginTop:15}}>Date of Birth:</Text>
  //         </View >
  //       </View>


  //       <Button mode='contained' style={{marginTop:20, padding:5, borderColor:"blue"}} disabled={disabled} onPress={handleProfileUpdate} >Update</Button> 
  //       </View>
  //     </ScrollView>

  //   </View>

  // );
//   }
}

const styles = StyleSheet.create({
  listHeader : {  fontSize:20,
    color:colors.grey2,
    paddingBottom:10,
    marginLeft:12,
    fontWeight : "bold",
    paddingVertical : 10
    
    },
})