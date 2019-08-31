import React, {Component} from "react";
import {ImageBackground, Text, View, ActivityIndicator, Image} from 'react-native';
import Login from "../Route/Index";

class Homescreen extends React.Component{
    state={
        role:true
    }
    render(){
    setTimeout(() => {
        this.setState({
            role:false
        })
    }, 3000);
    if (this.state.role){
        return(
            <ImageBackground style={{width:'100%', height:'100%'}} source={require('../image/photo6251553065626871882.jpg')}>
                <View style={{paddingTop:100, alignItems:'center'}}>
                <Image style={{width:200, height:200, borderRadius:250, marginBottom:30}} source={require('../image/images.jpeg')}/>
                    <ActivityIndicator size='large'/>
                    <Text style={{fontSize:24, color:'white', marginTop:30}}> WELCOME </Text>
                    
                </View>
            </ImageBackground>       

        );
    }
    return(
        <Login/>
    )
    }}

    export default Homescreen;