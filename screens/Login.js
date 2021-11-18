import React  from "react";
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from "react-native";
import '../globals'


export default function Login(params) {
  
  const navigation = params.navigation;
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}></View>
      <Image
        style={{
          transform: [{ rotate: "360deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }} 
        source={{
          uri: "https://www.novidarte.ch/cosmoshop/default/pix/r/detail/corona_bedarf_diagnostik_-_covid_tests_lysun.png",
        }}
      />

    <View style={styles.BottomView}>
        <Text style={{color: '#fff', fontSize:40, fontWeight:'bold', marginLeft:60, marginTop:20,}}>
          Welcome {'\n'}
          back
        </Text>
           <View style={{
             width:'100%',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              }}
              >
             <TextInput placeholder={"Email address*"} placeholderTextColor={"#fff"} style={{
               width:'90%',
               borderWidth: 1,
               borderColor: '#fff',
               height: 52,
               borderRadius: 10,
               paddingLeft: 5,
               marginTop: 10,
               color:'#fff',

               }}
                />
                 <TextInput placeholder={"password*"} secureTextEntry={true} placeholderTextColor={"#fff"} style={{
               width:'90%',
               borderWidth: 1,
               borderColor: '#fff',
               height: 52,
               borderRadius: 10,
               paddingLeft: 5,
               marginTop: 10,
               color:'#fff',

               }}
                />
                <TouchableOpacity style={{
                  width:'90%',
                  color:'#000',
                  height:52,
                  backgroundColor:'#fff',
                  borderRadius:10,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                 onPress={()=> global.isLoggedIn=true }
                

                 >
                  <Text style={{fontSize:20, fontWeight:'bold',}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  width:'90%',
                  color:'#000',
                  height:52,
                  backgroundColor:'#fff',
                  borderRadius:10,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  }}
                 onPress={()=>navigation.navigate('Register')}>
                  <Text style={{fontSize:20, fontWeight:'bold',}}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style=
                  {{
                  width:'90%',
                  borderRadius:10,
                  marginTop:10,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                 }}
                   onPress={()=>navigation.navigate('Password')} >
                  <Text style={{fontSize:20, fontWeight:'bold', color: '#ADD8E6'}}>forgot password?</Text>
                  
                </TouchableOpacity>
           </View>
           
    </View>

    </View>
  );
  }

  const styles =StyleSheet.create({
    mainView: {
      
      marginTop:40,
      flex:1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#fff',
    },
    TopView: {
      width:'100%',
      height:'20%',
      backgroundColor:'#fff',
      
 
    },
    BottomView: {
      width:'100%',
      height: '80%',
      backgroundColor:'#000',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,


    }
  });