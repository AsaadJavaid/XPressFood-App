import { StyleSheet, Text, View, Image, ScrollView, Platform } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import { Icon } from '@rneui/base/dist/Icon'

const PizzaResult = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ScrollView>
                <View style ={styles.header}>
                    <Image
                        style ={styles.backgroundImage}
                        source ={{uri:"https://flyingdelivery.pk/wp-content/uploads/2021/11/pizza-recipe-pizza-to-make-at-home-quick-and-easy-recipes.jpg"}}
                    />
                </View>

                <View style ={{alignItems : "center"}}>
                    <Text style ={styles.title}>Choose from Below</Text>
                </View>
                <View style ={styles.goback}>
                        <Icon 
                            name ="reply"
                            type = "material-icons-two-tone"
                            color = "black"
                            size ={40}
                            onPress ={()=>{navigation.goBack()}}
                        />
                </View>

                
        </ScrollView>
    </View>
  )
}

export default PizzaResult

const styles = StyleSheet.create({
    container:{flex:1
    },
    fill: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      header: {
        width:"100%",
        backgroundColor: colors.buttons,
        overflow: 'hidden',
        height: 180
      },
      backgroundImage: {
        width: "100%",
        height: 180, 
        resizeMode: 'cover',
      },
      title: {
        color: 'black',
        fontSize: 28,
        fontWeight:"bold",
      },
      goback:{position:"absolute",
      top:35,
       left:15
     },
})