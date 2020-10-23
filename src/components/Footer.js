import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../res/Colors'

const Footer = () => {
    return (
        <View style={styles.footer}>
                <View style={styles.footerIcons}>
                    <Icon
                        name={'mail-unread-sharp'}
                        size={27}
                        color={"#A8A9B6"}
                    />
                </View>
                <View style={[styles.footerIcons, { backgroundColor: Colors.primary, top: 25 }]}>
                    <Icon
                        name={'ios-play-sharp'}
                        size={20}
                        color={'#FFFFFF'} />
                </View>
                <View style={styles.footerIcons}>
                    <MaterialCommunityIcons
                        name={'music-note-plus'}
                        size={25}
                        color={'#A8A9B6'} />
                </View>
            </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flex: 0.3,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'

    },
    footerIcons: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(50),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 10

    }
})
