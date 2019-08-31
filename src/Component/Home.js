import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import Props from './Props'

class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView>
                <View style={Styles.container}>
                    <Props text='Rizqan News'/>
                </View>
            
            <View style={Styles.StatusPenuh}>
                <View style={Styles.Status}>
                    <Image style={Styles.ImgProf} source={require('../image/download.jpg')}/>
                    <View style={Styles.Status1}>
                        <Text style={Styles.Status1Text}>News Portal</Text>
                        <Text style={Styles.Status1Text1}>Sabtu, 31 Agustus 2019</Text>
                    </View>
                </View>
                <View style={Styles.StatusImg}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Berita1')}>
                    <Image style={Styles.ImgStatus} source={require('../image/images.png')}/>
                    </TouchableOpacity>
                </View>
                    <Text style={Styles.Status1Text2}>Developer React-Native</Text>
              </View>

              <View style={Styles.StatusPenuh}>
                <View style={Styles.Status}>
                    <Image style={Styles.ImgProf} source={require('../image/user.png')}/>
                    <View style={Styles.Status1}>
                        <Text style={Styles.Status1Text}>7Situs</Text>
                        <Text style={Styles.Status1Text1}>Sabtu, 31 Agustus 2019</Text>
                    </View>
                </View>
                <View style={Styles.StatusImg}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Berita2')}>
                    <Image style={Styles.ImgStatus} source={require('../image/images3.jpeg')}/>
                    </TouchableOpacity>
                </View>
                    <Text style={Styles.Status1Text2}>Developer React-Native</Text>  
              </View>
            </ScrollView>
            </View>
        )
    }
}
export default Home;

const Styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    ImgProf:{
        width:50,
        height:50,
        borderRadius:50,
        
    },
    Status:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    Status1:{
        paddingLeft:10
    },
    ImgStatus:{
        width: 250,
        height:150
    },
    StatusImg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    StatusPenuh:{
        borderBottomWidth:1,
        marginTop:10
    }, 
    Status1Text:{
        fontSize:20
    },
    Status1Text1:{
        fontSize:13,
        marginBottom:5
    },
    Status1Text2:{
        fontSize:14,
        marginBottom:5,
        paddingLeft:10
    }
})