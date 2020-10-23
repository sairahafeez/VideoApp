import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../res/Colors'

const Header = ({ backArrow, openDrawer, goback }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.headerStyle, { flex: 0.2 }]}>
                    <Icon
                        onPress={openDrawer}
                        name={'md-menu-sharp'}
                        size={30}
                        color={
                            Colors.white
                        } />
                </View>
                <View style={[styles.headerStyle, { flex: 0.3 }]}>
                    <Image
                        source={{ uri: "https://www.naijanews.com/wp-content/uploads/2017/04/cute-girl.jpg" }}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={[styles.headerStyle, { flex: 0.2 }]}></View>
            </View>
            <View style={{flex:0.25,paddingLeft:30,}}> 
               {backArrow &&<Icon
                    onPress={goback}
                    name={'md-return-down-back-outline'}
                    size={40}
                    color={
                        Colors.lightPurple
                    } />}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: scale(130),
        
    },
    header: {
        flex:0.8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingTop:30,
        
    },
    headerStyle: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle: {
        height: scale(70),
        width: scale(70),
        borderWidth: 0.6,
        borderRadius: scale(70)
    },
})
