import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { scale } from 'react-native-size-matters'
import Colors from '../res/Colors'

const InputText = ({placeholder}) => {
    return (
        <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={Colors.bgColor}
                        style={{ fontSize: 17 }} />
                </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    inputContainer: {
        height: scale(50), 
        backgroundColor: Colors.white, 
        borderRadius: scale(50), 
        paddingLeft: 25, 
        justifyContent: 'center',
        marginVertical:10
    }
})
