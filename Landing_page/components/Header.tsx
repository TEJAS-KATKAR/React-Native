import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={{width:'100%', height:230,borderRadius: 35, backgroundColor: '#e56363',}} >
      <View style={{marginTop: 50, flexDirection: 'column', justifyContent: 'center',}} >
          <View style={{marginLeft: 30,  }}><Text style={{color:'#ebebeb'  }}>Location</Text></View>
          
            <View style={{flexDirection:'row',marginLeft: 34, alignItems:'center', marginTop: 5,}}>
              <FontAwesome6 name="location-dot" size={20} color="white" />
              <Text style={{color:'#ebebeb', fontSize: 16, marginLeft: 5,}}>New York, USA</Text>
              <Entypo name="chevron-down" size={24} color="white" />
              <View style={{marginLeft:'auto', marginRight: 30,backgroundColor: '#e89090', padding: 8, borderRadius: 10,}}>
                <MaterialIcons name="notifications" size={24} color="white" />
              </View>  
            </View>


            <View style={{marginTop: 4,flexDirection:'row',gap:10}} >
                <View style={{backgroundColor: 'white', marginLeft: 30, marginTop: 20, borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center',flexDirection:'row'}} >
                  <Fontisto name="zoom" size={24} color="#e56363" />
                  <TextInput placeholder='Search' style={{backgroundColor: 'white',fontSize:18, }} />
                </View> 
                <View style={{backgroundColor: 'white', marginRight: 30, marginTop: 20, borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center',justifyContent:'center'}} >
                  <Ionicons name="options-outline" size={35} color="#e56363"  />
                </View>
            </View>               
        </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({})