import React,{ Component } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios'

export default class dailyPic extends Component{
    constructor(){
        super();
        this.state={
            apod:{}
        }
    }

    getApod=()=>{
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=5MZToQTtU16i72BnZ8Ysc6g3dCkpbaa3rQVMEtoX")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render(){
        return(
            <View style={styles.container} >
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                source={require('../assets/space.gif')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err)) }
                    >
                        
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}