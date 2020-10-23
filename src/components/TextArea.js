import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Colors from '../res/Colors'

const TextArea = ({placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                multiline={true}
                placeholder={placeholder}
                placeholderTextColor={Colors.bgColor}
                style={{fontSize:17}}
            />
        </View>
    )
}

export default TextArea

const styles = StyleSheet.create({
    container: {
        height: scale(230),
        backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10,
        borderRadius: scale(16), marginVertical: 10
    }
})
