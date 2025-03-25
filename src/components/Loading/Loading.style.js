import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        position: 'absolute', // Tüm ekranı kaplaması için
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
        justifyContent: "center",
        alignItems: "center",
        zIndex:10
    },
    lottie:{
        width: 150, // Lottie animasyonunun boyutunu ayarlayabilirsin
        height: 150
    }
})