import React ,{useState} from "react";
import { SafeAreaView, View, StyleSheet,Text, Image, ScrollView, TextInput, FlatList } from "react-native";
import  Card from '../components/Card'
import vans from '../const/vans'
 

export default function Nike(params) {
  const navigation = params.navigation;
  const [searchInput,setSearchInput] =  useState('')
  return (
    <ScrollView style={styles.mainView}>
    <Image
     style={{
       transform: [{ rotate: "360deg" }],
       borderRadius: 20,
       marginLeft:10,
       width: 100,
       height: 80,
       marginTop:20,
     }} 
     source={{
       uri: "https://i.pinimg.com/originals/f4/ae/61/f4ae616da5b1a5bbe5712394d76d4782.jpg",
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
            data={vans} 
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