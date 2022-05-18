import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Images = ({image}) => {
  return (
    <View style={styles.pic}>
      <Image source={image} style={styles.images} resizeMode="resize"/>
    </View>
  )
}

export default Images

const styles = StyleSheet.create({
    images:{
        height:'100%',
        width:'100%',
        
    },
    pic:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    }
})