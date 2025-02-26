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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} options={{headerShown:false}}/>
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{headerShown:false}}/>
      <Tab.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
      
    </Tab.Navigator>
  ) 
}
console.log("SearchPage:", SearchPage);
console.log("ProfilePage:", ProfilePage);

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