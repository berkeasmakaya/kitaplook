import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from "../../styles/color";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "@react-native-firebase/auth";
import CustomAlert from "../CustomAlert/CustomAlert";

const LogOut = () => {
    const navigation = useNavigation();
    const [alertVisible, setAlertVisible] = useState(false)

    const showAlert = () => {
        setAlertVisible(true)
    }
    const handleConfirmLogOut = async () => {
        setAlertVisible(false); // Modal'ı kapat
        handleLogOut()

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

    return (
        <>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={showAlert}>
                <Icon name="logout" size={30} color={color.brown} />
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