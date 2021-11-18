import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import BackIcon from 'react-native-vector-icons/Feather';

export default function Password(params) {
  const navigation = params.navigation;
         return (          
            <View style={styles.mainView}>
             <View style={styles.TopView}></View>
      

             <View style={styles.BottomView}>
             <BackIcon name="chevron-left" size={60} color={'#fff'}
               onPress={()=>navigation.navigate('Login')}
             />
             <TextInput placeholder={"Email address"} placeholderTextColor={"#fff"} style={{
               width:'90%',
               borderWidth: 1,
               borderColor: '#fff',
               height: 52,
               borderRadius: 10,
               paddingLeft: 5,
               marginTop: 20,
               margin: 10,
               color:'#fff',

               }}
             />
             
             <TextInput placeholder={"password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={{
               width:'90%',
               borderWidth: 1,
               borderColor: '#fff',
               height: 52,
               borderRadius: 10,
               paddingLeft: 5,
               marginTop: 20,
               margin: 10,
               color:'#fff',

               }}
             />
              <TextInput placeholder={" Confirm password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={{
               width:'90%',
               borderWidth: 1,
               borderColor: '#fff',
               height: 52,
               borderRadius: 10,
               paddingLeft: 5,
               marginTop: 20,
               margin: 10,
               color:'#fff',

               }}
             />   
             <TouchableOpacity style={{
                  width:'90%',
                  color:'#000',
                  height:52,
                  backgroundColor:'#fff',
                  borderRadius:10,
                  marginTop:20,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  margin: 10,
                 }}
                 onPress={()=>navigation.navigate('Home')}
                 >
                  <Text style={{fontSize:20, fontWeight:'bold',}}>verify</Text>
                </TouchableOpacity>   
    </View>

    </View>
       );
   }
   const styles =StyleSheet.create({
    mainView: {
      
      marginTop:5,
      flex:1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#fff',
    },
    TopView: {
      width:'100%',
      height:'10%',
      backgroundColor:'#fff',
      
 
    },
    BottomView: {
      width:'100%',
      height: '90%',
      backgroundColor:'#000',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,


    }
  });