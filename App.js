import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import Images from './Images';

export default function App() {
  const[image,setImage] = useState(require('./assets/HIPPO BAKUBUNG.jpg'));

    function HIPPO(){
        setImage(require('./assets/HIPPO BAKUBUNG.jpg'));
        
    }
    function LION(){
        setImage(require('./assets/LION BATAUNG.jpg'));
    }
    function TIGER(){
      setImage(require('./assets/TIGER BATLOKOA.jpg'));
    }
    function CAT(){
      setImage(require('./assets/CAT BASIA.jpg'));
    }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
         
        <Text style={styles.textHeader}>BASOTHO CLANS</Text>
        
      </View>

      <View style={styles.body}>

        <Images image={image} />

      </View>
      <View style={styles.footer}>
       
      <TouchableOpacity onPress={HIPPO}>
      <Image style={styles.image} source={require('./assets/HIPPO BAKUBUNG.jpg')} resizeMode="cover" />
      <Text style={styles.text}>HIPPOPOTOMUS</Text> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={LION}>
        <Image style={styles.image} source={require('./assets/LION BATAUNG.jpg')} />
        <Text style={styles.text}>LION</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={CAT}>
        <Image style={styles.image} source={require('./assets/CAT BASIA.jpg')} />
        <Text style={styles.text}>CAT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={TIGER}>
        <Image style={styles.image} source={require('./assets/TIGER BATLOKOA.jpg')} />
        <Text style={styles.text}>TIGER</Text>
      </TouchableOpacity>

      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    fontSize:28,
    color:'#f2f2f2',
    fontWeight: 'bold',
    
  },
  header:{

    alignContent:'center',
    alignItems:'center',
    marginTop: 10,
    padding:10,
    width:'100%',
  },

  body: {

    flex:3,
    marginTop:20,
    width:'100%',
    
    backgroundColor: '#f5f5f5',
    alignItems:'center'
  
  },

  footer: {
    flex:1,
    backgroundColor:'green',
    width:'100%',
    height:'80%',
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between'
  },

  image:{  
    height: 80,
    width: 80,
    borderRadius:20 
    },

  text:{
    fontSize:15,
    alignSelf:'center',
    color:'#ffd'
  }  
});
