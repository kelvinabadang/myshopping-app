import React from 'react';
import { useNavigation } from "@react-navigation/core";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = ({route}) => {
    const navigation = useNavigation()
    const item = route.params
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
           <View style={style.header} >
            <Ionicons name="cart-outline" size={28}/>   
           </View>
           <View style={style.imageContainer} >
               <Image source={item.img} style={{resizeMode: 'contain', flex: 1}} />
           </View>
           <View style={style.detailsContainer} >
               <View style={{marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                   <Text style={{fontSize: 22, fontWeight: 'bold'}} >{item.name}</Text>
                   <View style={style.priceTag}>
                       <Text style={{marginLeft: 15, color: 'white', fontWeight: 'bold', fontSize: 16}} >${item.price}</Text>
                   </View>
               </View>
               <View style={{paddingHorizontal: 20, marginTop: 10}} >
                   <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
                   <Text style={{color: 'grey', fontSize: 16, lineHeight: 22, marginTop: 20}} >{item.about}</Text>
               </View>
               <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
                       <View style={{flexDirection: 'row', alignItems: 'center'}} >
                           <View style={style.borderBtn} >
                               <Text style={style.borderBtnText}>-</Text>
                           </View>
                           <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold'}} >1</Text>
                           <View style={style.borderBtn} >
                               <Text style={style.borderBtnText}>+</Text>
                           </View>
                       </View>
                       <View style={style.buyBtn} >
                       <TouchableOpacity onPress={()=>navigation.navigate('Carts' , item)}>
                           <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}} >Add to Carts</Text>
                      </TouchableOpacity>
                       </View>
                   </View>
                  
           </View>
       </SafeAreaView>
    );
};

const style = StyleSheet.create({

    header: {
        paddingHorizontal:20, 
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    detailsContainer: {
        flex: 0.55,
        backgroundColor: 'white',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },

    priceTag: {
        backgroundColor: "#4189ca",
        width: 100,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: "center"
    },
    borderBtnText: {
      fontWeight: 'bold',
      fontSize: 28
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: "#4189ca",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
}
})

export default Details;