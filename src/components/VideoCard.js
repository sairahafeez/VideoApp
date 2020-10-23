import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../res/Colors'

const VideoCard = () => {
    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{ borderRadius: 20 }} source={{ uri: "https://media.istockphoto.com/photos/poland-radom-st-john-the-baptist-church-picture-id970767444?k=6&m=970767444&s=612x612&w=0&h=ISe6sHUh9bEdKQoU5QkYdy38OhPJiq3x6WnwpCK4HnU=" }} style={styles.imageBackground}>
                <View style={styles.iconContainer}>
                    <Ionicons name={'play'} color={Colors.white} size={20} />
                </View>
                <Text style={styles.text}>Stratosphoros MC</Text>
            </ImageBackground>

            <ImageBackground imageStyle={{ borderRadius: 20 }} source={{ uri: "https://media.istockphoto.com/photos/poland-radom-st-john-the-baptist-church-picture-id970767444?k=6&m=970767444&s=612x612&w=0&h=ISe6sHUh9bEdKQoU5QkYdy38OhPJiq3x6WnwpCK4HnU=" }} style={styles.imageBackground}>
                <View style={styles.iconContainer}>
                    <Ionicons name={'play'} color={Colors.white} size={20} />
                </View>
                <Text style={styles.text}>Stratosphoros MC</Text>
            </ImageBackground>


        </View>
    )
}

export default VideoCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10
    },
    iconContainer:{
        height: scale(60), width: scale(60), borderRadius: 60, backgroundColor: Colors.bgColor, justifyContent: 'center', alignItems: 'center'
    },
    imageBackground: {
        height: scale(115),
        width: scale(125),
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontWeight: '700',
        color: Colors.white
    }
})
