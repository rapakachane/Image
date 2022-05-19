import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Images = ({image}) => {
  return (
    <View style={styles.pic}>
      <Image source={image} style={styles.images} resizeMode="cover"/>
    </View>
  )
}

export default Images

const styles = StyleSheet.create({
    images:{
        height:'90%',
        width:'90%',
        borderRadius:20,
        elevation:10,
        borderColor:'gray',
        borderBottomWidth:6,
        borderLeftWidth:6
    },
    pic:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    }
})