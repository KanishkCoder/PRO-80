import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class starMap extends Component{
    constructor(){
        super();
        this.state={
            latitude: {},
            longitude: {}
        }
    }

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                <WebView
                scalesPageToFit={true}
                source={{uri:'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
                style={{marginTop:20, marginBottom:20 }} />
                <TextInput
                style={{height:40, borderColor: 'gray', borderWidth:1 }}
                placeholder='Enter your latitude'
                placeholderTextColor='black'
                onChangeText={(text)=>{
                    this.setState({
                        latitude: text
                    })
                }} />
                <TextInput
                style={{height:40, borderColor: 'gray', borderWidth:1 }}
                placeholder='Enter your longitude'
                placeholderTextColor='black'
                onChangeText={(text)=>{
                    this.setState({
                        longitude: text
                    })
                }} />
            </View>
        )
    }
}