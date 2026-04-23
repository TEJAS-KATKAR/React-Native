import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const main = () => {
  const [fontsLoaded] = useFonts({
    inter: require('../../assets/fonts/Inter-font.ttf'),
    inter1: require('../../assets/fonts/Inter-SemiBold.ttf'),

  });
  return (
    <View style={{flex:1, backgroundColor:'#d4e0ee'}}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{alignItems:'flex-end',}}>
            <Text style={{alignItems:'flex-end' , color:'gray', }}>id: 12345689</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/image.png')}
            style={styles.img}/>

            <View style={styles.filter}>

            <View style={[styles.iconCircle, {backgroundColor: '#d4e0ee'}]}>
              <FontAwesome name="balance-scale" size={26} color="black" />
            </View>

            <View style={[styles.iconCircle, {backgroundColor: '#363842'}]}>
              <Entypo name="heart-outlined" size={36} color="white" />
            </View>

            </View>

          </View>

          <View style={{alignItems:'flex-start',marginVertical:4}}>
            <Text style={{alignItems:'flex-end' , fontSize:18, fontWeight:'bold',fontFamily:'inter' }}>Apple iPhone 15 Pro</Text>
          </View>

          <View style={{flexDirection:'row',}}>
              <View style={{alignItems:'flex-start',flexDirection:'row',gap:2, marginVertical:4}}> 
                <AntDesign name="star" size={22} color="black" />
                <AntDesign name="star" size={22} color="black" />
                <AntDesign name="star" size={22} color="black" />
                <AntDesign name="star" size={22} color="black" />
                <AntDesign name="star" size={22} color="black" />
              </View>
  
              <View style={{flexDirection:'row',marginHorizontal:12, justifyContent:'center',alignItems:'center'}}>
                <Feather name="message-square" size={26} color="gray" />
                <Text style={{marginHorizontal:6}}>97</Text>
              </View>
          </View>

          <View style={{flexDirection:'row', marginTop:54}}>
            <View>
              <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:24, textDecorationLine:'line-through',color:'gray',fontFamily:'inter'}}>$999.00</Text>
                  <View style={{maxWidth:66, paddingHorizontal:8,backgroundColor:'#E9F0FF', borderRadius:4 ,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:16,fontFamily:'inter1'}}>-10%</Text></View>
                </View>
                
              </View>
              <View style={{flexDirection:'column',}}><Text style={{fontSize:38,fontFamily:'inter1',color:'black',paddingVertical:4, marginTop:2,}}>$899.00</Text></View>
            </View>

            <View style={{justifyContent:'flex-end',alignItems:'flex-end', marginLeft:76 }}>
              <View style={styles.cart}>
                <Feather name="shopping-cart" size={32} color="white" />
              </View>
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

export default main

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:120,
    alignItems:'center',
  }, 
  card:{
    flex:1,
    backgroundColor:'rgb(254, 254, 250)',
    paddingVertical:20,
    paddingHorizontal:26,
    maxHeight:630,
    width:'85%',
    borderRadius:30,
    elevation:5,
  },
  img:{
    width:250,
    height:300,
    marginVertical:22
  },
  cart:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(96, 142, 241)',
    maxWidth:80,
    maxHeight:80,
    paddingVertical:22,
    paddingRight:24,
    paddingLeft:20,
    borderRadius:18,
  },
  imageContainer: {
    position: 'relative', // 👈 IMPORTANT
    alignItems: 'center',
  },
  
  filter: {
    position: 'absolute',
    top: 60,      // 👈 adjust this
    right: 0,   // 👈 pushes slightly outside like your design
  
    gap: 14,
  },

  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 50,
    backgroundColor: '#2c2f3a',
  
    justifyContent: 'center',
    alignItems: 'center',
  },
})

