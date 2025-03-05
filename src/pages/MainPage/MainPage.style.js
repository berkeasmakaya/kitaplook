import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import color from "../../styles/color";

const device_Size = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.beige
    },
})