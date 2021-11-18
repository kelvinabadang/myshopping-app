import { useNavigation } from "@react-navigation/core";
import React ,{useState} from "react";
import { SafeAreaView, View, StyleSheet,Text, Image, ScrollView, TextInput, FlatList } from "react-native";
import  Card from '../components/Card'
import nike from '../const/nike'

export default function Nike(params) {
  const navigation = useNavigation()
  const [searchInput,setSearchInput] =  useState('')
  return (
    <ScrollView style={styles.mainView}>
    <Image
     style={{
       transform: [{ rotate: "360deg" }],
       borderRadius: 20,
       marginLeft:10,
       width: 100,
       height: 50,
       marginTop:20,
     }} 
      
     source={{
       uri:"https://i.pinimg.com/originals/2c/14/bb/2c14bb925684d2cd25c18bfb6181e011.jpg",
     }}
   />
     <TextInput onChangeText={ (text) =>setSearchInput(text)} value={searchInput} placeholder={"search item"}placeholderTextColor={"#000"} style={{
            width:'90%',
            borderWidth: 1,
            borderColor: '#808080',
            height: 39,
            borderRadius: 20,
            paddingLeft: 15,
            marginTop: 20,
            margin: 10,
            color:'#fff',
            display: 'flex',
            alignItems:'center'

            }}
          />
                  <FlatList 
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50
            }}
            showsVertical
            numColumns={2} 
            data={nike} 
            renderItem={({item}) => 
            <Card item={item} />}
        />
        </ScrollView>
  );
}
const styles =StyleSheet.create({
  mainView: {
    flex:1, 
    backgroundColor:'#fff',    
  }
});