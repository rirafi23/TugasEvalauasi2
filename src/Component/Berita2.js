import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const {width:WIDTH}=Dimensions.get('window')

export default class Berita1 extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Image style={Styles.Igm} source={require('../image/images3.jpeg')}/>
                <View style={Styles.ViewStyle}>
                    <Text>Selamat Datang</Text>
                </View>
                
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    Igm:{
        width:'100%',
        height:200
    },
    ViewStyle:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    }
})