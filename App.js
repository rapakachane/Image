import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Images from './Images';

export default function App() {
  const[image,setImage] = useState(require('./assets/Mmaletsunyane.jpg'));

    function happyImage(){
        setImage(require('./assets/Mmaletsunyane.jpg'));
        
    }
    function sadImage(){
        setImage(require('./assets/long.png'));
    }
    function okImage(){

    }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
         <TouchableOpacity>
          <Ionicons name="arrow-back-circle" size={24} color="#f5f5f5" />
         </TouchableOpacity>   
        <Text style={styles.textHeader}>My Gallery</Text>
        <TouchableOpacity>
         <AntDesign name="bars" size={24} color="#f5f5f5" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>

        <Images image={image} />

      </View>
      <View style={styles.footer}>
       
      <TouchableOpacity onPress={happyImage}>
      <Image style={styles.image} source={require('./assets/Mmaletsunyane.jpg')} resizeMode="cover" />
      <Text style={styles.text}>Mmaletsunyane</Text> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={sadImage}>
        <Image style={styles.image} source={require('./assets/long.png')} />
        <Text style={styles.text}>Victoria</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2C3539',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    fontSize:20,
    color:'#f2f2f2',
    fontWeight: 'bold',
  },
  header:{

    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 10,
    padding:10,
    width:'100%',
  },

  body: {

    flex:3,
    marginTop:20,
    width:'90%',
    
    backgroundColor: '#f5f5f5',
    borderRadius:30,
  
    alignItems:'center'
  
  },

  footer: {
    flex:1,
    backgroundColor:'#2C3539',
    width:'100%',
    height:'80%',
    //marginBottom:4,
    
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-evenly'
  },

  image:{  
    height: 80,
    width: 80,
    borderRadius:50  
    },

  text:{
    fontSize:15,
    alignSelf:'center',
    color:'#ffd'
  }  
});
