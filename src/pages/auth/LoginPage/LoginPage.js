import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, Platform } from "react-native";
import styles from './LoginPage.style';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import color from "../../../styles/color";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@react-native-firebase/auth";

function LoginPage({ navigation }) {
    const goToRegisterPage = () => {
        navigation.navigate("RegisterPage")
    }

    const initialFormValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("E-mail formatına uygun girilmeli!")
            .required("E-mail alanı boş bırakılamaz!"),
        password: Yup.string()
            .required("Şifre boş bırakılamaz!")
            .min(6, "Şifre en az 6 karakter olmalı!"),
    });

    const handleFormSubmit = async (values) => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password)
            navigation.navigate("AppStack")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.gray }}>
            <KeyboardAwareScrollView
                enableOnAndroid={false}
                enableAutomaticScroll={true}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                extraHeight={0}
                enableResetScrollToCoords={true}
                keyboardOpeningTime={0} // not supported for android
                extraScrollHeight={0}
            >
                <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                    {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                        <>
                            <View style={styles.container}>
                                <View style={styles.logo_container}>
                                    <Image
                                        source={require('../../../assets/kitaplook_logo.png')}
                                        resizeMode="cover"
                                        style={styles.logo}
                                    />
                                </View>
                                <View style={styles.input_container}>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>E-mail</Text>
                                        <Input
                                            placeholder="Lütfen mail adresinizi giriniz..."
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                        />
                                        {touched.email && errors.email && (
                                            <Text style={styles.error}>{errors.email}</Text>
                                        )}
                                    </View>

                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Şifre</Text>
                                        <Input
                                            placeholder="Lütfen şifrenizi giriniz..."
                                            isSecure={true}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={styles.error}>{errors.password}</Text>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.button_container}>
                                    <Button text="Giriş Yap" onPress={handleSubmit} />
                                </View>

                                <View style={styles.footer}>
                                    <Text style={{ fontSize: 15 }}>Hesabınız Yok Mu ?  </Text>
                                    <TouchableOpacity onPress={goToRegisterPage}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>KAYIT OL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default LoginPage;