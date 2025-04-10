import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Input from "../../components/Input/Input";
import styles from './InfoPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from "../../components/Button/Button";
import DatePicker from "react-native-date-picker";
import color from "../../styles/color";
import { formatDate } from "../../utils/dateUtils";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setUserName, setBirthday, setPhoneNumber, resetUserInfo } from "../../redux/userSlice"
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import { checkUsername } from "../../services/api";


function InfoPage({ navigation }) {
    const [date, setDate] = useState(null)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetUserInfo());
        setDate(null)
    }, [dispatch])

    const goToLoginPage = () => {
        navigation.navigate("LoginPage")
    }
    const initialFormValues = {
        firstname: '',
        lastname: '',
        username: '',
        phonenumber: '',
    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required("İsim alanı boş bırakılamaz!"),
        lastname: Yup.string()
            .required("Soyisim alanı boş bırakılamaz!"),
        username: Yup.string()
            .required("Kullanıcı adı alanı boş bırakılamaz!"),
        phonenumber: Yup.string()
            .notRequired()
            .min(10, "Telefon numarası en az 10 haneli olmalıdır!")
            .max(11, "Telefon numarası en fazla 11 haneli olmalıdır!"),
    });
    const handleFormSubmit = async (values) => {
        console.log(values)
        const birthDate = formatDate(date);
        try {
            const result = await checkUsername(values.username)
            if (!result.available) {
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Hata",
                    textBody: "Bu kullanıcı adı zaten alınmış.",
                });
                return;
            }
            dispatch(setFirstName(values.firstname))
            dispatch(setLastName(values.lastname))
            dispatch(setUserName(values.username))
            dispatch(setPhoneNumber(values.phonenumber))
            if (birthDate) {
                dispatch(setBirthday(birthDate))
            }
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "Hata",
                textBody: "Bir sorun oluştu. Lütfen tekrar deneyin.",
            });
        }


        navigation.navigate("RegisterPage")
    }

    return (
        <SafeAreaView style={styles.container}>
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
                <Formik
                    initialValues={initialFormValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                        <>
                            <View style={styles.inner_container}>
                                <View style={styles.logo_container}>
                                    <Image
                                        source={require('../../assets/kitaplook_logo.png')}
                                        resizeMode="cover"
                                        style={styles.logo}
                                    />
                                </View>
                                <View style={styles.input_container}>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>İsim*</Text>
                                        <Input
                                            value={values.firstname}
                                            onChangeText={handleChange("firstname")}
                                            onBlur={handleBlur("firstname")}
                                            placeholder="Lütfen isminizi giriniz..."
                                        />
                                        {touched.firstname && errors.firstname && (
                                            <Text style={styles.error}>{errors.firstname}</Text>
                                        )}
                                    </View>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Soyisim*</Text>
                                        <Input
                                            value={values.lastname}
                                            onChangeText={handleChange("lastname")}
                                            onBlur={handleBlur("lastname")}
                                            placeholder="Lütfen soyisminizi giriniz..."
                                        />
                                        {touched.lastname && errors.lastname && (
                                            <Text style={styles.error}>{errors.lastname}</Text>
                                        )}
                                    </View>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Kullanıcı Adı*</Text>
                                        <Input
                                            value={values.username}
                                            onChangeText={handleChange("username")}
                                            onBlur={handleBlur("username")}
                                            placeholder="Bir kullanıcı adı oluşturunuz..."
                                        />
                                        {touched.username && errors.username && (
                                            <Text style={styles.error}>{errors.username}</Text>
                                        )}
                                    </View>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>Telefon Numarası</Text>
                                        <Input
                                            value={values.phonenumber}
                                            onChangeText={handleChange("phonenumber")}
                                            onBlur={handleBlur("phonenumber")}
                                            placeholder="Lütfen telefon numaranızı giriniz..."
                                            keyboardType="numeric"
                                        />
                                        {touched.phonenumber && errors.phonenumber && (
                                            <Text style={styles.error}>{errors.phonenumber}</Text>
                                        )}
                                    </View>
                                    <View style={[styles.input_box]}>
                                        <Text style={styles.input_text}>Doğum Günü</Text>
                                        <View style={styles.input_inner_box}>
                                            <Button text="Seç" theme="third" onPress={() => setOpen(true)} />
                                            {date && (
                                                <Text style={styles.date}>
                                                    Seçilen Tarih: {formatDate(date)}
                                                </Text>
                                            )}
                                        </View>

                                        <DatePicker
                                            title="Doğum Gününü Seç"
                                            confirmText="Onayla"
                                            cancelText="İptal Et"
                                            buttonColor={color.darkBrown}
                                            dividerColor={color.brown}
                                            mode="date"
                                            locale="tr"
                                            modal
                                            open={open}
                                            date={date || new Date()}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDate(date)
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={styles.button_container}>
                                    <Button text="Devam Et" onPress={handleSubmit} />
                                </View>
                                <View style={styles.footer}>
                                    <Text style={{ fontSize: 17, color: color.brown, fontFamily: "Pacifico-Regular", }}>Hesabınız Var Mı ?  </Text>
                                    <TouchableOpacity onPress={goToLoginPage}>
                                        <Text style={{ fontSize: 15, color: color.darkBrown, fontFamily: "Pacifico-Regular", }}>GİRİŞ YAP</Text>
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

export default InfoPage;