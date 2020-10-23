import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { scale } from 'react-native-size-matters'
import Colors from '../res/Colors'

const TextImage = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 40 }}>
            <ImageBackground
                style={styles.imageStyle}
                imageStyle={{ borderRadius: 25 }}
                source={{ uri: 'https://media.istockphoto.com/photos/poland-radom-st-john-the-baptist-church-picture-id970767444?k=6&m=970767444&s=612x612&w=0&h=ISe6sHUh9bEdKQoU5QkYdy38OhPJiq3x6WnwpCK4HnU=' }}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>VRUK</Text>
                    <Text style={styles.textStyle}>DJ Kyle</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default TextImage

const styles = StyleSheet.create({
    imageStyle: {
        height: scale(370),
        top: 35,
        justifyContent: 'flex-end',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    titleStyle: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 35
    },
    textStyle: {
        color: Colors.white,
        fontWeight: '500'
    }
})
