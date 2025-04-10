import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, Platform } from "react-native";
import styles from './LoginPage.style';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import color from "../../../styles/color";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";
import { getUserInfo } from "../../../services/api";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setUserName, setBirthday, setPhoneNumber } from "../../../redux/userSlice";
import { formatDate } from "../../../utils/dateUtils";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import Loading from "../../../components/Loading/Loading";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

function LoginPage({ navigation }) {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const goToRegisterPage = () => {
        navigation.navigate("InfoPage")
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
        setLoading(true)
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
            const uid = userCredential.user.uid;
            try {
                const userData = await getUserInfo(uid);
                const formattedDate = formatDate(userData.birthdate)
                dispatch(setFirstName(userData.name))
                dispatch(setLastName(userData.surname))
                dispatch(setUserName(userData.username))
                dispatch(setBirthday(formattedDate))
                dispatch(setPhoneNumber(userData.phone))

                setLoading(false)

                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: "Başarılı",
                    textBody: "Giriş Yapma İşlemi Başarılı",
                    autoClose: 500
                })

                navigation.navigate("AppStack")
            } catch (error) {
                setLoading(false)
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: "HATA",
                    textBody: "Bir Şeyler Yanlış Gitti.",
                    autoClose: 800
                })
            }
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "HATA",
                textBody: authErrorMessageParser(error.code),
                autoClose: 800
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
                                    <Text style={{ fontSize: 17, color: color.brown, fontFamily: "Pacifico-Regular", }}>Hesabınız Yok Mu ?  </Text>
                                    <TouchableOpacity onPress={goToRegisterPage}>
                                        <Text style={{ fontSize: 15, color: color.darkBrown, fontFamily: "Pacifico-Regular", }}>KAYIT OL</Text>
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