import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { scale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Header from '../components/Header'
import InputText from '../components/InputText'
import TextArea from '../components/TextArea'
import Colors from '../res/Colors'

const ContactUsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header backArrow={true} openDrawer={()=>navigation.openDrawer()} goback={() => navigation.navigate('Home')}/>
            <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>Contact Us</Text>
                <Text style={styles.textStyle}>or email us at visionradiouk@hotmail.com</Text>
                <Text style={styles.textStyle}>or text us 0790834081</Text>
            </View>
            <View style={{ flex: 0.8, paddingHorizontal: 35 }}>
                <InputText placeholder={'Name'} />
                <InputText placeholder={'Email'} />
                <TextArea placeholder={'Message'} />
                <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                    <View style={styles.sendContainer}>
                        <Feather name={'send'} color={Colors.white} size={32} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContactUsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
    },
    textContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontWeight: '600',
        fontSize: 30,
        color: Colors.white
    },
    textStyle: {
        color: Colors.white,
        paddingTop: 5,
        fontWeight: '600'
    },
    sendContainer: {
        height: scale(65),
        width: scale(65),
        borderRadius: scale(65),
        backgroundColor: Colors.lightPurple,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
