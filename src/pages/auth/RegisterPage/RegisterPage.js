import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, Platform } from "react-native";
import styles from './RegisterPage.style';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import color from "../../../styles/color";
import * as Yup from 'yup';
import { Formik } from 'formik';
//import auth from '@react-native-firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "@react-native-firebase/auth";


function RegisterPage({ navigation }) {
    const goToLoginPage = () => {
        navigation.navigate("LoginPage")
    }
    const initialFormValues = {
        email: '',
        password: '',
        repassword: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("E-mail formatına uygun girilmeli!")
            .required("E-mail alanı boş bırakılamaz!"),
        password: Yup.string()
            .required("Şifre boş bırakılamaz!")
            .min(6, "Şifre en az 6 karakter olmalı!"),
        repassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Şifreler Aynı Olmalıdır!')
            .required('Şifre Onayı Zorunludur!'),
    });
    const handleFormSubmit = async (values) => {
        console.log("Register button pressed");
        const auth = getAuth();
        try {
            console.log("Attempting to create user with", values.email);
            //await auth().createUserWithEmailAndPassword(values.email, values.password)
            await createUserWithEmailAndPassword(auth, values.email, values.password)
            console.log("User registration successful!");
            navigation.navigate("LoginPage")
        } catch (error) {
            console.log(error)
        }
        
        console.log(values)
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
                    {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
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
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            placeholder="Lütfen mail adresinizi giriniz..." 
                                        />
                                        {touched.email && errors.email && (
                                            <Text style={styles.error}>{errors.email}</Text>
                                        )}
                                    </View>

                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Şifre</Text>
                                        <Input 
                                            value={values.password}
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            placeholder="Lütfen şifrenizi giriniz..." 
                                            isSecure={true} 
                                        />
                                        {touched.password && errors.password && (
                                            <Text style={styles.error}>{errors.password}</Text>
                                        )}
                                    </View>

                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Şifre Tekrar</Text>
                                        <Input 
                                            value={values.repassword}
                                            onChangeText={handleChange("repassword")}
                                            onBlur={handleBlur("repassword")}
                                            placeholder="Lütfen şifrenizi tekrar giriniz..." 
                                            isSecure={true} 
                                        />
                                        {touched.repassword && errors.repassword && (
                                            <Text style={styles.error}>{errors.repassword}</Text>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.button_container}>
                                    <Button text="Kayıt Ol" onPress={handleSubmit}/>
                                </View>

                                <View style={styles.footer}>
                                    <Text style={{ fontSize: 15, color:color.darkBrown }}>Hesabınız Var Mı ?  </Text>
                                    <TouchableOpacity onPress={goToLoginPage}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15, color:color.darkBrown  }}>GİRİŞ YAP</Text>
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

export default RegisterPage;