import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import LogOut from "../LogOut/LogOut";
import styles from './CustomDrawerContent.style'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "../../styles/color";
import { KeyboardAvoidingView, Platform } from "react-native";


const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const goToEditPage = () => {
        navigation.navigate("ProfilePageDrawer", { screen: "EditProfilePage" })
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.main_container}
        >
            <DrawerContentScrollView {...props} contentContainerStyle={styles.inner_container}>
                <View style={styles.content_container}>
                    <TouchableOpacity style={styles.content_box} onPress={goToEditPage}>
                        <Icon name="account-edit" size={40} color={color.beige} />
                        <Text style={styles.content_text}>Profili Düzenle</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottom_container}>
                <LogOut />
            </View>
        </KeyboardAvoidingView>
    )
}

export default CustomDrawerContent;