import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TextImage from '../components/TextImage'
import Colors from '../res/Colors'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.7}}>
                <View style={styles.content}>
                    <Header openDrawer={()=>navigation.openDrawer()} />
                    <TextImage/>
                </View>
            </View>
            <Footer />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 0.85,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.bgColor,
    },
   

})
