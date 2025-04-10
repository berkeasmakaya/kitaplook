import { Platform } from "react-native";
import Config from "react-native-config";

export const createUser = async (uid, userData) => {
    //console.log("Gönderilen userData:", userData);
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        console.log(URL)
        const response = await fetch(`${URL}/register`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uid,
                ...userData
            })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //return await response.json();
    } catch (error) {
        console.log("createUser API Error: ", error)
        throw error
    }
}

export const getUserInfo = async (uid) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        console.log(URL)
        const response = await fetch(`${URL}/${uid}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        
        console.log("getUserInfo API Error: ", error)
    }
}

export const checkUsername = async (username) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
        const response = await fetch(`${URL}/check-username`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        });

        return await response.json();
    } catch (error) {
        console.log("checkUsername API Error: ", error);
        throw error;
    }
};


