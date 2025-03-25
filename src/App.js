import '../gesture-handler.native'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "./styles/color";
import { AlertNotificationRoot } from "react-native-alert-notification";
import InfoPage from "./pages/InfoPage/InfoPage";
import CustomDrawerContent from './components/CustomDrawerContent/CustomDrawerContent';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import { TouchableOpacity } from 'react-native';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const headerOptions = {
  headerShown: true,
  headerTitle: "Kitaplook",
  headerTitleAlign: "left",
  headerStyle: { backgroundColor: color.beige, elevation: 0, shadowOpacity: 0 },
  headerTintColor: color.darkBrown,
  headerTitleStyle: { fontFamily: "Pacifico-Regular", fontSize: 23 },
}

const SearchPageStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='SearchPage' component={SearchPage} options={{headerShown:false}} />
      <Stack.Screen name='BookDetailPage' component={BookDetailPage} options={({navigation}) => ({
        ...headerOptions, 
        headerTitle: () => (
          <Text 
            style={{
              fontFamily: "Pacifico-Regular",
              fontSize: 23,
              color: color.darkBrown,
              textAlign: "left",
              flex: 1,
            }}
          >
            Kitaplook
          </Text>
        ),
        
        headerLeft: () => (
          <TouchableOpacity style={{marginLeft:-10}} onPress={() => { navigation.goBack() }}>
            <Icon name="arrow-left-circle" size={40} color={color.brown} />
          </TouchableOpacity>
        ),
        
      }
      )} />
    </Stack.Navigator>
  )
}

const ProfilePageDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: color.beige
        },
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name='ProfilePage' component={ProfilePage} options={({ navigation }) => ({
        ...headerOptions,
        headerLeft: () => null,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { navigation.openDrawer() }}>
            <Icon name="cog" size={30} color={color.brown} />
          </TouchableOpacity>
        )
      })} />
      <Drawer.Screen name='EditProfilePage' component={EditProfilePage} options={({ navigation }) => ({
        ...headerOptions,
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { navigation.goBack() }}>
            <Icon name="arrow-left-circle" size={40} color={color.brown} />
          </TouchableOpacity>
        )
      })} />
    </Drawer.Navigator>
  )
}


const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="InfoPage" component={InfoPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: color.beige } }}>
      <Tab.Screen name="MainPage" component={MainPage} options={{
        ...headerOptions,
        tabBarIcon: ({ focused }) => (
          <Icon name="home-circle" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        ),
      }} />
      <Tab.Screen name="SearchPageStack" component={SearchPageStack} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <Icon name="book-search" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        )
      }} />
      <Tab.Screen name="ProfilePageDrawer" component={ProfilePageDrawer} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name="account-circle" size={30} color={focused ? color.darkBrown : color.lightBrown} />
        )
      }} />
    </Tab.Navigator>
  )
}

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <MainApp />
    </GestureHandlerRootView>
    
  )
}

export default App; 