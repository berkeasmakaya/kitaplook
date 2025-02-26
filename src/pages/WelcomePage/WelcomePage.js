import React from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import styles from './WelcomePage.style';
import Button from "../../components/Button/Button";

function WelcomePage({navigation}) {

    const goToRegisterPage = () => {
        navigation.navigate("RegisterPage")
    }

    const goToLoginPage = () => {
        navigation.navigate("LoginPage")
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView style={{flex:1}}>

                <View style={styles.logo_container}>
                    <Image
                        source={require('../../assets/kitaplook_logo.png')}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                </View>

                <View style={styles.header_container}>
                    <Text style={styles.header}>Welcome To KitapLook!</Text>
                </View>
                
                <View style={styles.button_container}>
                    <Button text="Giriş Yap" onPress={goToLoginPage}/>
                    <Button text="Kayıt Ol" onPress={goToRegisterPage}/>
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default WelcomePage;