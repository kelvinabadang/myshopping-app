import React ,{useState} from "react";
import {View, StyleSheet,Text, Image, TouchableOpacity,TextInput, ScrollView} from "react-native";

 

export default function Home(params) {
  const navigation = params.navigation;
  const [searchInput,setSearchInput] =  useState('')
   return(
     <ScrollView style={styles.mainView}>
       <Image
        style={{
          transform: [{ rotate: "360deg" }],
          borderRadius: 20,
          marginLeft:10,
          width: 200,
          height: 100,
          marginTop:20,
        }} 
        source={{
          uri: "https://www.novidarte.ch/cosmoshop/default/pix/r/detail/corona_bedarf_diagnostik_-_covid_tests_lysun.png",
        }}
      />
        <TextInput onChangeText={ (text) =>setSearchInput(text)} value={searchInput} placeholder={"Enter Brand"}placeholderTextColor={"#000"} style={{
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
              <TouchableOpacity style={{
                  width:'100%',
                  color:'#fff',
                  height:80,
                  backgroundColor:'#000',
                  borderRadius:30,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                 onPress={()=>navigation.navigate('Home', { screen: 'Nike'}) }
                

                 >
                  <Text style={{fontSize:20, color:'#fff', fontWeight:'bold',}}>NIKE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width:'100%',
                  color:'#fff',
                  height:80,
                  backgroundColor:'#000',
                  borderRadius:30,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                 onPress={()=>navigation.navigate('Home', { screen: 'Adidas'}) }
                

                 >
                  <Text style={{fontSize:20, color:'#fff', fontWeight:'bold',}}>adidas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width:'100%',
                  color:'#fff',
                  height:80,
                  backgroundColor:'#000',
                  borderRadius:30,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                 onPress={()=>navigation.navigate('Home', { screen: 'Puma'}) }
                

                 >
                  <Text style={{fontSize:20, color:'#fff', fontWeight:'bold',}}>Puma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width:'100%',
                  color:'#fff',
                  height:80,
                  backgroundColor:'#000',
                  borderRadius:30,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                 onPress={()=>navigation.navigate('Home', { screen: 'Vans'}) }
                

                 >
                  <Text style={{fontSize:20, color:'#fff', fontWeight:'bold',}}>vans</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <Image style={{width: 40, height: 50, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA"}} />
                <Image style={{width: 40, height: 50, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"}} />
                <Image style={{width: 40, height: 50, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://i.pinimg.com/originals/8b/c8/be/8bc8be698d73566fac6dd992fd9864b4.jpg"}} />
                <Image style={{width: 40, height: 50, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://i.pinimg.com/originals/f4/ae/61/f4ae616da5b1a5bbe5712394d76d4782.jpg"}} />
                </View>
                

     </ScrollView>
    

    
  );

}
const styles =StyleSheet.create({
  mainView: {
    flex:2, 
    backgroundColor:'#fff',
    
    
  }
});