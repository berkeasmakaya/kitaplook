import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const device_size = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.beige
    },
    inner_container:{
        flex:1,
        justifyContent:"center"
    },
    input_container:{
        height:device_size.height*0.6,
        justifyContent:"space-between",
    },
    input_box:{
    },
    input_text:{
        fontFamily:"Pacifico-Regular",
        marginLeft:"5.5%",
        fontSize:16,
        color:color.brown
    },
    button_container:{
        marginTop:30,
    },
    error:{
        color:color.darkBrown,
        fontSize:15,
        textAlign:"center",
        fontFamily:"Pacifico-Regular",
        marginTop:-10,
        marginBottom:10,
    },
    input_inner_box:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:7,
    },
    date:{
        fontFamily:"Pacifico-Regular",
        color:color.brown,
        fontSize:17,
    },
})