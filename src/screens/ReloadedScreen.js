import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Header from '../components/Header'
import VideoCard from '../components/VideoCard'
import Colors from '../res/Colors'

const ReloadedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header backArrow={true} openDrawer={()=>navigation.openDrawer()} goback={() => navigation.navigate('Home')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Reloaded</Text>
                </View>
            </View>
            <ScrollView style={{width:'100%',paddingHorizontal:35,position:'absolute',top:scale(230)}}>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </ScrollView>
        </View>
    )
}

export default ReloadedScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        height:scale(410),
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.bgColor,
    },
    textContainer:{
        height:scale(100),
      
        justifyContent:'center',
        alignItems:'center',
        
    },
    textStyle:{
        fontWeight:'500',
        fontSize:35,
        color:Colors.white
    }
})
