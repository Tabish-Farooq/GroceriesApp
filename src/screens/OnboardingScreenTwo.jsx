import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageLogin from "../components/ImageLogin";
import InputLogin from "../components/InputLogin";
import InputBtns from "../components/InputBtns";


const OnboardingScreenTwo = () =>{
    return(
        <View style={Styles.container}>
            <ImageLogin/>
            <InputLogin/>
            <InputBtns/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    }
})

export default OnboardingScreenTwo;