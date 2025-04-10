import React, {useState}from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, Platform } from "react-native";
import styles from './RegisterPage.style';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import color from "../../../styles/color";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import {createUser} from '../../../services/api';
import Loading from "../../../components/Loading/Loading";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";


function RegisterPage({ navigation }) {
    const [loading, setLoading] = useState(false)
    const userInfo = useSelector(state=>state.userInfo.userInfo)
    console.log(userInfo)

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
            setLoading(true)
            const auth = getAuth();
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
                const uid = userCredential.user.uid;
                try {
                    await createUser(uid,{
                        name:userInfo.firstname,
                        surname:userInfo.lastname,
                        username:userInfo.username,
                        birthdate:userInfo.birthday,
                        phone:userInfo.phonenumber,
                    })
                    setLoading(false)
                    Toast.show({
                        type:ALERT_TYPE.SUCCESS,
                        title:"Başarılı",
                        textBody:"Kayıt Olma İşlemi Başarılı.",
                        autoClose:500
                    })
                    navigation.navigate("AppStack")
                } catch (dbError) {
                    setLoading(false)
                    Toast.show({
                        type:ALERT_TYPE.DANGER,
                        title:"HATA",
                        textBody:"Bir Şeyler Yanlış Gitti.",
                        autoClose:800
                    })
                    await userCredential.user.delete();
                }
                
                
            } catch (error) {
                Toast.show({
                type:ALERT_TYPE.DANGER,
                title:"HATA",
                textBody: authErrorMessageParser(error.code),
                autoClose:800
            })
            setLoading(false)
            }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.gray }}>
            {loading && <Loading />}
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
                                    <Text style={{ fontSize: 17, color:color.darkBrown, fontFamily:"Pacifico-Regular", }}>Hesabınız Var Mı ?  </Text>
                                    <TouchableOpacity onPress={goToLoginPage}>
                                        <Text style={{ fontSize: 15, color:color.darkBrown, fontFamily:"Pacifico-Regular",  }}>GİRİŞ YAP</Text>
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