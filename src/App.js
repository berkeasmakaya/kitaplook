import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "./styles/color";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const mainPageHeaderOptions = {
  headerShown: true,
  headerTitle: "Kitaplook",
  headerStyle: { backgroundColor: color.blue },
  headerTintColor: color.white,
  headerTitleStyle: { fontFamily: "Pacifico-Regular", fontSize: 25 },
}

const AuthStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const AppStack = ()=>{
  return(
    <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
      <Tab.Screen name="MainPage" component={MainPage} options={{
        ...mainPageHeaderOptions,
        tabBarIcon:({focused})=>(
          <Icon name="home-circle" size={30} color={focused ? color.blue : color.black}/>
        )
      }}/>
      <Tab.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false, tabBarIcon:({focused})=>(
        <Icon name="book-search" size={30} color={focused ? color.blue : color.black}/>
      )}}/>
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{headerShown:false, tabBarIcon:({focused})=>(
        <Icon name="account-circle" size={30} color={focused ? color.blue : color.black}/>
      )}}/>
    </Tab.Navigator>
  ) 
}

function App(){ 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
        <Stack.Screen name="AppStack" component={AppStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 