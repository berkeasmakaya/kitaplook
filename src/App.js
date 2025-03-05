import React from "react";
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
import { AlertNotificationRoot } from "react-native-alert-notification";
import LogOut from "./components/LogOut/LogOut";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const headerOptions = {
  headerShown: true,
  headerTitle: "Kitaplook",
  headerTitleAlign:"flex-start",
  headerStyle: { backgroundColor: color.beige },
  headerTintColor: color.darkBrown,
  headerTitleStyle: { fontFamily: "Pacifico-Regular", fontSize: 23 },
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle:{backgroundColor:color.beige}}}>
      <Tab.Screen name="MainPage" component={MainPage} options={{
        ...headerOptions,
        tabBarIcon: ({ focused }) => (
          <Icon name="home-circle" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        )
      }} />
      <Tab.Screen name="SearchPage" component={SearchPage} options={{
        ...headerOptions,
        tabBarIcon: ({ focused }) => (
          <Icon name="book-search" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        )
      }} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{
        ...headerOptions,
        headerRight: ()=>(
          <LogOut />
        ),
        tabBarIcon: ({ focused }) => (
          <Icon name="account-circle" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        )
      }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 