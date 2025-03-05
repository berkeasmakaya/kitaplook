import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.cream
    },
    logo_container:{
        flex:1.5,
        justifyContent:"center",
    },
    logo:{
        height:'100%',
        width:'100%'
    },
    header_container:{
        flex:1,
    },
    header:{
        textAlign:"center",
        fontSize:30,
        fontFamily:"Pacifico-Regular",
        color:color.brown
    },
    button_container:{
        flex:1.5,
        justifyContent:"flex-start"
    }
})
