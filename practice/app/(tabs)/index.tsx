import { useState } from 'react';
import { Text, View, StyleSheet, Image , Pressable} from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function Profile() {
  const [fontsLoaded] = useFonts({
    Heading: require('../../assets/fonts/KaushanScript-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
     
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.innercontainer}>
        <View style={styles.card}>
          <View style={styles.img}>
            <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8iVW2REyAvHJp5aiVFGPFdpVC-s06qBctg&s'}}
            style = {styles.image}
            ></Image>
          </View>
        
          <Text style={styles.name}>Tejas Prashant katkar</Text>
          <Text style={styles.carrer}>APP DEVELOPER</Text>
          <Text style={styles.line}>I enjoy building apps that solve real-life problems.</Text>
        </View>

      </View>

      <View style={styles.btncontainer}>
        <Pressable style={styles.btn} onPress={() => router.push('/')}>
        <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Back</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={() => router.push('/')}>
        <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Home</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={() => router.push('/qualifications')}>
        <Text style={{fontSize:20 ,fontWeight:'bold', color:'rgb(123, 76, 76)'}}>Next</Text>
        </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    
  },
  innercontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(239, 121, 121, 0.3)',
    borderRadius:35,
    paddingHorizontal: 48,
    paddingVertical:32,
    borderColor:'rgba(243, 146, 43, 0.98)',
    borderWidth:3,
    
  },
  
  name :{
    justifyContent: 'center',
    fontSize: 32,
    fontFamily:'Heading',
    marginVertical:8,
    marginBottom:12,
  },

  carrer: {
    fontSize: 20,
    fontFamily: 'bold',  
    marginBottom:4,
    textDecorationLine:'underline'
  },
  
  line: {
    fontSize: 16,
    fontFamily: 'bold', // better for paragraph
    fontWeight:'400',
    maxWidth:270,
    textAlign:'center',
  },

  img: {
    padding: 2,
    borderWidth: 4,
    borderColor: 'rgba(243, 146, 43, 0.98)',
    borderRadius: 120, // slightly bigger than image
  },
  
  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },

  btn:{
    paddingVertical:10,
    paddingHorizontal:20,
    width:120,
    borderRadius:22,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ffa550d3',
  },

  btncontainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    
  }
});