import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import color from "../../../styles/color";

const device_Size = Dimensions.get("window");

export default StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:color.gray,
       justifyContent:"space-between"
    },
    logo_container:{
        flex:1.5,
        //backgroundColor:"red"
    },
    logo:{
        width:"100%",
        height:"100%"
    },
    input_container:{
        flex:1,
        justifyContent:"center",
        //backgroundColor:"blue"
    },
    input_box:{
        paddingVertical:10,
    },
    input_text:{
        fontWeight:"bold",
        marginLeft:"5.5%",
        fontSize:15,
        color:color.blue
    },
    button_container:{
    },
    footer:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:0,
        paddingVertical:10,
        //backgroundColor:"red"
    },
    error:{
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",
        textAlign:"center"
    }
})