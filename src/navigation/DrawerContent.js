import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import Colors from '../res/Colors';

let user;
export default function DrawerContent(props) {

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity style={styles.back}>
            <Icon
              name={'md-return-down-back-outline'}
              size={30}
              color={Colors.white}
              onPress={() => props.navigation.closeDrawer()}
            />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'https://www.naijanews.com/wp-content/uploads/2017/04/cute-girl.jpg' }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Entypo
                name={'facebook-with-circle'}
                size={42}
                color={Colors.lightPurple}
              />
              <Entypo
                name={'twitter-with-circle'}
                size={42}
                color={Colors.lightPurple}
                style={{ paddingLeft: 10 }}
              />
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>

            <DrawerItem

              label="Reloaded"
              onPress={() => {
                props.navigation.navigate('Reloaded');
              }}
              labelStyle={styles.labelStyle}
            />
            <DrawerItem

              label="Song Request"
              onPress={() => {
                props.navigation.navigate('Request');
              }}
              labelStyle={styles.labelStyle}
            />
            <DrawerItem

              label="Contact Us"
              onPress={() => {
                props.navigation.navigate('Contact');
              }}
              labelStyle={styles.labelStyle}
            />

          </Drawer.Section>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={styles.textStyle}>
              {"\n"}{"\n"}{"\n"}
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets {"\n"}
            </Text>
            <Text style={styles.textStyle}>
              It is a long established fact that a reader will be distracted by the readable content.  {"\n"}
            </Text>
            <Text style={styles.textStyle}>
              It is a long established fact that a reader will be distracted by the readable content.  {"\n"}
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,

  },

  drawerSection: {
    marginTop: 30,
    color: Colors.white,
    justifyContent: 'center',
    paddingLeft: 40,
    marginBottom: 30
  },
  back: {
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  imageContainer: {
    height: scale(150),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageStyle: {
    height: scale(90),
    width: scale(90),
    borderRadius: 25
  },
  labelStyle: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold'
  },
  textStyle: {
    color: Colors.white
  },
});
