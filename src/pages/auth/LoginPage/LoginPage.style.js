import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import color from "../../../styles/color";

const device_Size = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.beige,
        justifyContent: "space-between"
    },
    logo_container: {
        flex: 1.5,
    },
    logo: {
        width: "100%",
        height: "100%"
    },
    input_container: {
        flex: 1,
        justifyContent: "center",
    },
    input_box: {
        paddingVertical: 10,
    },
    input_text: {
        fontFamily: "Pacifico-Regular",
        //fontWeight:"bold",
        marginLeft: "5.5%",
        fontSize: 17,
        color: color.brown
    },
    button_container: {
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 0,
        paddingVertical: 10,
    },
    error: {
        color: color.darkBrown,
        fontSize: 15,
        textAlign: "center",
        fontFamily: "Pacifico-Regular",
        marginTop: -10,
        marginBottom: 10,
    }
})