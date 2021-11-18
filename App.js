import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Password from "./screens/Password";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Notifications from "./screens/Notifications";
import Carts from "./screens/Carts";
import Nike from "./screens/Nike";
import Adidas from "./screens/Adidas";
import Puma from "./screens/Puma";
import Vans from "./screens/Vans";
import Details from "./screens/Details";

const HomeScreen = () => {
  const HomeStack = createStackNavigator();
  return (<HomeStack.Navigator>
  <HomeStack.Screen
    name="MainHome"
    component={Home}
    options={{ title: "Home", headerShown: false}}
    />
    <HomeStack.Screen name="Nike" component={Nike}/>
    <HomeStack.Screen name="Details" component={Details}/>
    <HomeStack.Screen name="Adidas" component={Adidas}/>
    <HomeStack.Screen name="Puma" component={Puma}/>
    <HomeStack.Screen name="Vans" component={Vans}/>
  </HomeStack.Navigator>) 
}

function Main(){
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
              } else if (route.name === 'Carts') {
                iconName = focused ? 'ios-cart' : 'ios-cart-outline';
              }
            
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="Carts" component={Carts} />
        </Tab.Navigator>
  )
}

export default function App() {
  const MainNavigator = createStackNavigator();
  
   return (
     
    <View style={{ flex: 1 }}>
    
      <NavigationContainer>
        <MainNavigator.Navigator>
        { 
          global.isLoggedIn ?
          <MainNavigator.Group>
            <MainNavigator.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </MainNavigator.Group>
          : 
            <MainNavigator.Group>
              <MainNavigator.Screen name="Login" component={Login} />
              <MainNavigator.Screen name="Password" component={Password} />
              <MainNavigator.Screen name="Register" component={Register} />
            </MainNavigator.Group>
        }
        </MainNavigator.Navigator>       
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
