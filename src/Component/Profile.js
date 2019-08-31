import React, {Component} from 'react'
import {Text, View, TouchableOpacity, Image, TextInput, Dimensions, ScrollView} from 'react-native'

const {width:WIDTH}=Dimensions.get('window')

export default class profil extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView>
                <View style={{flex:2, justifyContent:'center', alignItems:'center', marginTop:50}}>
                <Image style={{width:150, height:150, borderRadius:150, marginBottom:50}} source={require('../image/user.png')}/>

                <View style={{flexDirection:'row',marginTop:15}}>
                    <View style={{justifyContent:'center', paddingRight:20}}>
                    </View>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Nama :</Text>
                    <TextInput style={{width:WIDTH - 80, borderBottomWidth:0.5, height:40, fontSize:16, paddingLeft:10}}
                    placeholder='Username'/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:15}}>
                    <View style={{justifyContent:'center', paddingRight:20}}>
                    </View>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Info :</Text>
                    <TextInput style={{width:WIDTH - 80, borderBottomWidth:0.5, height:40, fontSize:16, paddingLeft:10}}
                    placeholder='Status'/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:15}}>
                    <View style={{justifyContent:'center', paddingRight:20}}>
                    </View>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>No. Hp :</Text>
                    <TextInput style={{width:WIDTH - 80, borderBottomWidth:0.5, height:40, fontSize:16, paddingLeft:10}}
                    placeholder='+62'/>
                    </View>
                </View>
    
                </View>
            </ScrollView>
            </View>
        )
    }
}