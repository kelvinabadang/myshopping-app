import React from 'react'
import { useNavigation } from "@react-navigation/core";
import {View,Text, Image,StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({item}){
  const navigation = useNavigation()

 return (
        <View style={style.card}>
         <TouchableOpacity onPress={()=>navigation.navigate('Details' , item)}>
            <View style={{height: 100, alignItems: 'center'}}>
                    <Image source={item.img} style={{flex: 1, resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>
                {item.name}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}} >
                <Text style={{fontSize: 25, fontWeight: 'bold'}} >${item.price}</Text>
            </View>
           
            
           

            </TouchableOpacity>
            
        </View>

    )
}

const style=StyleSheet.create({
  card: {
    height: 230,
    backgroundColor: '#f7f7ff',
    width: Dimensions.get("screen").width/2-12,
    marginHorizontal: 2,
    borderRadius: 10,
    margin: 10,
    padding: 15
  }
});