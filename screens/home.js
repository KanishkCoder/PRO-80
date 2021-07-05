import React,{ Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity,
ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component{

    render(){
        return(
            <View style={styles.container} >
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                source={require("../assets/stars.gif")}
                style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Steller App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("spaceCrafts")} >
                    <Text style={styles.routeText} >Space Crafts</Text>
                    <Text style={styles.knowMore} > {"Know More ===>"} </Text>
                    <Text style={styles.bgDigit} >1</Text>
                    <Image
                    source={require("../assets/space_crafts.png")}
                    style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("starMap")} >
                    <Text style={styles.routeText} >Star Map</Text>
                    <Text style={styles.knowMore} > {"Know More ===>"} </Text>
                    <Text style={styles.bgDigit} >2</Text>
                    <Image
                    source={require("../assets/star_map.png")}
                    style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("dailyPic")} >
                    <Text style={styles.routeText} >Daily Pictures</Text>
                    <Text style={styles.knowMore} > {"Know More ===>"} </Text>
                    <Text style={styles.bgDigit} >3</Text>
                    <Image
                    source={require("../assets/daily_pictures.png")}
                    style={styles.iconImage} />
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white',
    },
    droidSafeArea:{
        marginTop:Platform.OS=== "android"? StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    iconImage:{
        position:'absolute',
        height:100,
        width:100,
        resizeMode:"contain",
        right:100,
        top:0
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15,
    },
    bgDigit:{
        position:"absolute",
        color:'rgba(183,183,183,0.5)',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
    },
})