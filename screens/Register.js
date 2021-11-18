import React, {useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import BackIcon from 'react-native-vector-icons/Feather';



export default function Register(params) {
  
  const [firstName,setFirstName] = useState('');
  const [surname,setSurname] = useState('');
  const [emailAddress,setEmailAddress] = useState('');
  const [mobileNumber,setMobileNumber] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const navigation = params.navigation;
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}></View>
      <Image
        style={{
          transform: [{ rotate: "360deg" }],
          borderRadius: 50,
          marginBottom: 10,
          width: 200,
          height: 200,
        }} 
        source={{
          uri: "https://www.novidarte.ch/cosmoshop/default/pix/r/detail/corona_bedarf_diagnostik_-_covid_tests_lysun.png",
        }}
      />

         <ScrollView style={styles.BottomView}>
             <BackIcon name="chevron-left" size={60} color={'#fff'}
                 onPress={()=>navigation.navigate('Login')}
             />
            <Text style={{color: '#fff', fontSize:40, fontWeight:'bold', marginLeft:60, marginTop:20,}}>
                 Create {'\n'}
                 Account
            </Text>
           <View style={{
             width:'100%',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              }}
              ></View>
             <TextInput onChangeText={ (text) =>setFirstName(text)} value={firstName} placeholder={"First Name"} placeholderTextColor={"#fff"} style={{
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
              <TextInput onChangeText={ (text) =>setSurname(text)} value={surname} placeholder={"Surname"} placeholderTextColor={"#fff"} style={{
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
             <TextInput onChangeText={ (text) =>setEmailAddress(text)} value={emailAddress} placeholder={"Email address"} placeholderTextColor={"#fff"} style={{
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
             <TextInput onChangeText={ (text) =>setMobileNumber(text)} value={mobileNumber} placeholder={"Mobile Number"} onChangeText={(text)=>setMobleNumwe} placeholderTextColor={"#fff"} style={{
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
             <TextInput onChangeText={ (text) =>setPassword(text)} value={password}placeholder={"password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={{
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
              <TextInput onChangeText={ (text) =>setConfirmPassword(text)} value={confirmPassword}placeholder={" Confirm password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={{
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
                 onPress={(createUser)=>navigation.navigate('Home')}
                 >
                  <Text style={{fontSize:20, fontWeight:'bold',}}>Register</Text>
                </TouchableOpacity>   
    </ScrollView>
           
           
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