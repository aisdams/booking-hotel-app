import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {images, SIZES} from '../constants/images'

const welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={images.background} style={styles.background}>
        <Image source={images.logo} resizeMode='contain' style={styles.logo} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Do meditation, stay focused</Text>
        <Text style={styles.subtitle}>Life a healthy </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: SIZES.width * .8,
    height: SIZES.width * .8,
  },
  title: {
    fontSize: SIZES.width * 1.5,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.width * 1,
    color: '#fff',
    textAlign: 'center',
  },
})


export default welcome