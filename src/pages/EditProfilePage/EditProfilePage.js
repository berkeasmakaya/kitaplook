import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Input from "../../components/Input/Input";
import styles from './EditProfilePage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from "../../components/Button/Button";
import DatePicker from "react-native-date-picker";
import color from "../../styles/color";
import { formatDate } from "../../utils/dateUtils";


function EditProfilePage({ navigation }) {
    const [date, setDate] = useState(null)
    const [open, setOpen] = useState(false)

    
    const goToLoginPage = () => {
        navigation.navigate("LoginPage")
    }
    const initialFormValues = {
        firstname: '',
        lastname: '',
        username: '',
        phonenumber: '',
        birthday: ''
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
    const handleFormSubmit = (values) => {
        const phoneNumber = values.phonenumber ? values.phonenumber : "";
        const birthDate = formatDate(date);

        dispatch(setFirstName(values.firstname))
        dispatch(setLastName(values.lastname))
        dispatch(setUserName(values.username))
        dispatch(setPhoneNumber(phoneNumber))
        if (birthDate) {
            dispatch(setBirthday(birthDate))
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
                                <View style={styles.input_container}>
                                    <View style={styles.input_box}>
                                        <Text style={styles.input_text}>İsim</Text>
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
                                        <Text style={styles.input_text}>Soyisim</Text>
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
                                        <Text style={styles.input_text}>Kullanıcı Adı</Text>
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
                                    <Button text="Kaydet" onPress={handleSubmit} />
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default EditProfilePage;
