import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from "../../styles/color";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "@react-native-firebase/auth";
import CustomAlert from "../modals/CustomAlertModal/CustomAlertModal";
import styles from './LogOut.style'

const LogOut = () => {
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false)

    const showAlert = () => {
        setAlertVisible(true)
    }

    const handleLogOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigation.navigate("AuthStack");
        } catch (error) {
            console.log("Çıkış başarısız:", error.message);
        }
    }

    const handleConfirmLogOut = async () => {
        setAlertVisible(false); 
        handleLogOut()
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={showAlert}>
                <Icon name="logout" size={40} color={color.darkRed} />
                <Text style={styles.text}>Çıkış Yap</Text>
            </TouchableOpacity>

            <CustomAlert
                isVisible={alertVisible}
                onClose={() => setAlertVisible(false)}
                title="Çıkış Yap"
                message="Çıkış yapmak istediğinize emin misiniz ?"
                onConfirm={handleConfirmLogOut}
            />
        </>
    )
}

export default LogOut;