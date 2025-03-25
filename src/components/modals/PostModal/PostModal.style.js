import { StyleSheet } from "react-native";
import color from "../../../styles/color";
import { Dimensions } from "react-native";

const device_Size = Dimensions.get("window")

export default StyleSheet.create({
    modal:{
        margin:0
    },
    modalContainer: {
        flex:1,
        backgroundColor:color.beige,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    input_container:{
        margin:5,
        flex:1,
        borderWidth:1,
        borderColor:color.lightBrown,
        borderRadius:10,
    },
    input:{
        flex:1,
        padding:10,
        textAlignVertical: "top",
    },
    cam_container:{
        padding:10,
        alignItems:"center",
        borderTopWidth:0.5,
        borderColor:color.lightBrown,
        //backgroundColor:"red",      
    },
    image:{
        width: "100%",
        height: device_Size.width * 0.5, 
        //borderRadius: 10,
        margin: 10,
    }
});
